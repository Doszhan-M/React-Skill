from django.urls import path
from .views import  (Test)


app_name = 'Recipes'

urlpatterns = [
    path("test/", Test.as_view(), name="test"),
]