steal('jquery/class',
    'jquery/controller',
    'jquery/model',    
    'jquery/view/ejs',
    'jquery', 
	  function(){

$.Model('App.Models.User',
/* @Static */
{
	  findAll: "static/js/app/data/logins.json",
    //findOne : "data/logins/{id}.json", 
  	create : "logins.json",
 	  update : "logins/{id}.json",
  	destroy : "logins/{id}.json"
},
    {});
});