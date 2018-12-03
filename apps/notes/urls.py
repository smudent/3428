from django.conf.urls import include, url
from django.views.generic.base import TemplateView
from django.views.generic import RedirectView
from apps.notes import views

urlpatterns = [
        url(r'^$', views.note_list, name='note_index'),
        url(r'^view/(?P<id>[^\.]+)', views.view_note, name='view_note'),
        url(r'^new/', views.new_note, name='new_note'),
        url(r'^delete/(?P<id>[^\.]+)', views.delete_note, name='delete_note'),
]
