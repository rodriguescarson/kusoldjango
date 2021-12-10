from rest_framework import serializers
from .models import Employee, User, Customer, Appointment

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','email','password','first_name','last_name','contact_number','business_name']
        extra_kwargs = {
            'password' : {'write_only' : True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['username','email','first_name','last_name','contact_number','working_days']
        
class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['username','email','password','first_name','last_name','contact_number']
        
class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['username','email','password','first_name','last_name','contact_number']
        