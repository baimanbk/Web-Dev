
from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path("api/",include("api.urls")),
    path("admin/", admin.site.urls),
    path("", views.index)
]