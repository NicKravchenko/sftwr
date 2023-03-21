from django.urls import path
from . import views

urlpatterns = [
    path('', views.verificar_internet, name='verificar_internet'),
]
