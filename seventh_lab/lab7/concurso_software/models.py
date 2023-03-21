from django.db import models

class Concursante(models.Model):
    nombre = models.CharField(max_length=100)
    correo = models.EmailField(unique=True)
    telefono = models.CharField(max_length=15)
    fecha_inscripcion = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nombre
