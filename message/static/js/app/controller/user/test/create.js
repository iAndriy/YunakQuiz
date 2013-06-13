steal('app/controller/baseContr.js',
	  'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'app/models',
       'jquery/model',
       'jquery/dom/form_params',
	   'jquery/lang/json',

	function (){
	  	var select = 1;
	  	BaseController.extend('CreateTest', {
	  		defaults: {
	  			options: {
	  				message: " ",
	  			}
	  		}
	  	}, 
	  	{
	  	
	  	init: function() {
	  		this._super();
	  		console.info("Tests controller run!!!");
	  		$('#newbutton').click(function (){
	  			alert('Event Test controller');
	  		});
	  		this.element.html(this.view('//app/view/test/user/test/create/create'));
		},
	  	
	  	'destroy': function (){
	  		this._super();
	  		console.info("Test - destroyed");
	  	},
	
		submit : function(el, ev){
			ev.preventDefault();
			var json = $('#createTest').formParams();
			// var flag = true;

			// function validate(items, level, callback){
			// 	if(level > 0){
			// 		$.each(items, function(key, val){
			// 			$.each(val, function(key1, val1){
			// 				var pattern1 = /^[\s]*$/
			// 				if(key1 == "items"){
			// 					validate(val1, 1);
			// 				}
			// 				else {
			// 			    	if(pattern1.test(val1)){
			// 					    flag = false;
			// 					}
			// 				}
			// 			});
			// 			if(!flag){
			// 				alert("Деякі з полів є пустими, тест не створений!");
			// 				callback(flag);
			// 			}
			// 		});
			// 	}
			// 	else{
			// 		$.each(items, function(key, val){
			// 			var pattern = /^[\s]*$/
			// 			if(pattern.test(val)){
			// 			    flag = false;
			// 			    callback(flag);
			// 			}
			// 			if(key == "items"){
			// 				validate(val, 1)
			// 			}
			// 		});
			// 	}
			// }

			// validate(json, 0, function(res) {
			// 	if(!res)
			// 		alert("Деякі з полів є пустими, тест не створений!");
			// });		

			// if(flag){
				// var numQues = $("#countQuestion").val();
				// alert(numQues);
				this.element.find('[type=submit]').val('Creating...')
				console.log("Тест успішно створений")
				console.log(json)
			    new App.Models.Test(json).save(this.callback('saved'));
			// }

		},

		saved : function(){
			this.element.find('[type=submit]').val('Create');
			// this.element[0].reset()
		},

		'.addAnswer click': function( el ){
			// при кліці на кнопку addAnswer я доступаюсь до атрибутів id i alt
			// в id я передаю номер питання, в alt - номер відповіді
			var numQuestion   = el.attr("id");
			var numAnswer     = el.attr("alt");
			var numAnswerNext = ((parseInt(numAnswer)) + 1).toString();
			el.replaceWith(
				'<div class="row pagination-centered"><div class="span5 pagination-right"><label>Відповідь '+ numAnswerNext +':</label></div><div class="span3"><input type="text" name="items[' + numQuestion + '][items][' + numAnswer + '][name]" id="items[' + numQuestion + '][items][' + numAnswer + '][name]" class="addText span3"  placeholder="Вкажіть варіант відповіді '+ numAnswerNext +'"/></div><input type="hidden" value="" name="items['+numQuestion+'][items]['+numAnswer+'][correct]"><div class="span3 pagination-left"><input type="checkbox" name="items['+numQuestion+'][items]['+numAnswer+'][correct]" value="yes"> Правильна</br></div></div>' +
				'<p class="pagination-centered"><input type="button" id="' + numQuestion + '" class="addAnswer btn btngreen" alt="' + numAnswerNext + '" value="Add answer"></p>' ),
			$('.addAnswer').focus();
			numAns = ('<input type="hidden" name="items['+numQuestion+'][countAnswer]" class="countAnswer" value="'+numAnswerNext+'"/>');
			document.getElementById('countAns'+numQuestion+'').innerHTML = (numAns);
		},

		'#addCategory click' : function( el ){

		    var items = [];

			Menu.findAll({}, function(data1) {
				items += ('<div class="row"><div class="span5 pagination-right"><label for="name">Категорія:</label></div><div class="span3"><select name="category" id="category">');
				$.each(data1, function(keyCategory0, valCategory0) {
					var idParrent = 0; 
					$.each(valCategory0, function (keyCategory1, valCategory1) {
					    if (keyCategory1 == "parrent_id")
					        idParrent = valCategory1;
					  
					    if ((keyCategory1 == "name") && (idParrent == 0))
					       items += ('<option id="' + valCategory0.id + '" value="'+valCategory0.id+'">'+ valCategory1+'</option>');
				   	});
				});

		    items += ('</select></div></div>');
				 
				 
			Menu.findAll({}, function(data1) {
				items += ('<div class="row"><div class="span5 pagination-right"><label for="name">Підкатегорія:</label></div><div class="span3"><select name="subcategory" id="subcategory">');
				$.each(data1, function(keyCategory0, valCategory0) {
				    var idParrent = 0; 
					$.each(valCategory0, function (keyCategory1, valCategory1) {
					    if (keyCategory1 == "parrent_id")
					        idParrent = valCategory1;

					    if ((keyCategory1 == "name") && (idParrent != 0))
					       if(idParrent == select )
					       		items += ('<option value="'+valCategory0.id+'">'+ valCategory1 +'</option>');
					});
				});
				items += ('</select></div></div>');
			    el.replaceWith(items);
			});
		    });

		},

		'.addQuestion click': function( el ){
			var numQuestion = el.attr("id");
			var numQuestionNext =((parseInt(numQuestion)) + 1).toString();
			el.replaceWith(
				'<h3>Питання № '+numQuestionNext+'</h3>'+
				'<div class="row pagination-centered"><div class="span5 pagination-right"><label>Назва питання:</label></div><div class="span3"><input type="text" name="items['+numQuestion+']name" id="items['+numQuestion+']name" class="span3"  placeholder="Вкажіть назву питання"/></div></div>'+
				'<div class="row pagination-centered"><div class="span5 pagination-right"><label>Номери правильних відповідей:</label></div><div class="span3"><input type="text" name="items['+numQuestion+']correctAnswerIds" id="items['+numQuestion+']correctAnswerIds" class="span3"  placeholder="Приклад: 1, 2"/></div></div>' +
				'<div class="row"><div class="span5 pagination-right"><label>Тип відповіді:</label></div><div class="span3 pagination-left"><input type="radio" name="items['+numQuestion+']type" id="items['+numQuestion+']type" value="radio" checked> radio<br><input type="radio" name="items['+numQuestion+']type" id="items['+numQuestion+']type" value="checkbox"> checkbox<br></div></div><br>' +
				'<div class="row pagination-centered"><div class="span5 pagination-right"><label>Відповідь 1:</label></div><input type="hidden" value="" name="items['+numQuestion+'][items][0][correct]"><div class="span3"><input type="text" name="items[' + numQuestion + '][items][0][name]" id="items[' + numQuestion + '][items][0][name]" class="addText span3"  placeholder="Вкажіть відповідь 1"/></div><div class="span3 pagination-left"><input type="checkbox" name="items['+numQuestion+'][items][0][correct]" value="yes"> Правильна</br></div></div>' +
			 	'<div class="row pagination-centered"><div class="span5 pagination-right"><label>Відповідь 2:</label></div><input type="hidden" value="" name="items['+numQuestion+'][items][1][correct]"><div class="span3"><input type="text" name="items[' + numQuestion + '][items][1][name]" id="items[' + numQuestion + '][items][1][name]" class="addText span3"  placeholder="Вкажіть відповідь 2"/></div><div class="span3 pagination-left"><input type="checkbox" name="items['+numQuestion+'][items][1][correct]" value="yes"> Правильна</br></div></div>' +
			 	'<p class="pagination-centered"><input type="button" id="' + numQuestion + '" class="addAnswer btn btngreen" alt="2" value="Add answer"></p>' + 
			 	'<p id="countAns'+numQuestion+'"><input type="hidden" name="items['+numQuestion+'][countAnswer]" class="countAnswer" value="2"</p>' +
			 	'<p class="pagination-centered"><input type="button" id="'+numQuestionNext+'" class="addQuestion btngreen" value="Add question"></p>' );
			numQuest = ('<input type="hidden" name="countQuestion" id="countQuestion" value="'+numQuestionNext+'"/>');
			document.getElementById('countQuest').innerHTML = (numQuest);
		},

		'#category change' : function(el){
			var choose          = document.getElementById("category");
			var selectedIndex   = choose.selectedIndex;
			window.select       = choose[selectedIndex].id;
			var combo           = [];
			Menu.findAll({}, function(data1){
				combo += ('<select name="subcategory" id="subcategory">');
				$.each(data1, function(keyCategory0, valCategory0){
					var idCategory = 0;   var idParrent = 0; 
					$.each(valCategory0, function (keyCategory1, valCategory1){
					    if (keyCategory1 == "parrent_id")
					        idParrent = valCategory1;
					    if ((keyCategory1 == "name") && (idParrent != 0))
					        if(idParrent == window.select )
					       	    combo += ('<option value="'+valCategory0.id+'">'+ valCategory1 +'</option>');
				   	});
				});
				document.getElementById('subcategory').innerHTML = (combo);
			});
	    }
	  });
	});