steal('app/controller/baseContr.js',
      'app/models/admin_model.js',
      'jquery/view/ejs',
      'jquery/controller/view',
      'app/view/administrator/list/init.ejs', 
      'app/view/administrator/list/users.ejs', 
      'jquery/controller',

    function (){
      BaseController.extend('Admins.List', {
        defaults: {}
      },
      {
        init : function(){
          console.info("List started!!!");
          /*this.element.html(this.view('app/view/administrator/list/init.ejs', Admin.findAll()) )*/
          /*Admin.findAll({}, function(data){
              $("#inside").html('view/administrator/list/init.ejs', data);
            })*/
        },
        '.destroy click': function( el ){
          if(confirm("Are you sure you want to destroy?")){
            el.closest('.recipe').model().destroy();
          }
        }
        /*"{Admin} destroyed" : function(Recipe, ev, recipe) {
          recipe.elements(this.element).remove();
        },
        "{Admin} created" : function(Recipe, ev, recipe){
          this.element.append(this.view('init', [recipe]))
        },
        "{Admin} updated" : function(Recipe, ev, recipe){
            recipe.elements(this.element)
                .html(this.view('recipe', recipe) );
        }*/

      });
});
