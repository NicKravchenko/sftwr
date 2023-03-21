from register.views import PersonCreateView, update_from_document
from django.urls import path

urlpatterns = [
    path("", PersonCreateView.as_view(), name="person_list"),
]
