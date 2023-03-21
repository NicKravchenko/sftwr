from django.db import models
from prestamos.models import SolicitudPrestamo

class PadronFotografico(models.Model):
    documento = models.OneToOneField(SolicitudPrestamo, on_delete=models.CASCADE, primary_key=True)
    foto = models.ImageField(upload_to='padron_fotografico/')

    def __str__(self):
        return f"{self.documento}"
