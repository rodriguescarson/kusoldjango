from django.db import models
from django.db.models.fields import CharField

# Basic User


class User(models.Model):
    id = models.AutoField
    email = models.CharField(max_length=200, null=False)
    password = models.CharField(max_length=300, null=False)
    username = models.CharField(max_length=200, null=False)


class Admin(models.Model):
    id = models.AutoField
    email = models.CharField(max_length=200, null=False)
    password = models.CharField(max_length=300, null=False)
    username = models.CharField(max_length=200, null=False)
    cid = models.IntegerField
