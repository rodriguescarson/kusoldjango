import collections
from django.http.response import JsonResponse
from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import CustomerSerializer, EmployeeSerializer, UserSerializer
from rest_framework.response import Response
from .models import Customer, Employee, User
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser

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

        user = User.objects.filter(email=email).first() #User is the collection here ok, should i copy this api code and make changes? wait
        print(user)
        if user is None:
            raise AuthenticationFailed('User not found')

        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect Password')

        return Response({
            'message': 'success'
        })
        
@api_view(['GET', 'POST', 'DELETE'])
def CreateEmployee(request):
    if request.method == 'GET':
        employee = Employee.objects.all()
        employee_seri = EmployeeSerializer(employee, many=True)
        return JsonResponse(employee_seri.data, safe=False)
    
    if request.method == 'POST':
        employee_data = JSONParser().parse(request)
        serializer = EmployeeSerializer(data=employee_data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        print('okk')
        return Response(serializer.data)
    

@api_view(['GET', 'POST', 'DELETE'])
def CreateCustomer(request):
    if request.method == 'GET':
        customers = Customer.objects.all()
        customer_seri = CustomerSerializer(customers, many=True)
        return JsonResponse (customer_seri.data, safe=False)
    
    if request.method == 'POST':
        customer_data = JSONParser().parse(request)
        serializer = CustomerSerializer(data=customer_data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        print('okk')
        return Response(serializer.data)
    
