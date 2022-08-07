from django.urls import path
from .views import  *


app_name = 'Recipes'


urlpatterns = [
    path("all_posts/", AllPosts.as_view(), name="all_posts"),
    path("all_categories/", AllCategories.as_view(), name="all_categories"),
    path("post/<int:pk>/", PostDetail.as_view(), name="post"),
    path("post_category/<int:pk>/", PostCategory.as_view(), name="post_category"),
]