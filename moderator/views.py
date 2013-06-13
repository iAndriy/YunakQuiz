# Create your views here.
from django.shortcuts import render_to_response
from django.template.context import RequestContext
from django.http import HttpResponse
from moderator.models import TestQuiz
from django.core import serializers
# b = 10000
from django.core import serializers
def index(request):
  # myTest = serializers.serialize("xml", SomeModel.objects.all())
  myTest = serializers.serialize("json", TestQuiz.objects.filter(is_approwed = 0))
  return HttpResponse(myTest)

def getTest(request, id):
  id = int(id)
  return HttpResponse('Here should be test number  %d' %id)
def saveTest(request, id):
  id = int(id)
  return HttpResponse('Here should be test number  %d' %id) 