from django.db import models

class SolicitudPrestamo(models.Model):
    TIPO_DOCUMENTO_CHOICES = (
        ('CED', 'Cédula'),
        ('PAS', 'Pasaporte'),
    )

    tipo_documento = models.CharField(max_length=3, choices=TIPO_DOCUMENTO_CHOICES)
    documento = models.CharField(max_length=20, unique=True)
    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    fecha_nacimiento = models.DateField()
    vehiculo_propio = models.BooleanField()
    casa_propia = models.BooleanField()
    telefono = models.CharField(max_length=20)
    referencia = models.TextField(blank=True)
    empleador = models.CharField(max_length=100)
    monto_solicitado = models.DecimalField(max_digits=10, decimal_places=2)
    plazo = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.nombres} {self.apellidos}"
