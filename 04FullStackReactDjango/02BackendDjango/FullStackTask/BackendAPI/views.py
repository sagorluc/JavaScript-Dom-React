from django.shortcuts import render
from .models import Profile
from .serializers import ProfileSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt


# Create your views here.
class ProfileView(APIView):
    def get(self, request, id=None):
        if id is not None:
            get_obj    = Profile.objects.get(pk=id)
            serializer = ProfileSerializer(get_obj)
            return Response(serializer.data)
        obj        = Profile.objects.all()
        serializer = ProfileSerializer(obj, many=True)
        return Response(serializer.data)
    
  
    @csrf_exempt
    def post(self, request, id=None):
        if request.method == 'POST':
            data = request.data
            serializer = ProfileSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                res = {'message': 'Data Inserted'}
                return Response(res, status=status.HTTP_201_CREATED)
            else:
                res = {'message': 'Data is not valided'}
        err = {'message': 'Data insert failed'}
        return Response(err, status=status.HTTP_400_BAD_REQUEST)
            
