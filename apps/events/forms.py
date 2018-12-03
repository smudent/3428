from django import forms
from datetime import datetime
from django.utils import timezone
from django.contrib.admin import widgets

class EventForm(forms.Form):
    FREQUENCY = (
        (0, 'None'),
        (1, 'Daily'),
        (7, 'Weekly'),
        (14, 'Biweekly')
    )
    title = forms.CharField(label='Title', max_length=100)
    body = forms.CharField(label='Description', widget=forms.Textarea)
    start_date = forms.DateField(
        label="Event Date", 
        widget=forms.SelectDateWidget(),
        initial=timezone.now()
    )
