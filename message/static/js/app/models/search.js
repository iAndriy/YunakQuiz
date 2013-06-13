steal('jquery/model', function(){

$.Model('App.Models.Test',
/* @Static */
{
  filter : function (keyword) {
      this.findAll({}, function (data) {
          1. Пройти по кожному елементу і подивитись де зустрічається keyword.
            1.1. Name
            1.2. Description
            regexp, indexOf if (data.name.indexOf(keyword)!== -1) {
              match;
            }
      });
  },

  	findAll: "data/tests.json",
  	findOne : "data/tests/{id}.json", 
  	create : "/tests.json",
 	  update : "/tests/{id}.json",
  	destroy : "/tests/{id}.json"
},
/* @Prototype */
{});


})

