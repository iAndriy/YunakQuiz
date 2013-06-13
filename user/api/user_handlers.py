from member.models import Member
from piston.handler import BaseHandler
from django.core import serializers
from django.http import HttpResponse

class UserHandler(BaseHandler):
	model = Member
	allowed_methods = ['GET',]
	fields = ('name', 'role', 'email', 'role', 'id')
