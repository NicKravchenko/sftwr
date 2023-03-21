import boto3
from django.shortcuts import render, redirect
from .forms import ImageForm
from django.conf import settings
import re


def image_upload(request):
    if request.method == "POST":
        form = ImageForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return render(request, "image_scan.html", {"form": form})
    else:
        form = ImageForm()
    return render(request, "image_upload.html", {"form": form})

def image_scan(request):
    if request.method == "POST":
        form = ImageForm(request.POST, request.FILES)
        if form.is_valid():
            image = form.cleaned_data["image"]
            cedula = None

            session = boto3.Session(
                aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
                aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
            )

            region = "us-east-1"

            client = session.client("rekognition", region_name=region)

            response = client.detect_text(Image={"Bytes": image.read()})

            print(response)
            pattern = r"\d{3}-\d{7}-\d{1}"
            for elem in response:
                if re.match(pattern, elem):
                    cedula = elem

            # Render the scan result template with the detected text
            return render(
                request, "scan_results.html", {"cedula": cedula}
            )
    else:
        # If the request method is not POST, create a new form
        form = ImageForm()
    return render(request, "image_upload.html", {"form": form})


# views.py
from django.shortcuts import render
from .forms import PersonImageForm
from .models import PersonImage
from django.conf import settings

def validate_image(image):
    response = settings.rekognition_client.detect_moderation_labels(Image={'Bytes': image.read()})
    for label in response['ModerationLabels']:
        if label['ParentName'] == 'Explicit Nudity' or label['ParentName'] == 'Suggestive':
            return False

    image.seek(0)
    response = settings.rekognition_client.detect_faces(Image={'Bytes': image.read()}, Attributes=['DEFAULT'])
    if len(response['FaceDetails']) != 1:
        return False

    return True

def describe_image(image):
    response = settings.rekognition_client.detect_labels(Image={'Bytes': image.read()}, MaxLabels=10, MinConfidence=80)
    description = []
    for label in response['Labels']:
        description.append(label['Name'])

    return ', '.join(description)

def upload_description_image(request):
    if request.method == 'POST':
        form = DescriptionImageForm(request.POST, request.FILES)
        if form.is_valid():
            image = request.FILES['image']
            description = describe_image(image)
            description_image = DescriptionImage(image=image)
            description_image.save()
            return render(request, 'description_result.html', {'description': description})
    else:
        form = DescriptionImageForm()

    return render(request, 'upload_description_image.html', {'form': form})
