from quizTest.models import TestQuiz, Answer, Question
from category.models import Category
from piston.handler import BaseHandler
from django.utils import simplejson
# from piston.utils import rc, validate

class QuizHandler(BaseHandler):
    # print('print in recipehandler')
    model = TestQuiz
    allowed_methods = ['GET', 'POST', 'PUT', 'DELETE']
    fields = ('id', 'name', 'description', 'category_id', 'member_id', 'is_reviewed', 'is_approwed', 'review', ('quest', ('name','type_answer','explanation',('ans', ('name','correct','id'),),),),)

    def read(self, request, id=None):

        exclude = ('id', 'name', 'description')
        
        if id:
            # t = self.model.objects.get(id=id) 
            # t = Question.objects.get(testquiz_id=id)
            # print(t)
            return self.model.objects.get(id=id) 
        else:
            return self.model.objects.all()

    def create(self, request):
        if request.content_type:
            data = request.data
            print(request.data)          
            em = self.model(name=data['name'], description=data['description'], category_id=data['category'], member_id=1,is_reviewed='0',is_approwed='0',review='123')
            em.save()
            # return rc.CREATED
        else:
            print("else request.data")
            print(request.data)
            data = request.data
            countQuest = int(data['countQuestion'])
            em = self.model(name=data['name'], description=data['description'], category_id=data['category'], member_id=1,is_reviewed='',is_approwed='',review='123')
            em.save()
            k = 0
            ans = 0
           
            while(k < countQuest):
                if(k > 0):
                    countAns = int(data['items[{i}][countAnswer][]'.format(i=k)])
                else:
                    countAns = int(data['items[{i}][countAnswer]'.format(i=k)])

                Question(testquiz_id=em.id, name=data['items[{i}][name][]'.format(i=k)], explanation='123', type_answer=data['items[{i}][type]'.format(i=k)], correct_answer_id=data['items[0][correctAnswerIds]']).save()
                question_last_id = Question.objects.latest('id').id
                answers_correct = ''
                while(ans < countAns):
                    Answer(question_id=question_last_id, name=data['items[{i}][items][{j}][name][]'.format(i=k, j=ans)], correct=data['items[{i}][items][{j}][correct][]'.format(i=k, j=ans)]).save()
                    ans = ans + 1
                    answer_last_id = Answer.objects.latest('id').id
                    answer_last = Answer.objects.get(id = answer_last_id).correct
                    if(answer_last):
                        answers_correct += str(answer_last_id) + ', '
                q = Question.objects.get(id = question_last_id)
                q.correct_answer_id = answers_correct
                q.save(update_fields=['correct_answer_id'])
                ans = 0
                k   = k + 1

# class QuizHandler(BaseHandler):
#     # print('print in recipehandler')
#     model = Question
#     allowed_methods = ['GET', 'POST', 'PUT', 'DELETE']
#     fields = ('id', 'name','explanation','type_answer', 'test_id','correct_answer_id')

#     def create(self, request):
#         print(request.data)
#         if request.content_type:s
#             data = request.data
#             print(request.data)
            
#             em = self.model(name='44', explanation='1', test_id=1, type_answer='radio', correct_answer_id='2')
#             # em = self.model(name=data['name'], description=data['description'], category_id=data['category'], member_id=data['category'], is_rewiewed='0', is_approwed='0')
#             em.save()
#             # return rc.CREATED
#         else:
#             print("else request.data")
#             print(request.data)
#             data = request.data
#             em = self.model(name='44', explanation='1', test_id=1, type_answer='radio', correct_answer_id='2')
#             em.save()



# class QuizHandler(BaseHandler):
#     # print('print in recipehandler')
#     model = Answer
#     allowed_methods = ['GET', 'POST', 'PUT', 'DELETE']
#     fields = ('id', 'name','correct','question_id')

#     def create(self, request):
#         print(request.data)
#         if request.content_type:
#             data = request.data
#             print(request.data)
            
#             em = self.model(name='44', correct='1', question_id=1)
#             # em = self.model(name=data['name'], description=data['description'], category_id=data['category'], member_id=data['category'], is_rewiewed='0', is_approwed='0')
#             em.save()
#             # return rc.CREATED
#         else:
#             print("else request.data")
#             print(request.data)
#             data = request.data
#             em = self.model(name='44', correct='1', question_id=1)
#             em.save()

# class QuizHandler(BaseHandler):
#     # print('print in recipehandler')
#     model = Category
#     allowed_methods = ['GET', 'POST', 'PUT', 'DELETE']
#     fields = ('id', 'name', 'parent_id')

#     # def create(self, request, *args, **kwargs):
#     #     print('save kkkkkkkkkkkk')

#     def create(self, request):
#         if request.content_type:
#             data = request.data
#             print(request.data)
            
#             em = self.model(name='Probu', parent_id=0)
#             em.save()
#             # return rc.CREATED
#         else:
#             print("else request.data")
#             print(request.data)
#             data = request.data
#             em = self.model(name='Probu', parent_id=0)
#             em.save()
