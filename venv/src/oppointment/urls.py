from django.urls import path, include
from rest_framework import routers
from .views import (
    AppointmentView,
    CreateCustomer,
    CreateEmployee,
    RegisterView,
    LoginView,
    UserView,
    LogoutView
)
router = routers.DefaultRouter()
router.register('appointment',AppointmentView)
urlpatterns = [
    path("register", RegisterView.as_view()),
    path("login", LoginView.as_view()),
    path('user',UserView.as_view()),
    path("createEmployee", CreateEmployee),
    path("createCustomer", CreateCustomer),
    path("", include(router.urls)),
    path('logout', LogoutView.as_view())
]