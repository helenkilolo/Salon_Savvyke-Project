from django import forms
from django.core.exceptions import ValidationError
from .models import Appointment
from datetime import date

class AppointmentForm(forms.ModelForm):
    class Meta:
        model = Appointment
        fields = ['date_time', 'customer_name', 'service_type']
    time = forms.TimeField(widget=forms.TimeInput(attrs={'type': 'time'}))
