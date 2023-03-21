from django.urls import path
from . import views

urlpatterns = [
    path('solicitud/', views.solicitud_prestamo, name='solicitud_prestamo'),
]
