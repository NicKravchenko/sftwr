from django.urls import path
from . import views

urlpatterns = [
    path('consultar/', views.consultar_persona, name='consultar_persona'),
]
