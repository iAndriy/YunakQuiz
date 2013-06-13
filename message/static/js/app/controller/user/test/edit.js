steal('app/controller/baseContr.js',
	  'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'app/models',
       'jquery/model',
       'jquery/dom/form_params',
	   'jquery/lang/json',

	  function (){
	  	BaseController.extend('EditTest', {
	  		defaults: {
	  			options: {
	  				message: "Tests edit page",
	  			}
	  		}
	  	}, 
	  	{
	  	
	  	init: function(attr) {
	  		this._super();
	  		console.info("EditTest controller run!!!");
	  		$('#newbutton').click(function (){
	  			alert('Event EditTest controller');
	  		});
		},
	  	
	  	'destroy': function (){
	  		this._super();
	  		console.info("Test - destroyed");
	  	},

	
		submit : function(el, ev){
			ev.preventDefault();
			var json = $('#createTest').formParams();
			this.element.find('[type=submit]').val('Creating...')
			new App.Models.Test(json).save(this.callback('saved'));
		},

		saved : function(){
			this.element.find('[type=submit]').val('Create');
			this.element[0].reset()
		},

		'#createNewTest click' : function(){
			this.element.html(this.view('//app/view/test/user/test/create/create'));	
		},

		'.addAnswer click': function( el ){
			// при кліці на кнопку addAnswer я доступаюсь до атрибутів id i alt
			// в id я передаю номер питання, в alt - номер відповіді
			var numQuestion = el.attr("id");
			var numAnswer = el.attr("alt");
			var numAnswerNext = ((parseInt(numAnswer)) + 1).toString();
			el.replaceWith(
				'<a class = "destroy"><div class="row pagination-centered"><div class="span5 pagination-right"><label>Відповідь '+ numAnswerNext +':</label></div><div class="span3"><input type="text" name="items[' + numQuestion + '][answer][' + numAnswer + '][name]" id="items[' + numQuestion + '][answer][' + numAnswer + '][name]" class="addText"  placeholder="Вкажіть варіант відповіді '+ numAnswerNext +'"/></div> X </a></div>' +
				'<p class="pagination-centered"><input type="button" id="' + numQuestion + '" class="addAnswer btngreen" alt="' + numAnswerNext + '" value="Add answer"></p>' ),
			$('.addAnswer').focus();
		},

		'.addQuestion click': function( el ){
			var numQuestion = el.attr("id");
			var numQuestionNext =((parseInt(numQuestion)) + 1).toString();
			el.replaceWith(
				'<h3>Питання № '+numQuestionNext+'</h3>'+
				'<div class="row pagination-centered"><div class="span5 pagination-right"><label>Назва питання:</label></div><div class="span3"><input type="text" name="items['+numQuestion+']name" id="items['+numQuestion+']name" class="span3"  placeholder="Вкажіть назву питання"/></div></div>'+
				'<div class="row pagination-centered"><div class="span5 pagination-right"><label>Номери правильних відповідей:</label></div><div class="span3"><input type="text" name="items['+numQuestion+']correctAnswerIds" id="items['+numQuestion+']correctAnswerIds" class="span3"  placeholder="Приклад: 1, 2"/></div></div>' +
				'<div class="row"><div class="span5 pagination-right"><label>Тип відповіді:</label></div><div class="span3 pagination-left"><input type="radio" name="items['+numQuestion+']type" id="items['+numQuestion+']type" value="radio" checked> radio<br><input type="radio" name="items['+numQuestion+']type" id="items['+numQuestion+']type" value="checkbox"> checkbox<br></div></div><br>' +
				'<a class = "destroy"><div class="row pagination-centered"><div class="span5 pagination-right"><label>Відповідь 1:</label></div><div class="span3"><input type="text" name="items[' + numQuestion + '][items][0][name]" id="items[' + numQuestion + '][items][0][name]" class="addText"  placeholder="Вкажіть відповідь 1"/></div> X </a></div>' +
			 	'<a class = "destroy"><div class="row pagination-centered"><div class="span5 pagination-right"><label>Відповідь 2:</label></div><div class="span3"><input type="text" name="items[' + numQuestion + '][items][1][name]" id="items[' + numQuestion + '][items][1][name]" class="addText"  placeholder="Вкажіть відповідь 2"/></div> X </a></div>' +
			 	'<p class="pagination-centered"><input type="button" id="' + numQuestion + '" class="addAnswer btngreen" alt="2" value="Add answer"></p>' + 
			 	'<p class="pagination-centered"><input type="button" id="'+numQuestionNext+'" class="addQuestion btngreen" value="Add question"></p>' );
		},

		'a dblclick': function( a ){
			// if(confirm("Are you sure you want to destroy?")){
			    a.remove();
			// };
		},

	  });
	});