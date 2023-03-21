from django.shortcuts import render

def peliculas(request):
    return render(request, 'ej1/index.html')
