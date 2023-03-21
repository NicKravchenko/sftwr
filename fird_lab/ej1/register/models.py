from django.db import models


class Person(models.Model):
    document = models.CharField(max_length=50)
    first_name = models.CharField(max_length=50)
    second_name = models.CharField(max_length=50)
    SEX_CHOICES = (
        ("M", "Male"),
        ("F", "Female"),
        ("O", "Other"),
    )
    sex = models.CharField(max_length=1, choices=SEX_CHOICES)
    birth_date = models.DateField()
    photo = models.ImageField(upload_to="photos/")
    comment = models.TextField()
    start_date = models.DateField(auto_now_add=True)
