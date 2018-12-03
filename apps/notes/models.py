from django.conf import settings
from django.db import models
from django.urls import reverse
from django.contrib.auth import get_user_model
from datetime import datetime

class Note(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name="notes",
        verbose_name="user",
        on_delete=models.CASCADE,
        null=True,
        blank=False,
    )
    title = models.CharField(max_length=100, default=datetime.now())
    id = models.AutoField(primary_key=True)
    body = models.TextField(null=False, blank=False)
    creation_date = models.DateTimeField(auto_now_add=True)

    def get_absolute_url(self):
        return reverse('view_note', args=[str(self.id)])

    def get_delete_url(self):
        return reverse('delete_note', args=[str(self.id)])
