from django.conf.urls import include, url
from django.contrib.auth import views as auth_views
from django.views.generic.base import TemplateView
from django.views.generic import RedirectView
from django.urls import path
from . import views

urlpatterns = [
        path('signup/', views.SignUp.as_view(), name='signup'),
        url(r'^logout/$', auth_views.LogoutView.as_view(), name='logout'),
        url(r'^login/$', auth_views.LoginView.as_view(template_name='core/login.html'), name='login'),
]


