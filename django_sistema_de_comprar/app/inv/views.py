from django.shortcuts import render, redirect
from django.views import generic
from django.urls import reverse_lazy
from django.contrib import messages
from django.contrib.auth.mixins import (LoginRequiredMixin,
                                        PermissionRequiredMixin)
from django.contrib.messages.views import SuccessMessageMixin
from django.contrib.auth.decorators import login_required, permission_required

from .models import Categoria, SubCategoria, Marca, UnidadMedida, Producto
from .forms import (CategoriaForm, SubCategoriaForm, MarcaForm, 
                    UnidadMedidaForm, ProductoForm)
from bases.views import SinPrivilegios

"""
SinPrivilegios hereda de bases.views.SinPrivilegio:
        LoginRequieredMixin + PermissionRequierementMixin
------------------------
Para funciones utilizamos decoradores:
        @login_required(login_url='/login/')
        @permission_required('inv.change_marca', login_url='bases:sin_privilegios')
        def marca_inactivar(request, id):

"""

class CategoriaView(SinPrivilegios, generic.ListView):
    permission_required = "inv.view_categoria"
    model = Categoria
    template_name = 'inv/categoria_list.html'
    context_object_name = 'obj'


class CategoriaNew(SuccessMessageMixin, SinPrivilegios, generic.CreateView):
    
    model = Categoria
    template_name = 'inv/categoria_form.html'
    permission_required = "inv.add_categoria"
    context_object_name = 'obj'
    form_class = CategoriaForm
    success_url = reverse_lazy('inv:categoria_list')
    succes_message = 'Categoría creada OK'

    # tomammos el usuario logeado uc(user_created)
    def form_valid(self, form):
        form.instance.uc = self.request.user
        return super().form_valid(form)


class CategoriaEdit(SuccessMessageMixin, SinPrivilegios, generic.UpdateView):
    model = Categoria
    template_name = 'inv/categoria_form.html'
    permission_required = "inv.change_categoria"
    context_object_name = 'obj'
    form_class = CategoriaForm
    success_url = reverse_lazy('inv:categoria_list')
    success_message = "Categría Editada OK"

    # tomammos el usuario logeado um(user_modify)
    def form_valid(self, form):
        form.instance.um = self.request.user.id
        return super().form_valid(form)


class CategoriaDel(SinPrivilegios, generic.DeleteView):
    model = Categoria
    template_name = 'inv/catalogos_del.html'
    permission_required = "inv.delete_categoria"
    context_object_name = 'obj'
    success_url = reverse_lazy('inv:categoria_list')


class SubCategoriaView(SinPrivilegios, generic.ListView):
    permission_required = "inv.view_subcategoria"
    model = SubCategoria
    template_name = 'inv/subcategoria_list.html'
    context_object_name = 'obj'


class SubCategoriaNew(SinPrivilegios, generic.CreateView):
    model = SubCategoria
    template_name = 'inv/subcategoria_form.html'
    permission_required = "inv.add_subcategoria"
    context_object_name = 'obj'
    form_class = SubCategoriaForm
    success_url = reverse_lazy('inv:subcategoria_list')

    # tomammos el usuario logeado uc(user_created)
    def form_valid(self, form):
        form.instance.uc = self.request.user
        return super().form_valid(form)


class SubCategoriaEdit(SinPrivilegios, generic.UpdateView):
    model = SubCategoria
    template_name = 'inv/subcategoria_form.html'
    permission_required = "inv.change_subcategoria"
    context_object_name = 'obj'
    form_class = SubCategoriaForm
    success_url = reverse_lazy('inv:subcategoria_list')

    # tomammos el usuario logeado um(user_modify)
    def form_valid(self, form):
        form.instance.um = self.request.user.id
        return super().form_valid(form)


class SubCategoriaDel(SinPrivilegios, generic.DeleteView):
    model = SubCategoria
    template_name = 'inv/catalogos_del.html'
    permission_required = "inv.delete_subcategoria"
    context_object_name = 'obj'
    success_url = reverse_lazy('inv:subcategoria_list')


class MarcaView(SinPrivilegios, generic.ListView):
    model = Marca
    permission_required = "inv.view_marca"
    template_name = 'inv/marca_list.html'
    context_object_name = 'obj'


class MarcaNew(SinPrivilegios, generic.CreateView):
    model = Marca
    template_name = 'inv/marca_form.html'
    permission_required = "inv.add_marca"
    context_object_name = 'obj'
    form_class = MarcaForm
    success_url = reverse_lazy('inv:marca_list')

    # tomammos el usuario logeado uc(user_created)
    def form_valid(self, form):
        form.instance.uc = self.request.user
        return super().form_valid(form)


