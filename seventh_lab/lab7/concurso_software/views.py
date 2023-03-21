from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Concursante
from .forms import InscripcionForm
from .utils import generar_comprobante_pdf

def inscripcion(request):
    if request.method == 'POST':
        form = InscripcionForm(request.POST)
        if form.is_valid():
            concursante = form.save()
            return render(request, 'inscripcion_exitosa.html', {'concursante': concursante})
    else:
        form = InscripcionForm()

    return render(request, 'inscripcion.html', {'form': form})

def descargar_comprobante(request, concursante_id):
    concursante = get_object_or_404(Concursante, pk=concursante_id)
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = f'attachment; filename="comprobante_{concursante.correo}.pdf"'
    generar_comprobante_pdf(response, concursante)
    return response
