steal('jquery/model', function(){

$.Model('App.Models.Test',
/* @Static */
{
	findAll: "static/js/app/data/testmain.json",
  	findOne : "static/js/app/data/testmain/{id}.json",
  	create : "static/js/app/data/testmain.json",
 	update : "static/js/app/data/testmain.json",
  	destroy : "static/js/app/data/testmain.json"
},
/* @Prototype */
{});
	
})