from django.db import models
from category.models import Category
from member.models import Member

class TestQuiz(models.Model):
    name        = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    is_reviewed = models.BooleanField(default=0)
    review      = models.TextField(null=True)
    is_approwed = models.BooleanField(default=0)
    category    = models.ForeignKey(Category)
    member      = models.ForeignKey(Member)

    def __unicode__(self):
        return self.name

class Question(models.Model):
    name               = models.CharField(max_length=80)
    explanation        = models.TextField()
    type_answer        = models.CharField(max_length=40)
    testquiz           = models.ForeignKey(TestQuiz, related_name='quest')
    correct_answer_id  = models.CharField(null=True, max_length=50)

    def __unicode__(self):
        return self.name

class Answer(models.Model):
    name      = models.CharField(max_length=100)
    question  = models.ForeignKey(Question, related_name='ans')
    correct   = models.BooleanField(default=0)

    def __unicode__(self):
        return self.name
