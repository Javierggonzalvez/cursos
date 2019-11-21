from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse_lazy
from django.contrib.messages.views import SuccessMessageMixin
from django.contrib.auth.mixins import (LoginRequiredMixin, 
                                        PermissionRequiredMixin)
from django.views import generic


class SinPrivilegios(LoginRequiredMixin, PermissionRequiredMixin):
    raise_exception = False
    redirect_field_name = "redirect_to"
    login_url = 'bases:login'
    
    def handle_no_permission(self):
        from django.contrib.auth.models import AnonymousUser

        if not self.request.user==AnonymousUser():
            self.login_url = 'bases:sin_privilegios'
        return HttpResponseRedirect(reverse_lazy(self.login_url))


class VistaBaseCreate(SuccessMessageMixin, SinPrivilegios, generic.CreateView):
    context_object_name = "obj"
    success_message = "Registro Agregado Satisfactoriamente"
    
    def form_valid(self, form):
        form.instance.uc = self.request.user
        return super().form_valid(form)


class VistaBaseEdit(SuccessMessageMixin, SinPrivilegios, generic.UpdateView):
    context_object_name = "obj"
    success_message = "Registro Modificado Satisfactoriamente"
    
    def form_valid(self, form):
        form.instance.um = self.request.user.id
        return super().form_valid(form)


class Home(LoginRequiredMixin, generic.TemplateView):
    template_name = 'home.html'
    login_url = 'bases:login'


class HomeSinPrivilegios(LoginRequiredMixin, generic.TemplateView):
    login_url = 'bases:login'
    template_name = "sin_privilegios.html"
