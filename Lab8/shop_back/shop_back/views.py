
from django.http import HttpResponse

def index(request):
    return HttpResponse("Okay, project is available")