from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', views.peliculas, name='peliculas'),
    # path('indexeddb.js', views.serve_indexeddb_js, name='indexeddb_js'),
]

