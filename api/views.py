from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics, status
from rest_framework.generics import CreateAPIView, ListAPIView, UpdateAPIView
from .models import Patient, Requests , User, CardiacRequested
from .serializers import UserSerializer, RegisterSerializer,LoginSerializer, PatientSerializer, CreatePatientSerializer, RequestSerializer, CreateRequestSerializer, CardiacSerializer, UpdateCardiacSerializer #,
from rest_framework.views import APIView
from rest_framework.response import Response
from knox.models import AuthToken
# Create your views here.

# class UsersView(CreateAPIView): #ListAPIView for just the data
#    queryset = User.objects.all()
#    serializer_class = UsersSerializer
class PatientView(CreateAPIView): #ListAPIView for just the data
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

class RequestView(CreateAPIView):
    queryset = Requests.objects.all()
    serializer_class = RequestSerializer
# class CreateUsers(APIView):
#     serializer_class = CreateUsersSerializer
#     def post(self,request,format=None):
#         if not self.request.session.exists(self.request.session.session_key):
            
#         pass
#class GetUserTable(ListAPIView):
##    queryset = Users.objects.all()
#    serializer_class = UsersSerializer

class GetPatientTable(ListAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

class GetRequestTable(ListAPIView):
    queryset = Requests.objects.all()
    serializer_class = RequestSerializer


#class GetUsers(APIView):
#    serializer_class = CreateUsersSerializer
#    def post(self, request, format=None):
#        if not self.request.session.exists(self.request.session.session_key):
#            self.request.session.create()
#        
#        serializer = self.serializer_class(data=request.data)
#        if serializer.is_valid():
#            username = serializer.data.username
#            password = serializer.data.password3
#
#        return Response(UsersSerializer(Users).data)

class GetPatients(APIView):
    serializer_class = CreatePatientSerializer
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            # username = serializer.data.username
            # password = serializer.data.password
            wardaadhar = serializer.data.wardaadhar

        return Response(PatientSerializer(Patient).data)


#class GetOneUser(APIView):
#    serializer_class = UsersSerializer
#    lookup_url_kwarg = 'username'#
#
#
#    def get(self,request,format=None):
#        username = request.GET.get(self.lookup_url_kwarg)
#        if username != None:
#            entry = Users.objects.filter(username=username)
#            if len(entry)>0:
#                data = UsersSerializer(entry[0]).data
#                # data['is_host'] = self.request.session.session_key == entry[0].host
#                return Response(data,status=status.HTTP_200_OK)
#            return Response({'Data not found':'Code parameter not found'},status=status.HTTP_404_NOT_FOUND)
#        return Response({'Bad request':'Code parameter bad'},status=status.HTTP_400_BAD_REQUEST)
        

def main(request):
    return HttpResponse('Ninja')

class RegisterAPIView(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


class LoginAPIView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


class GetCardiacTable(CreateAPIView):
    queryset = CardiacRequested.objects.all()
    serializer_class = CardiacSerializer

class UpdateCardiac(UpdateAPIView):
    serializer_class = UpdateCardiacSerializer

    def patch(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            A_1_descr = serializer.data.get('A_1_descr')
            A_1_name = serializer.data.get('A_1_name')
            code = serializer.data.get('code')

            queryset = CardiacRequested.objects.filter(code=code)
            if not queryset.exists():
                return Response({'msg': 'Request not found.'}, status=status.HTTP_404_NOT_FOUND)

            cardiacrequest = queryset[0]
            user_id = self.request.session.session_key
            #if room.host != user_id:
            #    return Response({'msg': 'You are not the host of this room.'}, status=status.HTTP_403_FORBIDDEN)

            cardiacrequest.A_1_descr = A_1_descr
            cardiacrequest.A_1_name = A_1_name
            cardiacrequest.save(update_fields=['A_1_descr', 'A_1_name'])
            return Response(UpdateCardiacSerializer(cardiacrequest).data, status=status.HTTP_200_OK)

        return Response({'Bad Request': "Invalid Data..."}, status=status.HTTP_400_BAD_REQUEST)