steal(  'jquery/view/ejs',
        'jquery/controller/route',
        'jquery/controller',
        'app/style/style.css',
        'app/models/menu_model.js',
        'jquery/controller/view',
        'app/controller/baseContr.js',
        function ($) {
            BaseController.extend('Menus',{
                defaults: {template: 'static/js/app/view/menu.ejs'}
            },
            {   
                'init': function(element, options) {
                    var menu    = [];
                    var me      = this;
                    menu[0]     = {
                        "name"          : "Домашня",            //Name
                        "href"          : "baseController"      //Href
                    };
                    Menu.findAll({}, function(data){
                        $.each(data, function(item, el){
                            if(el.parrent_id == "0"){
                                menu[el.id] = {
                                    "id"            : el.id  + "",
                                    "name"          : el.name   + "",
                                    "href"          : el.href   + ""
                                };
                            } else if(menu[el.parrent_id].subcategory !== undefined){
                                        console.info(el.name);
                                        menu[el.parrent_id].subcategory.push({"id": el.id,
                                                                             "name": el.name,
                                                                             "href": el.href});
                                    } else {
                                        menu[el.parrent_id].subcategory = [];
                                        menu[el.parrent_id].subcategory.push({"id": el.name,
                                                                             "name": el.name,
                                                                             "href": el.href});
                                    };
                        });
                    
                    menu[menu.length]     = {
                        "name"          : "Мої результати",        
                        "href"          : "Results"                
                    };
                    
                    menu[menu.length]   = {
                        "name"          : "Написати листа",        
                        "href"          : "contacts"               
                    };
                    menu[menu.length]     = {
                        "name"          : "Адмінка",        
                        "href"          : "admins"          
                            };
                    menu[menu.length]     = {
                        "name"          : "Мої тести",        
                        "href"          : "Tests"             
                            };
                    menu[menu.length]     = {
                        "name"          : "Модератор",        
                        "href"          : "TestsNavigation"         
                    };
                    
                    /*if (me.checkCookie()){
                        debugger;
                        switch(me.getCookie()[1]){
                            case "3":
                                menu[menu.length]     = {
                                    "name"          : "Адмінка",        
                                    "href"          : "admins"          
                                };
                                break;
                            case "2":
                                menu[menu.length]     = {
                                   "name"          : "Мої тести",        
                                    "href"          : "Tests"             
                                };
                                menu[menu.length]     = {
                                    "name"          : "Модератор",        
                                    "href"          : "TestsNavigation"         
                                };
                                break;
                            default:
                                alert("You are are only user, or there are any cookie");
                        }
                    };*/
                        me.element.html(options.template, menu);
                        alert(me.getCookie());
                    });
                    this.element.html(me.options.template, menu);
                }
            });
});
