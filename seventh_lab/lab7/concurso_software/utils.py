from io import BytesIO
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas

def generar_comprobante_pdf(response, concursante):
    buffer = BytesIO()
    c = canvas.Canvas(buffer, pagesize=letter)

    c.drawString(50, 750, f'ID: {concursante.id}')
    c.drawString(50, 730, f'Nombre: {concursante.nombre}')
    c.drawString(50, 710, f'Correo: {concursante.correo}')
    c.drawString(50, 690, f'Teléfono: {concursante.telefono}')
    c.drawString(50, 670, f'Fecha de inscripción: {concursante.fecha_inscripcion.strftime("%Y-%m-%d %H:%M:%S")}')

    c.showPage()
    c.save()
    buffer.seek(0)
    response.write(buffer.getvalue())
    buffer.close()
