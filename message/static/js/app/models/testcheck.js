steal('jquery/model', function(){

$.Model('App.Models.TestCheck',
/* @Static */
{
	findAll: "static/js/app/data/testmain.json",
  	findOne : "static/js/app/data/testmain/{id}.json",
  // 	create : "data/testmain.json",
 	// update : "data/testmain.json",
  // 	destroy : "data/testmain.json"
},
/* @Prototype */
{});
	
})