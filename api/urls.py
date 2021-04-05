from django.urls import path, include
from .views import main,GetPatientTable,GetPatients,PatientView,GetRequestTable,RequestView,LoginAPIView,ViewRequestTable,RegisterAPIView,GetCardiacTable, UpdateCardiacFormAView,UpdateCardiacFormBView
urlpatterns = [
    #path('',include('frontend.urls')),
    # path('users',UsersView.as_view()),
    # path('get-user',GetOneUser.as_view()),
    # path('get-user-table',GetUserTable.as_view()),
    path('get-patient-table',GetPatientTable.as_view()),
    # path('get-request-table',GetRequestTable.as_view()),
    path('get-request-table/<str:docnumber>',GetRequestTable.as_view()),
    path('view-request-table',ViewRequestTable.as_view()),
    path('patients',PatientView.as_view()),
    path('requests',RequestView.as_view()),
    path('login',LoginAPIView.as_view()),
    path('register',RegisterAPIView.as_view()),
    path('get-cardiac-table',GetCardiacTable.as_view()),
    # path('update-cardiac/<pk>', UpdateCardiac.as_view()),
    path('update-cardiac-forma/<str:docnumber>', UpdateCardiacFormAView.as_view()),
    path('update-cardiac-formb/<str:docnumber>', UpdateCardiacFormBView.as_view()),
]