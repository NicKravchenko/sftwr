from django.http import HttpResponse
from .models import Producto
from .utils import generar_reporte_productos_pdf

def reporte_productos(request):
    tipo_producto_id = request.GET.get('tipo', None)

    if tipo_producto_id:
        productos = Producto.objects.filter(tipo__id=tipo_producto_id)
    else:
        productos = Producto.objects.all()

    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = 'attachment; filename="reporte_productos.pdf"'
    generar_reporte_productos_pdf(response, productos)

    return response
