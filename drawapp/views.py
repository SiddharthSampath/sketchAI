from django.shortcuts import render

# Create your views here.
def canvaspage(request):
    return render(request,
                  "drawapp/canvaspage.html")
