steal('app/controller/baseContr.js',

	  function (){
	  	BaseController.extend('About', {
	  		defaults: {
	  			options: {
	  				message: "About page [defaults]"
	  			},
                view: 'static/js/app/view/items.ejs'
	  		}
	  	}, {
	  		'init': function() {
	  			this._super();
	  			console.info("About controller run!!!");
	  			$('#newbutton').click(function (){
	  				alert('Event About controller');
	  			});
	  		},
	  		'destroy': function (){
	  			this._super();
	  			console.info("About - destroyed");
	  		} 
	  	});
	  });