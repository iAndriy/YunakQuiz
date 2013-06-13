steal('jquery/model', function(){

$.Model('App.Models.Moderator',
/* @Static */
{
	//Front-end variant
	// findAll: "static/js/app/data/testsCorectFormat.json",
	//Back-end variant
	findAll: "api/moderator/getTests",
  	// findOne : "static/js/app/data/tests/{id}.json", 
  	findOne: "api/moderator/getTest/{id}",
  	// create : "static/js/app/data/tests.json",
  	create : "api/moderator/getTest/{id}",

 	update : "api/moderator/updateTest/{id}",
  	destroy : "static/js/app/data/tests/{id}.json"
},
/* @Prototype */
{});
	
})