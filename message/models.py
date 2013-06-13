from django.db import models

class Message(models.Model):
	email   =  models.CharField(max_length=150)
	subject =  models.CharField(max_length=150)
	message =  models.TextField(blank=True) 


