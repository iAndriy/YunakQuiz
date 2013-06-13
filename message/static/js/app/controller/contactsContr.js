steal('app/controller/baseContr.js',
	  'app/models',
      'jquery/model',
      'jquery/dom/form_params',
	  'jquery/lang/json',

	  function (){
	  	BaseController.extend('Contacts', {
	  		defaults: {
	  			options: {
	  				message: "Contacts page [defaults]"
	  			},
	  			view: 'static/js/app/view/contacts/contacts.ejs'
	  		}
	  	}, {
	  		init: function() {
	  			this._super();
	  			this.element.html('//app/view/contacts/contacts.ejs', {});
	  			console.info("Contacts controller run!!!");
	  			$('#newbutton').click(function (){
	  				alert('Event Contacts controller');
	  			});
	  		},
	  		'destroy': function (){
	  			this._super();
	  			console.info("Contacts - destroyed");
	  		},
	  		submit : function(el, ev){
				ev.preventDefault();
				var mail = $("#email").val();
            	var title = $("#subject").val();
            	var text = $("#message").val();

                filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)([a-zA-Z0-9]{2,4})+$/;
				if (!filter.test(mail)) {

					alert("Невірна електронна адреса");
 					return false;
 				}

               
                if (text.length < 15) {

                    alert("Тіло повідомлення занадто маленьке");
                    return false;
                }
            
				var json = $('#newMessage').formParams();
				new Message(json).save(this.callback('sent'));
				console.log ("json message");
				console.log (json);
			},
			sent : function(){
				this.element.find('[type=submit]').val('Відправ');
				this.element[0].reset()
			}
	  	});
	  });