alert ("run category");

App.Models.Test.findAll({}, function(data) {
				console.log ("data from category js");
				var items = [];
				var id;
				items.push('<hr>');	 
				$.each(data, function(key0, val0) {
				 	$.each(val0, function (key, val) {
				 		console.log (key);
				   		if(key == "items") 
				   			;	
				    	else {
				    		if (key == "id")
				    		 	id = val;
				    		if ((key == "name" || key == "description"))
				    			items.push('<h5 class = "redColor" id = ' + id +'><pre><em>' + key +': </em><span class="testCategory">' + val + '</span></pre></h5>');
				    	}
					});
					items.push('<span id = ' + id + ' class = "editTest">Edit</span><hr>');
				});

				items.push('<input type="button" id="createNewTest" value="add test">');
			
				$('<ul/>', {
				html: items.join('')
				}).appendTo('#content');

			});

<div class='row pagination-centered'>
<h3>Питання № 1</h3>
  <div class='span5 pagination-right'>
	<label for='items[0][question]'>Назва питання:</label>
  </div>
  <div class='span3'>
	<input type='text' name='items[0][question]' id='items[0][question]' class='span3' placeholder="Введіть назву питання"/>
  </div>
</div>