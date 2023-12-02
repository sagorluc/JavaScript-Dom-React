from django.db import models

# Create your models here.

class Profile(models.Model):
    fullName = models.CharField(max_length=25)
    email = models.EmailField(max_length= 50)
    phoneNumber = models.CharField(max_length= 14)
    createdDate = models.DateTimeField(auto_now_add=True)
    modifyDate = models.DateTimeField(auto_now= True)
    
    
