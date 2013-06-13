from django.conf.urls import patterns, include, url
from piston.resource import Resource

from quizTest.api.quiz_handlers import QuizHandler

urlpatterns = patterns('',
    url(r'^quiz$', Resource(QuizHandler)),
    url('^quiz/(?P<id>\d)$', Resource(QuizHandler)),
)