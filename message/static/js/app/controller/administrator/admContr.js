steal('jquery/controller',
      'app/controller/baseContr.js',
      'resources/jquery-plugins/modal_window/modal_window.css',
      'resources/jquery-plugins/modal_window/modal_window.js',
      'app/models/admin.js',
      'jquery/view/ejs',
      'jquery/controller/view',
      'jquery/model',
      'jquery/dom/form_params',

    function (){
      BaseController.extend('Admins', {
        defaults: {
        }
      }, {
          'init': function(){
            this._super();
            var me = this;
            console.log("admin controller run with init");
            /*Admin.findAll({}, function(users){
              debugger;
              me.element.html('static/js/app/view/administrator/list/init.ejs', users);
              console.info("LOOK DOWN!!!");
              console.log(users);
            });*/
            this.element.html('static/js/app/view/administrator/list/init.ejs', Admin.findAll({}));
            debugger;
            /*var myData = Admin.findAll({});
            myData.complete(function(x){
              var y = $.parseJSON(x.responseText);
              debugger;
              console.info(typeof x.responseText);
              me.element.html('static/js/app/view/administrator/list/init.ejs', y);
            });*/
          
          },
          /*'ajaxHandler': function(x){
              var y = $.parseJSON(x.responseText);
              debugger;
              me.element.html('static/js/app/view/administrator/list/init.ejs', y);
          },*/
          '.select_role change': function( el ){
            var json = {};
            var userId = el.closest(".user").attr('id').split('-')[2];
            json.userId = userId;
            json.role = el.val();
            var jsonString = $.toJSON( json );
            alert("New role: " + el.val() + ". Saved");
            debugger;
            //el.closest('.user').model().update({id:json.userId}, jsonString);
            el.closest('.user').model().save();
          },
          '.select_access change': function( el ){
            var json = {};
            var userId = el.closest(".user").attr('id').split('-')[2];
            json.userId = userId;
            json.status = el.val();
            var i = el.closest('.user').model();
            var jsonString = $.toJSON( json );
            json.access = el.val();
            //el.closest('.user').model().update({id:json.userId}, jsonString);
            el.closest('.user').model().save();
          },
          '.destroy click': function( el ){
            if(confirm("Do you want to delete this user?")){
              el.closest('.user').model().destroy();
              el.closest('.user').remove();
            }
          },
          "{Admin} destroyed" : function(Admins, ev, admin) {
            console.info("user deleted!");
            admin.elements(this.element).remove();
          },
          'destroy': function (){
            this._super();
            console.info("Admin - destroyed");
          },
          '#add-user-form submit': function(ev){
            ev.preventDefault();
            alert("Submit click!");
            debugger;
          }
        });
        $('#create_user').live('click', function(ev){
            ev.preventDefault();
            console.info("Create click!");
            var json = $('#add-user-form').formParams();
            debugger;
            new Admin(json).save();
          });
        $('#add-user-form').submit(function(e){
          e.preventDefault();
        });
      });
