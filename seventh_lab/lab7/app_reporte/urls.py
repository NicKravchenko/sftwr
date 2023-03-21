from django.urls import path
from . import views

urlpatterns = [
    path('', views.reporte_productos, name='reporte_productos'),
]
