from django.urls import path
from BackendAPI.views import ProfileView

urlpatterns = [
    path('', ProfileView.as_view(), name="profile")
]
