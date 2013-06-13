steal('app/controller/baseContr.js',

	  function (){
	  	BaseController.extend('Features', {
	  		defaults: {
	  			options: {
	  				message: "Features page [defaults]"
	  			},
                view: 'static/js/app/view/items.ejs'
	  		}
	  	}, {
	  		'init': function() {
	  			this._super();

	  			console.info("Features controller run!!!");
	  			$('#newbutton').click(function (){
	  				alert('Event Features controller');
	  			});
	  		},
	  		'destroy': function (){
	  			this._super();
	  			console.info("Features - destroyed");
	  		} 
	  	});
	  });