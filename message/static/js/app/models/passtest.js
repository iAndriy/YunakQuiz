steal('jquery/model', function(){

$.Model('App.Models.Passtest',
/* @Static */
{
	findAll: "static/js/app/data/test/",
  	findOne : "static/js/app/data/test/{id}.json", 
  	create : "static/js/app/data/test.json",
 	update : "static/js/app/data/test/{id}.json",
  	destroy : "static/js/app/data/test/{id}.json"
},
/* @Prototype */
{});
	
})