steal('jquery/model', function(){

$.Model('App.Models.Test',
/* @Static */
{

  	// findAll: "static/js/app/data/tests.json",
  	findAll: "api/test/quiz",
  	findOne : "api/test/quiz/{id}", 
  	create : "api/test/quiz",
 	update : "static/js/app/data/tests/{id}.json",
  	destroy : "static/js/app/data/tests/{id}.json"
},
/* @Prototype */
{});


})

