from django.urls import path
from . import views

urlpatterns = [
  path('', views.home, name='home'),
  path('about/', views.about, name='about'),
  path('bobs/', views.bobs_index, name='index'),
  path('bobs/<int:bob_id>/', views.bobs_detail, name='detail'),
  path('bobs/create/', views.BobCreate.as_view(), name='bobs_create'),
  path('bobs/<int:pk>/update/', views.BobUpdate.as_view(), name='bobs_update'),
  path('bobs/<int:pk>/delete/', views.BobDelete.as_view(), name='bobs_delete'),
  path('bobs/<int:bob_id>/add_feeding/', views.add_feeding, name='add_feeding'),
  path('bobs/<int:bob_id>/assoc_toy/<int:toy_id>/', views.assoc_toy, name='assoc_toy'),
  path('bobs/<int:bob_id>/unassoc_toy/<int:toy_id>/', views.unassoc_toy, name='unassoc_toy'),
  path('toys/', views.ToyList.as_view(), name='toys_index'),
  path('toys/<int:pk>/', views.ToyDetail.as_view(), name='toys_detail'),
  path('toys/create/', views.ToyCreate.as_view(), name='toys_create'),
  path('toys/<int:pk>/update/', views.ToyUpdate.as_view(), name='toys_update'),
  path('toys/<int:pk>/delete/', views.ToyDelete.as_view(), name='toys_delete'),
]