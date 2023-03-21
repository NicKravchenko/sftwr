from django.urls import path
from . import views

urlpatterns = [
    path('', views.inscripcion, name='inscripcion'),
    path('comprobante/<int:concursante_id>/', views.descargar_comprobante, name='descargar_comprobante'),
]
