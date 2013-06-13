steal('jquery/model', function(){

$.Model('App.Models.Results',
/* @Static */
{
	findAll: "static/js/app/data/results.json",
  	findOne : "static/js/app/data/results/{id}.json", 
  	create : "static/js/app/data/results.json",
 	update : "static/js/app/data/results.json",
  	destroy : "static/js/app/data/results.json"
},
/* @Prototype */
{});
	
})