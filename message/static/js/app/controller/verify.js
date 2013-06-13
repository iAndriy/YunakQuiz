steal('jquery/class',
      'jquery/controller',
      'jquery/model', 
      'app/controller/baseContr.js',
      'app/models/testcheck.js',
      'app/models/testresult.js',
      'jquery/view/ejs',


    function (){
     
      BaseController.extend('Verify', {
        defaults: {
          options: {
   
             },
          view: 'static/js/app/view/test/testresults.ejs'
        }
      }, {
          init: function(){
            this._super();
            var me = this;

            // $("#inside").html('');
            var testresult;
            var questions;
            var correct;
            var questAmount;
            var key;

            App.Models.Testresult.findAll({}, function (data) {
              var obj1 = $.each(data, function(data){
                  return obj1
              });
            App.Models.TestCheck.findAll({}, function (data) {
              var obj2 = $.each(data, function(data){
                  return obj2
                 
              });

               
                console.log(obj2[1].name);
                console.log(obj1);

                var mass = new Array();
                var noCorrect = 0;
                questAmount = 0;


                for (val1 in obj1[0].items) {
                  var i = obj1[0].items[val1].questionid;
                  mass[i] = obj1[0].items[val1].items[0];
                  questAmount++;
                
                };

                
                console.log('massss');

                console.log(mass);

               var testId = obj1[0].testid;

               

               for (val in obj2[obj1[0].testid - 1].items) {
                var dost = obj2[obj1[0].testid - 1].items[val];
                k =  obj2[obj1[0].testid - 1].items[val].id;
                var f = obj2[obj1[0].testid - 1].items[val].correctAnswerIds[0];

                if(mass[k] !== f){
                  var dataGood = 1;
                  //x.element.html('//app/view/test/testresults.ejs', dataGood);
                  console.log('question '+k+" no correct\n"+obj2[obj1[0].testid - 1].items[val].explanation);
                  noCorrect++;
                }
                 
               };

               correct = questAmount - noCorrect;
               
               me.element.html('//app/view/test/testresults.ejs', {
                                                                    correct: correct, 
                                                                    questAmount: questAmount,
                                                                    });
            });

            })
         
        }
        })
      });
