from django.contrib import admin
from category.models import Category

# Register your models here.

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'parent_id')

admin.site.register(Category, CategoryAdmin)
