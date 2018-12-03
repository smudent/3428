from notes.models import Note
from django.shortcuts import render, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect
from django.urls import reverse

@login_required
def note_list(request):
    notes = Note.objects.filter(user=request.user).all().order_by('-creation_date')
    notes_dict = {
        'notes': notes
    }
    return render(request, 'note_index.html', notes_dict)

@login_required
def new_note(request):
    if request.method == 'POST':
        if request.POST.get('title') and request.POST.get('body'):
            note=Note()
            note.user = request.user
            note.title = request.POST.get('title')
            note.body = request.POST.get('body')
            note.save()
            return HttpResponseRedirect(reverse(note_list))
        else:
            return render(request, 'notes.html')
    else:
        return render(request, 'notes.html')

@login_required
def delete_note(request, id):
    print("DELETING")
    note = get_object_or_404(Note, user=request.user, id=id)
    note.delete()
    return HttpResponseRedirect(reverse(note_list)) 

@login_required
def view_note(request, id):
    note = get_object_or_404(Note, user=request.user, id=id)
    note_dict = {
        'note': note
    }
    return render(request, 'note_view.html', note_dict)
