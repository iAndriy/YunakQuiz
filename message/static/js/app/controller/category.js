steal('jquery/class',
      'jquery/controller',
      'jquery/model', 
      'app/controller/baseContr.js',
      'app/models/testlist_model.js',
      'jquery/view/ejs',

    function (){
      BaseController.extend('Category', {
        defaults: {
          options: {

          },
          //view: '//app/view/test/testlist.ejs'
        }
      }, {
          'init': function(){
            this._super();
            $("#inside").html('');
            console.log("#Category id: " + this.options.id);
            
            var options = (this.options.id).toString();


            var dataGood = [];
            var x = this;
            App.Models.Test.findAll({}, function(data){
              debugger;
              data.filter(function(index){
                //alert(typeof index); 
                if(index.categoryId == options){
                  dataGood.push(index);
                }
                dataGood;
                debugger;
              });
              x.element.html('static/js/app/view/test/category.ejs', dataGood);
            });
              this.element.html('static/js/app/view/test/category.ejs', dataGood);
              debugger;

          },
          ".testname click": function(el, ev){
            // /el.preventDefault();
            var x = el.attr('id');
            debugger;
            this.navigate('Passtest', x);
          }
          
        })

      });
