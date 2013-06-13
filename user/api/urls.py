from django.conf.urls import patterns, include, url
from piston.resource import Resource

from user.api.user_handlers import UserHandler

urlpatterns = patterns('',
    url(r'^user$', Resource(UserHandler)),
    url('^user/(?P<id>\d)$', Resource(UserHandler)),
)