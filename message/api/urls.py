from django.conf.urls import patterns, include, url
from piston.resource import Resource

from message.api.message_handlers import MessageHandler

urlpatterns = patterns('',
    url(r'^letter$', Resource(MessageHandler)),
    url('^letter/(?P<id>\d)$', Resource(MessageHandler)),
)