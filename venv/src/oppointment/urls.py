from django.urls import path, include
from .views import (
    CreateAppointment,
    CreateCustomer,
    CreateEmployee,
    RegisterView,
    LoginView,
    UserView
)

urlpatterns = [
    path("register", RegisterView.as_view()),
    path("login", LoginView.as_view()),
    path('user',UserView.as_view()),
    path("createEmployee", CreateEmployee),
    path("createCustomer", CreateCustomer),
    path("createAppointment", CreateAppointment)
]