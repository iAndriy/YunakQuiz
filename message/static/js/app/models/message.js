steal('jquery/model', function(){

$.Model('Message',
/* @Static */
{
  // create : function(params, success, error){
  //       alert("create")
  //       return $.ajax({
  //             url : "/api/message/letter",
  //             type : 'post',
  //             dataType : "json Message.models",
  //             data: params,
  //             success : success,
  //             error : error
  //         });
  // },
  create : "api/message/letter",
  findAll: function(params, success, error){
        return $.ajax({
            url : "/api/message/letter",
            type: 'get',
            dataType : "json Message.models",
            data: params,
            success : success,
            error : error
        });
    },
    findOne :  function(id, success, error){
        return $.ajax({
            url : "/api/message/letter/" + id,
            type: 'GET',
            dataType : "json Message.models",
            data: {},
            success : success,
            error : error
        });
    },
  update : function(params, success, error){
         return $.ajax({
             url : "/api/message/letter/" + params['id'],
             dataType : "json Message.models",
             data: params,
             success : success,
             error : error
         });
     },
    destroy : function(id, success, error){
          return $.ajax({
              url : "/api/message/letter/" + id,
              type : 'DELETE',
              dataType : "json Message.models",
              data: {},
              success : success,
              error : error
          });
      }
},
/* @Prototype */
{});


})

