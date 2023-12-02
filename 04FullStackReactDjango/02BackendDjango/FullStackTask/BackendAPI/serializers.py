from rest_framework import serializers
from BackendAPI.models import Profile

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['fullName', 'email', 'phoneNumber']