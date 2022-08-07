from rest_framework.generics import (
    ListAPIView, RetrieveAPIView,
)

from .models import Post, Category
from .serializers import (
    PostSerializer, CategorySerializer
)


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
    model = Post
    serializer_class = PostSerializer
    
    def get_queryset(self):
        if getattr(self, 'swagger_fake_view', False):
            return Post.objects.none()
        category_id = self.kwargs['pk']
        queryset = self.model.objects.filter(category=category_id)
        return queryset

