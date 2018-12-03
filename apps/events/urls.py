from django.conf.urls import include, url
from django.views.generic.base import TemplateView
from django.views.generic import RedirectView
from apps.events import views

urlpatterns = [
    url(r'^$', views.event_list, name='event_index'),
    url(r'^view/(?P<id>[^\.]+)/$', views.view_event, name='view_event'),
    url(r'^delete/(?P<id>[^\.]+)', views.delete_event, name='delete_event'),
    url(r'^date/(?P<selected_date>\d{4}-\d{2}-\d{2})[^\.]+', views.view_date, name='view_date'),
    url(r'^new/$', views.new_event, name='new_event'),
    url(r'^calendar/$', views.calendar, name='calendar'),
]
