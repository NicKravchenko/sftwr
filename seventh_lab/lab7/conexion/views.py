from django.shortcuts import render

def verificar_internet(request):
    return render(request, 'conexion/conexion.html')

