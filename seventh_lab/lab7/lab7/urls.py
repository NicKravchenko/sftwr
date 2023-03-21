from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('peliculas/', include('ej1.urls')),
    path('conexion/', include('conexion.urls')),
    path('concurso/', include('concurso_software.urls')),
    path('reporte/', include('app_reporte.urls')),
]
