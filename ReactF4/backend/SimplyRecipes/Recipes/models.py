from django.db import models


class Category(models.Model):
    title = models.CharField(max_length=256, blank=True)
    image = models.ImageField(upload_to='categories', blank=True,)

    def __str__(self):
        return f'{self.title}'

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
        

class Post(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    title = models.CharField(max_length=256, blank=True)
    description = models.CharField(max_length=256, blank=True)
    text = models.TextField(blank=True)
    image = models.ImageField(upload_to='posts', blank=True,)
    
    def __str__(self):
        return f'{self.title}'

    class Meta:
        verbose_name = 'Post'
        verbose_name_plural = 'Posts'
        