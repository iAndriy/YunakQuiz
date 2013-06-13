steal('jquery/view/ejs',
        'jquery/controller/route',
        'app/controller/contactsContr.js',
        'app/controller/administrator/admContr.js',
        'app/controller/moderator/controller.js',
        'app/controller/moderator/testsNavigation.js',
        'app/controller/user/test/results/resultsContr.js',
        'app/controller/user/test/create.js',
        'app/controller/user/test/edit.js',
        'app/controller/user/test/tests.js',
        'app/controller/user/registerContr.js',
        'app/controller/category.js',
        'app/controller/search/search.js',
        'app/controller/search/search_all.js',
        'app/controller/guest/passtestcont.js',
        'app/controller/verify.js',
        /*Сюди додаєте свої контроллери*/
        function ($) {
            window.fRouting = null;
            $.Controller('Routing', {
                "route": function(){
                    //alert("Congrats for navController");
                    window.i = this;
                },
                ":type/:id route": function(data){
                    data.id;
                
                    var ip = ucFirst(data.type);
                    if ($('#content').controller()) {
                        $('#content').controller().destroy();
                    }
                    $('#content').html("<div id='inside'></div> ");
                    new window[ip]($('#content'), data);
                },
                ".navbar-header__nav-item-links click": function(el, ev){
                    ev.preventDefault();
                    var hr = el.attr("href");
                    var p  = el.attr("id") || "";
                    $.route.attrs({type: hr, id: p}, true);
                },
                navigate : function(hr){
                    p = arguments[1] || "";
                    $.route.attrs({type: hr, id: p}, true);
                    console.info('Nav controller navigate');
                },
                "#searchR click": function(el, ev){
                    console.log("seach all");
                    ev.preventDefault();
                    this.navigate("search");
                },

                "#search_input keyup": function(el, ev){
                    if(ev.keyCode=="13"){
                        ev.preventDefault();
                        this.navigate('Search_all');
                    }
                },
                "#login-register click": function(el, ev){
                    ev.preventDefault();
                    this.navigate('Register');
                } 
            });

            window.fRouting = new Routing(document.body);
});

function ucFirst( str ) {
    var f = str.charAt(0).toUpperCase();
    return f + str.substr(1, str.length-1);
}
