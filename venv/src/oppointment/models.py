from django.db import models
from django.db.models.fields import CharField
from django.contrib.auth.models import AbstractUser
from bson.objectid import ObjectId

# Basic User


# class User(models.Model):
#     id = models.AutoField
#     email = models.CharField(max_length=200, null=False)
#     password = models.CharField(max_length=300, null=False)
#     username = models.CharField(max_length=200, null=False)
 
class User(AbstractUser):
    email = models.EmailField(max_length = 250,unique=True)
    password = models.CharField(max_length = 250)
    username = models.CharField(max_length=200)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    contact_number = models.IntegerField()
    business_name = models.CharField(max_length=50)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

class Admin(models.Model):
     email = models.CharField(max_length=200)
     password = models.CharField(max_length=300)
     username = models.CharField(max_length=200)
     cid = models.IntegerField

class Employee(models.Model):
   salary = models.IntegerField()
   work_location = models.CharField(max_length=100)

class Customer(models.Model):
    organization = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    interests = models.CharField(max_length=100)
    
class Appointment(models.Model):  
    employee_id = models.CharField(max_length=100)
    customer_id =  models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    mode = models.CharField(max_length=100)
    calender_id = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    
# {
#     "username" : "jrr",
#     "email" : "mn@m.com",
#     "password" : "jrr123",
#     "first_name" : "jr",
#     "last_name" : "rr",
#     "contact_number" : 123456,
#     "business_name" : "kusol"
# }