from django.db import models
from django.db.models.fields import CharField

# Basic User 

class User(models.Model):
     id = models.AutoField
     email = models.CharField(max_length=200)
     password = models.CharField(max_length=300)
     username = models.CharField(max_length=200)

class Admin(models.Model):
     id = models.AutoField
     email = models.CharField(max_length=200)
     password = models.CharField(max_length=300)
     username = models.CharField(max_length=200)
     cid = models.IntegerField
