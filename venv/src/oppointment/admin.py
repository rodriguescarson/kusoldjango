from django.contrib import admin
from .models import Appointment, Customer, Employee, User,Admin
# Register your models here.
admin.site.register(User)
admin.site.register(Admin)
admin.site.register(Employee)
admin.site.register(Customer)
admin.site.register(Appointment)