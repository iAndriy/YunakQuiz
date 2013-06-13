from django.db import models

class Category(models.Model):
	name           = models.CharField(max_length = 100)
	parent_id      = models.IntegerField()

	def __unicode__(self):
		return self.name