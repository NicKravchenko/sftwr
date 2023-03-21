from io import BytesIO
from reportlab.lib.pagesizes import letter, landscape
from reportlab.pdfgen import canvas

def generar_reporte_productos_pdf(response, productos):
    buffer = BytesIO()
    c = canvas.Canvas(buffer, pagesize=landscape(letter))

    c.setFont("Helvetica-Bold", 14)
    c.drawString(50, 550, "Reporte de productos")

    c.setFont("Helvetica", 12)
    c.drawString(50, 520, "ID")
    c.drawString(100, 520, "Nombre")
    c.drawString(300, 520, "Tipo")
    c.drawString(500, 520, "Precio")

    y = 500
    for producto in productos:
        y -= 20
        c.drawString(50, y, str(producto.id))
        c.drawString(100, y, producto.nombre)
        c.drawString(300, y, producto.tipo.nombre)
        c.drawString(500, y, f'${producto.precio:.2f}')

    c.showPage()
    c.save()
    buffer.seek(0)
    response.write(buffer.getvalue())
    buffer.close()
