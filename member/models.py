from django.db import models

class Member(models.Model):
	name           = models.CharField(max_length=100)
	email          = models.CharField(max_length=150)
	password       = models.CharField(max_length=150)
	role           = models.CharField(max_length=150)
	plastRole      = models.CharField(max_length=50)
	dateOfBirthday = models.DateTimeField()
	city           = models.CharField(max_length=150)                 
	group          = models.CharField(max_length=50)

	def __unicode__(self):
		return self.name