
steal('app/controller/baseContr.js',
	  'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'app/models',
       'jquery/model',

	function (){
	  	var select = 1;
	  	BaseController.extend('Tests', {
	  		defaults: {
	  			options: {
	  				message: "Tests page [defaults]",
	  			}
	  		}
	  	}, 
  	{
	init: function(action) {
		this._super();
		console.info("Tests controller run!!!");
		$("#inside").html('//app/view/test/user/test/list/init.ejs', App.Models.Test.findAll());
	},
	'destroy': function (){
		this._super();
		console.info("Test - destroyed");
	},

	'#createNewTest click' : function(){	
 		this.navigate('CreateTest');	
    },

	'.editTest click' : function( el ){
		var idtest         = el.attr("id");
		var id_items       = -1;    
		var id_items_next  = 0; 

	    App.Models.Test.findOne({id: idtest}, function(data){ 

		new EditTest($('#content'), {view: '//app/view/test/user/test/edit/editstart'});

		var items = [];

		items.push('<form name="editForm" id="editForm" class="well" alt="'+idtest+'">');

		Menu.findAll({}, function(data1) {
			items.push('<div class="row"><div class="span5 pagination-right"><label for="name">Категорія:</label></div><div class="span3"><select name="category" id="category">');
			$.each(data1, function(keyCategory0, valCategory0) {
				var idCategory = 0;   var idParrent = 0; var id1 = 0;
				$.each(valCategory0, function (keyCategory1, valCategory1) {
				    if (keyCategory1 == "parrent_id")
				        idParrent = valCategory1;
				  
				    if ((keyCategory1 == "name") && (idParrent == 0))
				       items.push('<option id="' + valCategory0.id + '" value="'+valCategory0.id+'">'+ valCategory1+'</option>');
		 	    });
			});
			items.push('</select></div></div>');
			 
			 
		Menu.findAll({}, function(data1) {
			items.push('<div class="row"><div class="span5 pagination-right"><label for="name">Підкатегорія:</label></div><div class="span3"><select name="subcategory" id="subcategory">');
			$.each(data1, function(keyCategory0, valCategory0) {
				var idCategory = 0;   var idParrent = 0; 
				$.each(valCategory0, function (keyCategory1, valCategory1) {
				    if (keyCategory1 == "parrent_id")
				        idParrent = valCategory1;

				    if ((keyCategory1 == "name") && (idParrent != 0))
				       if(idParrent == select )
				       		items.push('<option value="'+valCategory0.id+'">'+ valCategory1 +'</option>');
			   	});
			});
			items.push('</select></div></div>');
		
		$.each(data, function(key, val) {
			var title = {name: "Ім'я тесту", description: "Опис тесту", question: "Назва питання", correctAnswerIds: "Номери правильних відповідей", 
			type_answer: "Тип відповіді", explanation: "Пояснення до відповіді", radio: "checkbox", checkbox: "radio"}
			var answer = {name: "Відповідь ", id: "Номер відповіді"}

		   	if(key == "quest") { 
		   		var id_answer = -1; var id_answer_next = 0; var id_ans = 0; var id_ans_next = 0;
		   		items.push('<hr>');
		    	$.each(val, function(key1, val1) {
		    		id_items++; id_items_next++;
		    		items.push('<div class="row pagination-centered"><h3>Питання № '+id_items_next+' </h3></div>');
		    		$.each(val1, function (key2, val2) {	    			
		    			if(key2 == "ans") {  //work with answer
							$.each(val2, function (key3, val3) {
								id_answer++; id_answer_next++;
								  $.each(val3, function (key4, val4) {
									if(key4 == "id")
									{
										id_ans = val4;
										id_ans_next = id_ans;
									}
									else
										if(key4 == "correct")
											;
										// <div class='span3 pagination-left'><input type='hidden' value='' name='items[0][items][0][correct]'><input type="checkbox" name='items[0][items][0][correct]' value="yes"> Правильна</br></div>
										else
											items.push('<a class = "destroy"><div class="row pagination-centered"><div class="span5 pagination-right"><label for="name">'+answer[key4]+id_ans+':</label></div><div class="span3"><input type="text" class="answerEdit" name="'+key+'['+id_items+']['+key2+']['+id_answer+']'+key4+'" value = "'+val4+'" class = "span3"></input></div> X </a></div>');
		    					  });
		    				});
		    				items.push('<p class="pagination-centered"><input type="button" id="'+id_items+'" class="addAnswer btngreen" alt ="'+id_ans_next+'" value="Add answer"></p>');
		    				items.push('<hr>');
		    			}
		    			else {  // work with question
		    				if (key2 != "id")
		    					if(key2 == "type_answer")
		    						items.push('<div class="row"><div class="span5 pagination-right"><label for="name">'+title[key2]+':</label></div><div class="span3"><input type="radio" class="testEdit" name="'+key+'['+id_items+']'+key2+'" value = "'+val2+'" checked>'+val2+'<br><input type="radio" class="testEdit" name="'+key+'['+id_items+']'+key2+'" value = "'+title[val2]+'">'+title[val2]+'<br></div></div><br>');
		    					else
		    						if(key2=="explanation")
		    							items.push('<div class="row pagination-centered"><div class="span5 pagination-right"><label for="name">'+title[key2]+':</label></div><div class="span3"><textarea class="testEdit" name="'+key+'['+id_items+']'+key2+'" class = "span3">"'+val2+'"</textarea></div></div>');
		    						else
		    							items.push('<div class="row pagination-centered"><div class="span5 pagination-right"><label for="name">'+title[key2]+':</label></div><div class="span3"><input type="text" class="testEdit" name="'+key+'['+id_items+']'+key2+'" value = "'+val2+'" class = "span3"></input></div></div>');
		    			}

    				});
    			 });
		    }
		    else {
		    	if ((key == "name" || key == "description"))
		    		items.push('<div class="row pagination-centered"><div class="span5 pagination-right"><label for="name">'+title[key]+':</label></div><div class="span3"><input type="text" class="testEdit" value = " '+val+' " name = "'+key+'" class = "span3"></input></div></div>');
		    }
		});
		
		items.push('<p class="pagination-centered"><input type="button" id="'+id_items_next+'" class="btn addQuestion btngreen" value="Add question"></p>');
		  
		items.push('<p class="pagination-centered"><input type="submit" class="btn checkEdit btnred" value="submit edit"></p>');	 
		items.push('</form>');

		$('<ul/>', {
			html: items.join('')
		}).appendTo('#inside');

		});
		});
		});
	},
	"{App.Models.Test} destroyed" : function(Test, ev, test) {
		alert("destroy")
		test.elements(this.element).remove();
	},
	"{App.Models.Test} created" : function(Test, ev, test){
		this.element.append(this.view('init', [test]))
	},
	"{App.Models.Test} updated" : function(Test, ev, test){
		test.elements(this.element)
		      .html(this.view('test', test) );
	},
	'#editForm submit' : function(el){
		var updateTest = $("#editForm").formParams();
		var idT = el.attr("alt");
		console.log ("review");
		console.log (updateTest);
		var flag = true;

		function validate(items, level, callback){
			if(level > 0){
				$.each(items, function(key, val){
					$.each(val, function(key1, val1){
						var pattern1 = /^[\s]*$/
						if(key1 == "items"){
							validate(val1, 1);
						}
						else {
					    	if(pattern1.test(val1)){
							    flag = false;
							}
						}
					});
					if(!flag){
						alert("Деякі з полів є пустими, тест не створений!");
					}
				});
			}
			else{
				$.each(items, function(key, val){
					var pattern = /^[\s]*$/
					if(pattern.test(val)){
					    flag = false;
					    callback(flag);
					}
					if(key == "items"){
						validate(val, 1)
					}
				});
			}
		}

		validate(updateTest, 0, function(res) {
			if(!res)
				alert("Деякі з полів є пустими, дані не оновлені!");
		});		

		if(flag){
			App.Models.Test.update(idT, updateTest);
			alert ("Тест успішно оновлений");
		}

	},
	'#category change' : function(el){
		var choose = document.getElementById("category");
		var selectedIndex = choose.selectedIndex;
		window.select = choose[selectedIndex].id;
		var combo = [];
		Menu.findAll({}, function(data1) {
			combo += ('<select name="subcategory" id="subcategory">');
			$.each(data1, function(keyCategory0, valCategory0) {
				var idCategory = 0;   var idParrent = 0; 
				$.each(valCategory0, function (keyCategory1, valCategory1) {
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