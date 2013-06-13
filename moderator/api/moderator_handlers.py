from quizTest.models import TestQuiz, Answer, Question
from category.models import Category
from piston.handler import BaseHandler
from django.utils import simplejson
class ModeratorHandler(BaseHandler):
    model = TestQuiz
    allowed_methods = ['GET', 'POST', 'PUT', 'DELETE']
    fields = ('id', 'name', 'description', 'category_id', 'member_id', 'is_reviewed', 'is_approwed', 'review', ('quest', ('name','id','type_answer','explanation',('ans', ('name','correct','id'),),),),)

    def read(self, request, id=None):

        exclude = ('id', 'name', 'description')
        
        if id:

            return self.model.objects.get(id=id) 
        else:
            return self.model.objects.filter(is_approwed=0)
    def update(self,request, id=None):

        if id:
            test = self.model.objects.get(id=id)
            data = request.data
            review = request.data['review']
            test.review = review
            is_approwed = request.data['isApproved']
            test.is_approwed = is_approwed
            test.save()
            test.is_reviewed = request.data['isReviewed']
            test.save()
            return self.model.objects.get(id=id)
            