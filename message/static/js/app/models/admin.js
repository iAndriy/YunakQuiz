steal('jquery/model', function(){

$.Model('Admin',
/* @Static */
{	
	findAll	: function(params, success, error){
		return $.ajax({
			url: "/api/user/user",
			type: 'get',
			dataType: 'json admin.models',
			data: params,
			success: function(x){
				console.info(x);
			},
			error: function(){
				console.info("Ajax error!");
			}
		});
	},
	/*findAll : function(){
		return $.get('/api/user/user', function(json){
			console.log(json);
		})
	},*/
  	findOne	: "static/js/app/data/users/{id}.json", 
  	create	: "static/js/app/data/user.json",
 	update : function(params, success, error){
         return $.ajax({
             url : "/api/user/user/" + params['id'],
             dataType : "json admin.models",
             data: params,
             success : success,
             error : error
         });
     },  	
     destroy : function(id, success, error){
          //return $.post("/api/cookbook/recipes/"+id, {}, success);
          return $.ajax({
              url : "/api/user/user/" + id,
              type : 'DELETE',
              dataType : "json admin.models",
              data: {},
              success : success,
              error : error
          });
      },
},
/* @Prototype */
{});

})