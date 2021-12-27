import collections
from django.http.response import JsonResponse
from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import (
    AppointmentSerializer,
    CustomerSerializer,
    EmployeeSerializer,
    UserSerializer,
)
from .models import Appointment
from rest_framework import viewsets
from rest_framework.response import Response
from .models import Appointment, Customer, Employee, User
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from django.core import serializers
from django.http import JsonResponse
from django.middleware.csrf import get_token
import jwt,datetime
# Create your views here.

# you need 3 collections, employee, appointment, customer telling ok


class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email).first()
        print(user)
        if user is None:
            raise AuthenticationFailed('User not found')

        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect Password')

        payload = {
            'id' : user.id,
            'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat' : datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret' , algorithm = 'HS256').decode('utf-8')
        print(token)
        
        response = Response()
        response.set_cookie(key='jwt',value=token,httponly=True)
        print(user)        
        response.data = {
            'jwt' : token,
            "user": UserSerializer(user).data
        }

        return response


class UserView(APIView):
    def get(self,request):
        token = request.headers.get('Authorization')
        jwt_token = token.split(' ')[1]
        if not jwt_token:
            raise AuthenticationFailed('Unauthenticated')
        
        try:
            payload = jwt.decode(jwt_token,'secret',algorithm = ['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated')
        
        user = User.objects.filter(id = payload['id']).first()
        serializer= UserSerializer(user)
        print(serializer.data)
        return Response(serializer.data)


@api_view(["GET", "POST", "DELETE"])
def CreateEmployee(request):
    if request.method == "GET":
        employee = Employee.objects.all()
        employee_seri = EmployeeSerializer(employee, many=True)
        return JsonResponse(employee_seri.data, safe=False)

    if request.method == "POST":
        print("hello")
        employee_data = JSONParser().parse(request)
        serializer = EmployeeSerializer(data=employee_data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        print("okk")
        return Response(serializer.data)


@api_view(["GET", "POST", "DELETE"])
def CreateCustomer(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        customer_seri = CustomerSerializer(customers, many=True)
        return JsonResponse(customer_seri.data, safe=False)

    if request.method == "POST":
        customer_data = JSONParser().parse(request)
        serializer = CustomerSerializer(data=customer_data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        print("okk")
        return Response(serializer.data)


# @api_view(["GET", "POST", "DELETE"])
# def CreateAppointment(request):
#     if request.method == "GET":
#         appointment = Appointment.objects.all()
#         appoint_seri = AppointmentSerializer(appointment, many=True)
#         return JsonResponse(appoint_seri.data, safe=False)

#     if request.method == "POST":
#         appoint_data = JSONParser().parse(request)
#         serializer = AppointmentSerializer(data=appoint_data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         print("okk")
#         return Response(serializer.data)

class AppointmentView(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    def post(self,request):
        serializer = AppointmentSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'status':'success','data':serializer.data})
        else:
            return Response({'status':'error'})
    
class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'success'
        }
        return response