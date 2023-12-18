import uuid
import boto3
from django.shortcuts import render, redirect
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic import ListView, DetailView
from .models import Bob, Toy, Photo
from .forms import FeedingForm
import os

# Create your views here.
def home(request):
    return render(request, 'home.html')

def about(request):
  return render(request, 'about.html')

def bobs_index(request):
  bobs = Bob.objects.all()
  return render(request, 'bobs/index.html', {
    'bobs': bobs
  })

def bobs_detail(request, bob_id):
  bob = Bob.objects.get(id=bob_id)
  id_list = bob.toys.all().values_list('id')
  toys_bob_doesnt_have = Toy.objects.exclude(id__in=id_list)
  feeding_form = FeedingForm()
  return render(request, 'bobs/detail.html', {
    'bob': bob, 'feeding_form': feeding_form,
    'toys': toys_bob_doesnt_have
  })

class BobCreate(CreateView):
  model = Bob
  fields = ['name', 'type', 'description', 'age']

class BobUpdate(UpdateView):
  model = Bob
  fields = ['type', 'description', 'age']

class BobDelete(DeleteView):
  model = Bob
  success_url = '/bobs'

def add_feeding(request, bob_id):
  form = FeedingForm(request.POST)
  if form.is_valid():
    new_feeding = form.save(commit=False)
    new_feeding.bob_id = bob_id
    new_feeding.save()
  return redirect('detail', bob_id=bob_id)

class ToyList(ListView):
  model = Toy

class ToyDetail(DetailView):
  model = Toy

class ToyCreate(CreateView):
  model = Toy
  fields = '__all__'

class ToyUpdate(UpdateView):
  model = Toy
  fields = ['name', 'color']

class ToyDelete(DeleteView):
  model = Toy
  success_url = '/toys'

def assoc_toy(request, bob_id, toy_id):
  Bob.objects.get(id=bob_id).toys.add(toy_id)
  return redirect('detail', bob_id=bob_id)

def unassoc_toy(request, bob_id, toy_id):
  Bob.objects.get(id=bob_id).toys.remove(toy_id)
  return redirect('detail', bob_id=bob_id)

def add_photo(request, bob_id):
    # photo-file will be the "name" attribute on the <input type="file">
    photo_file = request.FILES.get('photo-file', None)
    if photo_file:
        s3 = boto3.client('s3')
        # need a unique "key" for S3 / needs image file extension too
        key = uuid.uuid4().hex[:6] + photo_file.name[photo_file.name.rfind('.'):]
        # just in case something goes wrong
        try:
            bucket = os.environ['S3_BUCKET']
            s3.upload_fileobj(photo_file, bucket, key)
            # build the full url string
            url = f"{os.environ['S3_BASE_URL']}{bucket}/{key}"
            # we can assign to bob_id or bob (if you have a bob object)
            Photo.objects.create(url=url, bob_id=bob_id)
        except Exception as e:
            print('An error occurred uploading file to S3')
            print(e)
    return redirect('detail', bob_id=bob_id)