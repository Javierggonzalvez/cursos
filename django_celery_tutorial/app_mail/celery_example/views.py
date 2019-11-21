from django.shortcuts import render, HttpResponse
from .tasks import prueba_suma, enviar_mail

def index(request):
    resultado = prueba_suma.delay(5, 6)
    enviar_mail.delay("Asunto", "Contenido mensaje", "mail@mail.com")
    return HttpResponse("Hola")

