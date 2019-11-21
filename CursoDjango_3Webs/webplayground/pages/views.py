from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.contrib.admin.views.decorators import staff_member_required
from django.utils.decorators import method_decorator
from django.urls import reverse, reverse_lazy
from django.shortcuts import redirect
from .models import Page
from .forms import PageForm


class StaffRequiredMixin(object):
    """
    mixin requerira que el usuario sea mienbro del staff
    """
    #comprobación de usuarios
    @method_decorator(staff_member_required)
    def dispatch(self, request, *args, **kwargs):
        """if not request.user.is_staff: 
            # redireccion al login
            return redirect(reverse_lazy('admin:login'))"""
        return super(PageCreate, self).dispatch(request, *args, **kwargs)



# Create your views here.
class PageListView(ListView):
    model = Page
    

class PageDetailView(DetailView):
    model = Page


@method_decorator(staff_member_required, name='dispatch')
class PageCreate(CreateView):
    model = Page
    form_class = PageForm
    # fields = ['title', 'content', 'order']
    success_url = reverse_lazy('pages:pages')


@method_decorator(staff_member_required, name='dispatch')
class PageUpdate(UpdateView):
    model = Page
    form_class = PageForm
    template_name_suffix = '_update_form'

    def get_success_url(self): # para poder recoger la primary key con url
        return reverse_lazy('pages:update', args=[self.object.id]) + '?ok'


@method_decorator(staff_member_required, name='dispatch')
class PageDelete(DeleteView):
    model = Page
    success_url = reverse_lazy('pages:pages')