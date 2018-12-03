from django.db import models
from django.conf import settings
from django.urls import reverse
from datetime import datetime

class Event(models.Model):
    FREQUENCY = (
        (0, 'None'),
        (1, 'Daily'),
        (7, 'Weekly'),
        (14, 'Biweekly')
    )

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name="events",
        verbose_name="user",
        on_delete=models.CASCADE,
        null=True,
        blank=False,
    )
    title = models.CharField(max_length=100, default=datetime.now())
    id = models.AutoField(primary_key=True)
    body = models.TextField(null=False, blank=False)
    start_date = models.DateField('Start Date', default=datetime.now)
    end_date = models.DateField('End Date', default=datetime.now)
    start_time = models.TimeField('Start Time', default=datetime.now)
    end_time = models.TimeField('End Time', default=datetime.now)
    frequency = models.IntegerField(choices=FREQUENCY, default=0)
    
    def get_formatted_date(self):
        return self.start_date.strftime('%Y-%m-%d')

    def get_absolute_url(self):
        return reverse('view_event', args=[str(self.id)])
