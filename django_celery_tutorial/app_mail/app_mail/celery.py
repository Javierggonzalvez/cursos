# -*- coding: utf-8 -*-
from __future__ import absolute_import, unicode_literals
import os
import django
from django.conf import settings
from celery import Celery

# set the default Django settings module for the 'celery' program.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'app_mail.settings')
django.setup()
# Creamos nuestra aplicación celery y le pasamos un nombre
app = Celery('proj')

# Inicializamos la app celery con la configuración de nuestro proyecto Django
app.config_from_object('django.conf:settings', namespace='CELERY')

# auto-inspeccionara nuestras app, buscara métodos con l‘@tasks’ de celery.
app.autodiscover_tasks()

# broker que utilizamos para guardar los jobs,
app.conf.broker_url = 'redis://localhost:6379/0'

