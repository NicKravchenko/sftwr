from django import forms
from .models import Concursante

class InscripcionForm(forms.ModelForm):
    class Meta:
        model = Concursante
        fields = ['nombre', 'correo', 'telefono']
