from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render
from django.contrib.auth.decorators import login_required

@login_required(login_url='/login/')
def home(request):
    current_path = {
        "current_path": request.path
    }
    return render(request, 'main_menu.html', current_path)

@login_required
def lifestyle(request):
    return render(request, 'relax_menu.html')

@login_required
def planner(request):
    return render(request, 'planner_menu.html')

@login_required
def events(request):
    return render(request, 'event_view.html')

@login_required
def planner(request):
    return render(request, 'planner_menu.html')
