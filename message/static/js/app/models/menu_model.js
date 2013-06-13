steal('jquery/model', function(){

$.Model('Menu',
/* @Static */
{
  	findAll  : "static/js/app/data/categories.json",
  	findOne  : "static/js/app/data/categories/{id}.json"/*, 
  	create   : "/tests.json",
 	  update   : "/tests/{id}.json",
  	destroy  : "/tests/{id}.json"*/
},
/* @Prototype */
{});


})

