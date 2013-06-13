steal('app/style/style.css',
      'jquery/model',
      'jquery/view/ejs',
      'jquery/controller',
      'jquery',
   function(){
    $.Model('Admin', {
    	findAll  :   "static/js/app/data/admins.json",
    	findOne  :   "static/js/app/data/admins/{id}.json", 
/*    	create   :   "/tests.json",
   	  update   :   "/tests/{id}.json",
    	destroy  :   "/tests/{id}.json"*/
    },
    {});

    $.Controller('Admins', {
      defaults: {}
    },{
      'init': function() {
      },
      "#tryLogin click" : function() {
        this.isAdmin();
      },
      "isAdmin": function() {
        var adm     =   new Admin();
        var log     =   $("#adm-login").val();
        var pass    =   $("#adm-password").val();
        Admin.findAll({}, function(data){
          console.log(data[0].logi);

          for (var i = 0; i < data.length; i++){
            if(data[i].login == log && data[i].password == pass) {
              alert("Good password");
              break;
            };
          };
        });
        /*if(login == )*/
      }
    });

    new Admins("#admLogin");
});

