from events.models import Event
from events.forms import EventForm
from django.shortcuts import render, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.urls import reverse
from django.http import HttpResponseRedirect
import json
from datetime import datetime
from django.template import Context

@login_required
def event_list(request):
    events = Event.objects.filter(user=request.user).all().order_by('start_date')
    
    events_dict = {
        'events': events
    }
    return render(request, 'event_index.html', events_dict)

@login_required
def new_event(request):
    if request.method == 'POST':
        if request.POST.get('title') and request.POST.get('body'):
            form = EventForm(request.POST)
            event=Event()
            if form.is_valid():
                event.user = request.user
                event.title = form.cleaned_data['title']
                event.body = form.cleaned_data['body']
                event.start_date = form.cleaned_data['start_date']
                event.save()
                return HttpResponseRedirect(reverse(event_list))
            else:
                form = EventForm()
        else:
            return render(request, 'events.html')
    else:
        form = EventForm()
        return render(request, 'events.html', {'form': form})

@login_required
def view_event(request, id):
    event =  get_object_or_404(Event, user=request.user, id=id)
    event_dict = {
        'event': event
    }
    date = event.start_date.strftime 
    print("%s" % event.start_date.strftime('%b %d %Y'))
    return render(request, 'event_view.html', event_dict)

@login_required
def delete_event(request, id):
    event = get_object_or_404(Event, user=request.user, id=id)
    event.delete()
    return HttpResponseRedirect(reverse(event_list))

@login_required
def view_date(request, selected_date):
    events = Event.objects.filter(start_date=selected_date, user=request.user).all().order_by('start_time')
    events_dict = {
        'events': events
    }
    return render(request, 'date_view.html', events_dict)

@login_required
def calendar(request):
    print("Calender function")
    events = Event.objects.filter(user=request.user).all().order_by('start_date')
    events_dict = {
        'events': events
    }
    return render(request, 'calendar.html', events_dict)
