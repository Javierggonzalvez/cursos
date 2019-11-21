from django.shortcuts import render, HttpResponse

html_base = """
    <h1> Mi Web personal</h1>
    <ul>
        <li><a href="/home">Portada</a></li>
        <li><a href="/about-me">A cerca de</a></li>
        <li><a href="/portfolio">Portafolio</a></li>
        <li><a href="/contacto">Contacto</a></li>   
    </ul>
"""

# Create your views here.
def home(request):
    return render(request, "core/home.html")

def about(request):
    return render(request, "core/about.html")



def contacto(request):
    return render(request, "core/contacto.html")
