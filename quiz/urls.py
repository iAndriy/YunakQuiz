from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'quiz.views.home', name='home'),
    # url(r'^quiz/', include('quiz.foo.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'message.views.home', name='home'),
    # Yunak quiz REST API
    url(r'^api/message/', include('message.api.urls')),
    url(r'^api/test/', include('quizTest.api.urls')),
    url(r'^api/moderator/', include('moderator.api.urls')),
    url(r'^api/user/', include('user.api.urls')),
)
