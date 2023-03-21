from django.shortcuts import render, get_object_or_404
from prestamos.models import SolicitudPrestamo
from .models import PadronFotografico
from django.conf import settings
import os

def consultar_persona(request):
    if request.method == "POST":
        documento = request.POST.get('documento')
        print(documento)
        persona = get_object_or_404(SolicitudPrestamo, documento=documento)
        # try:
        #     padron = PadronFotografico.objects.get(documento=persona)
        #     foto_url = padron.foto.url
        # except PadronFotografico.DoesNotExist:
        #     foto_url = None
        foto_nombre = f"{documento}.jpg"  # Asume que la extensión de la foto es .jpg
        foto_path = os.path.join(settings.MEDIA_ROOT, foto_nombre)

        if os.path.exists(foto_path):
            foto_url = os.path.join(settings.MEDIA_URL, foto_nombre)
        else:
            foto_url = None


        return render(request, "detalle_persona.html", {"persona": persona, "foto_url": foto_url})
    else:
        return render(request, "consultar_persona.html")
