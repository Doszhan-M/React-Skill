# Generated by Django 4.0.4 on 2022-08-07 06:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Recipes', '0003_remove_category_post_post_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='image',
            field=models.ImageField(blank=True, upload_to='categories'),
        ),
        migrations.AddField(
            model_name='post',
            name='description',
            field=models.CharField(blank=True, max_length=256),
        ),
    ]