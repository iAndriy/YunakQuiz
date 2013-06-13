from django.conf.urls import patterns, include, url
from piston.resource import Resource
from quizTest.api.quiz_handlers import QuizHandler
from moderator.api.moderator_handlers import ModeratorHandler
from moderator import views
urlpatterns = patterns('',
    url('^saveTest/(?P<id>\d)$', views.saveTest),
    # url('^sendReview/(?P<id>\d)$', Resource(ReviewSendingHandler)),
    # url('^approveTest/(?P<id>\d)$', Resource(ApproveTestHandler)),
    url('^getTests$', Resource(ModeratorHandler)),
    url('^getTest/(?P<id>\d)$', Resource(ModeratorHandler)),
    url('^updateTest/(?P<id>\d)$', Resource(ModeratorHandler)),



)