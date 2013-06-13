from django.contrib import admin
from message.models import Message

# Register your models here.

class MessageAdmin(admin.ModelAdmin):
    list_display = ('subject', 'message')

# admin.site.register(Message, MessageAdmin)
