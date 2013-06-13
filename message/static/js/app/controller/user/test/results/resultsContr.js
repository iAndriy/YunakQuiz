/**
 * User: iAndriy
 */
steal('jquery/class',
    'jquery/controller',
    'jquery/model',    
    'jquery/view/ejs',
    'jquery')
    .then('app/controller/baseContr.js', 'app/models/results.js',function($){

        BaseController.extend('Results', {
            defaults: {
                options: {
                    options: App.Models.Results.findAll({}, this.generateResults)
                },
                    view: '//app/view/test/user/test/results/results.ejs',
                    userId: 3
            }
        },
        {
        'init': function (elements, options) {
        
            $("#inside").html('//app/view/test/user/test/results/results.ejs', 
            App.Models.Results.findOne({id : options.userId}))
        },
        "#filterResults click" : function (el, ev){
            el.val('');
            el.attr('id','filterMyResults');
        },
        "#filterMyResults keyup": function (el, ev){
            var typedText = el.val().toLowerCase();
            $(".testName").each(function(){
                if( ~($(this).text().toLowerCase().indexOf(typedText)) ) {
                    $(this).show();$(this).next().show()}
                else {$(this).hide();$(this).next().hide()}
            })
        }
        });
});