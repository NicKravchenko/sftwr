from django import forms
from .models import SolicitudPrestamo

class SolicitudPrestamoForm(forms.ModelForm):
    class Meta:
        model = SolicitudPrestamo
        fields = ['tipo_documento', 'documento', 'nombres', 'apellidos', 'fecha_nacimiento', 'vehiculo_propio', 'casa_propia', 'telefono', 'referencia', 'empleador', 'monto_solicitado', 'plazo']
