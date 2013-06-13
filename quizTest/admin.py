from django.contrib import admin
from quizTest.models import TestQuiz, Question, Answer

# Register your models here.

class TestQuizAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'category', 'member')

class QuestionAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'correct_answer_id', 'testquiz')

class AnswerAdmin(admin.ModelAdmin):
    list_display = ('id','name', 'question', 'correct')

admin.site.register(TestQuiz, TestQuizAdmin)
admin.site.register(Question, QuestionAdmin)
admin.site.register(Answer, AnswerAdmin)