class MarcaEdit(SinPrivilegios, generic.UpdateView):
    model = Marca
    template_name = 'inv/marca_form.html'
    permission_required = "inv.change_marca"
    context_object_name = 'obj'
    form_class = MarcaForm
    success_url = reverse_lazy('inv:marca_list')

    # tomammos el usuario logeado um(user_modify)
    def form_valid(self, form):
        form.instance.um = self.request.user.id
        return super().form_valid(form)


@login_required(login_url='/login/')
@permission_required('inv.change_marca', login_url='bases:sin_privilegios')
def marca_inactivar(request, id):
    marca = Marca.objects.filter(pk=id).first()
    context = {}
    template_name = 'inv/catalogos_deactivate.html'

    if not marca:
        return redirect("inv:marca_list")

    if request.method == 'GET':
        context = {'obj': marca}

    if request.method=='POST':
        marca.estado = False
        marca.save()
        messages.success(request, "Marca inactivada")
        return redirect('inv:marca_list')
    return render(request, template_name, context)


class UnidadMedidaView(SinPrivilegios, generic.ListView):
    model = UnidadMedida
    permission_required = "inv.view_unidad_medida"
    template_name = 'inv/unidad_medida_list.html'
    context_object_name = 'obj'


class UnidadMedidaNew(SinPrivilegios, generic.CreateView):
    model = UnidadMedida
    template_name = 'inv/unidad_medida_form.html'
    permission_required = "inv.add_unidad_medida"
    context_object_name = 'obj'
    form_class = UnidadMedidaForm
    success_url = reverse_lazy('inv:unidad_medida_list')

    # tomammos el usuario logeado uc(user_created)
    def form_valid(self, form):
        form.instance.uc = self.request.user
        return super().form_valid(form)


class UnidadMedidaEdit(SinPrivilegios, generic.UpdateView):
    model = UnidadMedida
    permission_required = "inv.change_unidad_medida"
    template_name = 'inv/unidad_medida_form.html'
    context_object_name = 'obj'
    form_class = UnidadMedidaForm
    success_url = reverse_lazy('inv:unidad_medida_list')

    # tomammos el usuario logeado um(user_modify)
    def form_valid(self, form):
        form.instance.um = self.request.user.id
        return super().form_valid(form)


@login_required(login_url='/login/')
@permission_required('inv.unidad_medida', login_url='bases:sin_privilegios')
def unidad_medida_inactivar(request, id):
    marca = UnidadMedida.objects.filter(pk=id).first()
    context = {}
    template_name = 'inv/catalogos_deactivate.html'

    if not marca:
        return redirect("inv:unidad_medida_list")

    if request.method == 'GET':
        context = {'obj': marca}

    if request.method=='POST':
        marca.estado = False
        marca.save()
        return redirect('inv:unidad_medida_list')
    return render(request, template_name, context)


class ProductoView(SinPrivilegios, generic.ListView):
    model = Producto
    template_name = 'inv/producto_list.html'
    permission_required = "inv.view_producto"
    context_object_name = 'obj'


class ProductoNew(SinPrivilegios, generic.CreateView):
    model = Producto
    permission_required = "inv.add_producto"
    template_name = 'inv/producto_form.html'
    context_object_name = 'obj'
    form_class = ProductoForm
    success_url = reverse_lazy('inv:producto_list')

    # tomammos el usuario logeado uc(user_created)
    def form_valid(self, form):
        form.instance.uc = self.request.user
        return super().form_valid(form)


class ProductoEdit(SinPrivilegios, generic.UpdateView):
    model = Producto
    template_name = 'inv/producto_form.html'
    permission_required = "inv.view_producto"
    context_object_name = 'obj'
    form_class = ProductoForm
    success_url = reverse_lazy('inv:producto_list')

    # tomammos el usuario logeado um(user_modify)
    def form_valid(self, form):
        form.instance.um = self.request.user.id
        return super().form_valid(form)


def producto_inactivar(request, id):
    producto = Producto.objects.filter(pk=id).first()
    context = {}
    template_name = 'inv/catalogos_deactivate.html'

    if not producto:
        return redirect("inv:producto_list")

    if request.method == 'GET':
        context = {'obj': producto}

    if request.method=='POST':
        producto.estado = False
        producto.save()
        return redirect('inv:producto_list')
    return render(request, template_name, context)