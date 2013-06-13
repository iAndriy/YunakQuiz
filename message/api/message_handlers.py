from message.models import Message
from piston.handler import BaseHandler

class MessageHandler(BaseHandler):
    # print('print in recipehandler')
    model = Message
    allowed_methods = ['GET', 'POST', 'PUT', 'DELETE']
    fields = ('id', 'email', 'subject', 'message')

    # def create(self, request, *args, **kwargs):
    #     print('save kkkkkkkkkkkk')

    def create(self, request):
        if request.content_type:
            data = request.data
            print(request.data)
            
            em = self.model(email=data['email'], subject=data['subject'], message=data['message'])
            em.save()
            # return rc.CREATED
        else:
            print("else request.data")
            print(request.data)
            data = request.data
            em = self.model(email=data['email'], subject=data['subject'], message=data['message'])
            em.save()

