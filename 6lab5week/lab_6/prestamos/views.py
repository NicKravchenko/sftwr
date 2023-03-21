from django.shortcuts import render
from .models import SolicitudPrestamo
from .forms import SolicitudPrestamoForm

def solicitud_prestamo(request):
    if request.method == "POST":
        form = SolicitudPrestamoForm(request.POST)
        if form.is_valid():
            solicitud = form.save()
            # Lógica para determinar el estado de aprobación de la solicitud
            if solicitud.vehiculo_propio and solicitud.casa_propia:
                monto_maximo = 300000
            elif solicitud.vehiculo_propio:
                monto_maximo = 90000
            else:
                monto_maximo = 0

            if solicitud.monto_solicitado <= monto_maximo:
                estado = "Aprobado"
            elif monto_maximo > 0:
                estado = "En proceso"
            else:
                estado = "Rechazado"

            return render(request, "resultado.html", {"estado": estado})
    else:
        form = SolicitudPrestamoForm()

    return render(request, "solicitud.html", {"form": form})
