steal('jquery/model', function(){

$.Model('App.Models.Admin',
/* @Static */
{
	findAll	: "static/js/app/data/users.json",
  	findOne	: "static/js/app/data/users/{id}.json", 
  	/*create	: "data/user.json",*/
 	update	: "static/js/app/data/users/{id}.json",
  	destroy	: "static/js/app/data/users/{id}.json"
},
/* @Prototype */
{});

})