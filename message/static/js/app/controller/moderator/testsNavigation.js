/**
 * Created with JetBrains WebStorm.
 * User: Вампир
 * Date: 04.02.13
 * Time: 16:05
 * To change this template use File | Settings | File Templates.
 */
steal('jquery/class',
    'jquery/controller',
    'jquery/model',    
    'jquery/view/ejs',
    'jquery')
    .then('app/controller/baseContr.js',
          'app/controller/moderator/controller.js',
          'resources/jquery-plugins/jquery-ui-1.10.1.custom/css/smoothness/jquery-ui-1.10.1.custom.css',
          'resources/jquery-plugins/jquery.jqGrid-4.4.4/css/ui.jqgrid.css',
          'resources/jquery-plugins/jquery.jqGrid-4.4.4/js/i18n/grid.locale-en.js',
          'resources/jquery-plugins/jquery.jqGrid-4.4.4/js/jquery.jqGrid.min.js',
          'app/view/test/moderator/generateGrid.js',
          'app/models/moderators.js',function($){
        BaseController.extend('TestsNavigation', {
            defaults: {
                options: {},
                view: '<table id = "unapprove-tests-nav" class="table"></table><div id="unapprove-tests-nav-pager"></div>'
            }
        },
        {
        'init': function (element, options) {
            this._super();
            $("#inside").html('//app/view/test/moderator/testList.ejs',{})
//generateGrid - Helper function which create table with list of unapproved tests 
        App.Models.Moderator.findAll({},generateGrid);

        },

        ".detailed_view click" : function (el, ev) {
          var testId = el.attr('id');
          this.navigate('moderator', testId);
        }
        });
});