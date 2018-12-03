"""northwood URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
"""
# Django imports
from django.conf.urls import include, url
from django.urls import path
from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.views.generic.base import TemplateView
from django.views.generic import RedirectView
from . import views

urlpatterns = [
    # Examples:
    # url(r'^blog/', include('blog.urls', namespace='blog')),
    url(r'^$', RedirectView.as_view(url='/accounts/login/')),
    url(r'^home/', views.home, name='home'),
    # provide the most basic login/logout functionality
    #url(r'^login/$', auth_views.LoginView.as_view(template_name='core/login.html'), name='core_login'),
    #url(r'^logout/$', auth_views.LogoutView.as_view(), name='core_logout'),
    path('accounts/', include('accounts.urls')),
    path('accounts/', include('django.contrib.auth.urls')),
    path('notes/', include('notes.urls')),
    path('events/', include('events.urls')),
    # enable the admin interface
    url(r'^admin/', admin.site.urls),
    url(r'^lifestyle/', views.lifestyle, name='lifestyle'),
    #url(r'^dates/', views.dates, name='dates'),
    #url(r'^planner/', views.planner, name='planner'),
]
