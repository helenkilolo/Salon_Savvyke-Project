from django.db import models
from django.conf import settings


class Appointment(models.Model):

    SERVICE_CHOICES = [
    ('haircut', 'Haircut'),
    ('coloring', 'Hair Coloring'),
    ('styling', 'Hair Styling'),
    # Add more choices as needed
]
    
    date_time = models.DateTimeField()
    customer_name = models.CharField(max_length=100)
    service_type = models.CharField(max_length=100, choices=SERVICE_CHOICES)

    def __str__(self):
        return f"{self.date_time} - {self.customer_name}"

