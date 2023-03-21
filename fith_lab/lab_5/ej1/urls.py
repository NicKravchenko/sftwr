from django.urls import path
from . import views

urlpatterns = [
    path("", views.image_upload, name="image_upload"),
    path("scan/", views.image_scan, name="image_scan"),
    path('upload_image/', views.upload_image, name='upload_image'),
    path('upload_description_image/', views.upload_description_image, name='upload_description_image'),

]
