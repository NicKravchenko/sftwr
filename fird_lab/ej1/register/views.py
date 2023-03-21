from django.urls import reverse_lazy
from django.views.generic.edit import CreateView
from django.shortcuts import render, redirect
from .forms import PersonForm
from .models import Person


class PersonCreateView(CreateView):
    template_name = "person_form.html"
    form_class = PersonForm
    success_url = reverse_lazy("person_list")

    def form_valid(self, form):
        response = super().form_valid(form)
        if form.cleaned_data.get("document") and not self.object:
            return render(
                self.request,
                "person_form.html",
                {
                    "auto_fill": True,
                    "form": form,
                },
            )
        return response


def update_from_document(request):
    if request.method == "POST":
        document_number = request.POST.get("document_number")
        return redirect("person_list")
