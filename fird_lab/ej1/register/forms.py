from django import forms
from .models import Person
import requests


class PersonForm(forms.ModelForm):
    class Meta:
        model = Person
        fields = (
            "document",
            "first_name",
            "second_name",
            "sex",
            "birth_date",
            "photo",
            "comment",
        )

    def clean_document(self):
        document = self.cleaned_data["document"]
        if Person.objects.filter(document=document).exists():
            raise forms.ValidationError(
                "A person with this document number already exists."
            )
        return document

    def fetch_data_from_external_source(self, document):
        base_link = f"https://compulaboratoriomendez.com/lib/?Key=DESARROLLOWEB&MUN_CED={document[0:3]}&SEQ_CED={document[3:10]}&VER_CED={document[10:11]}"
        response = requests.get(base_link)
        print(response.status_code)
        if response.status_code == 200:
            data = response.json()
            print(data)
            self.cleaned_data["first_name"] = data["first_name"]
            self.cleaned_data["second_name"] = data["second_name"]
            self.cleaned_data["sex"] = data["sex"]
            self.cleaned_data["birth_date"] = data["birth_date"]
            return True
        return False

    def clean(self):
        cleaned_data = super().clean()
        first_name = cleaned_data.get("first_name")
        second_name = cleaned_data.get("second_name")
        if first_name and second_name:
            cleaned_data["first_name"] = first_name.upper()
            cleaned_data["second_name"] = second_name.title()
        return cleaned_data

    def save(self, commit=True):
        if not self.instance.pk and self.fetch_data_from_external_source(
            self.cleaned_data["document"]
        ):
            # Disable auto-fill for existing records.
            commit = False
        return super().save(commit=commit)
