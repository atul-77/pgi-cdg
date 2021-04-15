from django.urls import path, include
from .views import main,GetPatientTable,GetPatients,PatientView,GetRequestTable,RequestView,LoginAPIView,RegisterAPIView,GetCardiacTable,UpdateCardiac,ViewRequestTable,GetCardiacSuppliedTable
urlpatterns = [
    #path('',include('frontend.urls')),
    # path('users',UsersView.as_view()),
    # path('get-user',GetOneUser.as_view()),
    # path('get-user-table',GetUserTable.as_view()),
    path('get-patient-table',GetPatientTable.as_view()),
    path('get-request-table/<int:docnumber>/',GetRequestTable.as_view()),
    path('view-request-table/',ViewRequestTable.as_view()),
    path('patients',PatientView.as_view()),
    path('requests',RequestView.as_view()),
    path('login',LoginAPIView.as_view()),
    path('register',RegisterAPIView.as_view()),
    path('cardiac-table',GetCardiacTable.as_view()),
    path('cardiac-supplied-table',GetCardiacSuppliedTable.as_view()),
    path('update-cardiac', UpdateCardiac.as_view()),
]

# path('questions/<int:question_id>/', apiviews.QuestionDetailView.as_view(), name='question_detail_view')