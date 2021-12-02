from django.db import models
from django.db.models.fields import CharField
from django.contrib.auth.models import AbstractUser

# Basic User


# class User(models.Model):
#     id = models.AutoField
#     email = models.CharField(max_length=200, null=False)
#     password = models.CharField(max_length=300, null=False)
#     username = models.CharField(max_length=200, null=False)

class User(AbstractUser):
    email = models.EmailField(max_length = 25,unique=True)
    password = models.CharField(max_length = 25)
    username = models.CharField(max_length=200)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

class Admin(models.Model):
     email = models.CharField(max_length=200)
     password = models.CharField(max_length=300)
     username = models.CharField(max_length=200)
     cid = models.IntegerField
