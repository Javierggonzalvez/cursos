from django.urls import path
from . import views

urlpatterns = [

    path('', views.blog, name='blog'),

    # int: por que esperamos un número
    path('category/<int:category_id>/', views.category, name="category"),
]