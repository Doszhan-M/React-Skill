from rest_framework.generics import (
    CreateAPIView, ListAPIView, RetrieveAPIView, UpdateAPIView,
)
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED


from .models import Post, Category
from .serializers import PostSerializer, CategorySerializer


class PostDetail(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
    
class AllPosts(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    

class AllCategories(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    
    
class PostCategory(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
    