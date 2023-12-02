
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('BackendAPI.urls')),
    path('<int:id>', include('BackendAPI.urls')),
]
