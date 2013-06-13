/**
 * User: Vision
 * Date: 02.03.13
 * Time: 15:05
 * Passing test controller.
 */
steal('jquery/class',
    'jquery/controller',
    'jquery/model',    
    'jquery/view/ejs',
    'jquery')
    .then('app/controller/baseContr.js','app/view/test/guest/abstractFactory.js','app/models/passtest.js',function($){

        BaseController.extend('Passtest', {
            defaults: {
                options: {
                },
            }
        },
        {
        'init': function () {
            this._super();
            console.log("Test param: " + this.options.id);
            var ID = this.options.id;
            console.log('passtest controller run....');
            var isFormChanged = false;
            var reviewPrevVal ;

      
            var generateForm = function(obj){
                var concreteFact = new AbstractFact(obj, 
                {   textArea : true, 
                    textAreaID: 'review',
                    textAreaVal : 'review', 
                    btn: true, 
                    btnID: 'approve', 
                    btnValue: 'Approve'});
                    form = concreteFact.CreateForm();
            };
            debugger;
            $("#inside").html('//app/view/test/guest/passtest.ejs', App.Models.Passtest.findOne({id: ID}, generateForm));
        },

        "#btn_approve click" : function(el, ev){
            ev.preventDefault();
            this.navigate('verify');
        }   


        });

});