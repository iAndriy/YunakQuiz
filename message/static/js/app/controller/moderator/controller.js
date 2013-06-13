/** iAndriy */
steal('jquery/class',
    'jquery/controller',
    'jquery/model',    
    'jquery/view/ejs',
    'jquery')
    .then('app/controller/baseContr.js','app/view/test/moderator/abstractFactory.js','app/models/moderators.js',function($){

        BaseController.extend('Moderator', {
            defaults: {
                options: {
                    options: App.Models.Moderator.findOne({id: 4}, this.generateForm),
                },
                view: '//app/view/test/moderator/moderator.ejs',
                //id : 4 
            }
        },
        {
        'init': function (elements, options) {
            this._super();
            var ID = this.options.id;
            
            var me = this;
            var isFormChanged = false;
            var reviewPrevVal ;
            // this.test.destroy();    
            this.test = new App.Models.Moderator({id: ID});
            // this.test = App.Models.Moderator.findOne({id: ID},function(obj){return obj.name});
            // alert(this.test.name);
            var generateForm = function(obj){
                var concreteFactory = new AbstractFactory(obj, {
                    textArea : true, 
                    textAreaID: 'review',
                    textAreaVal : 'review', 
                    btn: true, 
                    btnID: 'approve', 
                    btnValue: 'Approve'});
                    form = concreteFactory.CreateForm();
            };
            $("#inside").html('//app/view/test/moderator/moderator.ejs', App.Models.Moderator.findOne({id: ID}, generateForm));        
        },

        "#btn_approve click" : function(el, ev){
            ev.preventDefault();
            this.test.update({isApproved: true,isReviewed: '', review: ''});
            this.navigate('TestsNavigation');
        },
        "#btn_review click": function(el, ev){
            ev.preventDefault();
            review = $("#review").val();
            if (!review) {
                alert('Review cannot be empty');
                return false;
            }
            this.test.update({review: review, isReviewed: true, isApproved:''});
            alert('Review has been send');
            this.navigate('TestsNavigation');
        },
        "#review click": function(el, ev){
            if(el.val() == 'review') el.val('');      
        },
        "#review blur": function (el, ev){
                var reviewCurrValue = el.val();
                console.log(reviewCurrValue);
                console.log(this.reviewPrevVal);
                if(reviewCurrValue == this.reviewPrevVal || reviewCurrValue == 'review') {
                    return false;
                } 
                else {
                    this.reviewPrevVal = reviewCurrValue;
                    $("#autoSaveStatusOf_review").text("Saving...").fadeTo(2000, 1);
                    // this.test.attr({'review', reviewCurrValue});
                    // this.test.save();
                    this.test.update({isApproved: '', isReviewed: '', review: reviewCurrValue});
                    setTimeout(function(){$("#autoSaveStatusOf_review").text("Saved").fadeTo(2000, 0)},3000);
                }
        },
        });
});