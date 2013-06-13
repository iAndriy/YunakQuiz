steal('app/controller/baseContr.js', 
    'resources/jquery-plugins/mxui/nav/selectable',
    'app/models/category.js',
    'jquery/view/ejs',
    'app/models',


    function () {
        BaseController.extend('Search', {
                defaults: {
                    options: {
                        message: this.data
                    },
                   
                }

            },

            {
                init:function () {

                    this._super();
                    this.element.html('//app/view/search/search.ejs',{});
                    console.info("run in search.js");

                    App.Models.Category.findOne({}, function (data) {
                        var obj7 =[];
                        obj7 = $.each(data, function(data){
                            return obj7});

                        jQuery.each(obj7,function (k, v){
                          
                            if (v.parrent_id == 0)
                                jQuery('#Categories').append(
                                    '<input type="checkbox" name="option'+ ++k +'" value="Cat '+ k +'" class="Cat" checked> '+v["name"]+'<br>');

                        });

                    App.Models.Category.findAll({}, function (data) {
                        var obj4 =[];
                        obj4 = $.each(data, function(data){
                            return obj4
                        });
                        jQuery.each(obj4,function (k, v){
                            if (v["category"] == "Проби") {
                                jQuery('ol').append(
                                    ' <li class="selectable1" tabindex="0">'+v["subcategoryName"]+'</li>'

                                );
                            }
                            if (v["category"] == "Вмілості") {
                                jQuery('ol').append(
                                    ' <li class="selectable2" tabindex="0">'+v["subcategoryName"]+'</li>'

                                );
                            }
                            if (v["category"] == "Патрони") {
                                jQuery('ol').append(
                                    ' <li class="selectable3" tabindex="0">'+v["subcategoryName"]+'</li>'

                                );
                            }
                        });
                        var obj =[];
                        console.info("tests open");

                        $('#menu').delegate('ol', 'activate', function(ev,items){
                            console.log(this, 'has been activated');
                            obj = [];
                            $(".activated").each(function() {
                                var index = $("#menu li").index(this);
                                jQuery.each(obj4, function (k, v){
                                    if (v["id"] == index+1) {obj.push(k,v)}

                                });
                            });
                        });

                        $('#menu').mxui_nav_selectable({});

                        $('.Cat').click(function () {

                            if ($('#Categories>input[name=option1]').is(':checked') == true) {$("#menu>ol>li.selectable1").show();
                                $('#result1>li').remove();
                            }
                            else
                            {$("#menu>ol>li.selectable1").hide();$('#result1>li').remove();}

                            if ($('#Categories>input[name=option2]').is(':checked') == true) {$("#menu>ol>li.selectable2").show();

                                $('#result1>li').remove();}
                            else
                            {$("#menu>ol>li.selectable2").hide(); $('#result1>li').remove();}
                            if ($('#Categories>input[name=option3]').is(':checked') == true) {$("#menu>ol>li.selectable3").show();

                                $('#result1>li').remove();}
                            else
                            {$("#menu>ol>li.selectable3").hide(); $('#result1>li').remove();}

                        });


                        $('#search').click(function () {

                            var search_query = jQuery('#input').val();
                            var search_query_regex = new RegExp(".*" + search_query + ".*", "g");
                            var resultsArray = [];
                            var i = 0;
                            var search = function recursiveSearch(items, isTest) {
                                var isMatchFounded = false;

                                console.info("search open");

                                jQuery.each(items, function (index, item) {
                                    var propertiesForCheck = ['name', 'id', 'description'];

                                    for (var i = 0; i < propertiesForCheck.length; i++) {
                                        if (item[propertiesForCheck[i]]
                                            && item[propertiesForCheck[i]].match(search_query_regex)
                                            ) {
                                            isMatchFounded = true;
                                        }
                                    }

                                    if (!isMatchFounded && item.items) {
                                        recursiveSearch(item.items)
                                    }

                                    if (isMatchFounded && isTest) {
                                        resultsArray.push(item);
                                        isMatchFounded = false;
                                    }
                                });
                            };

                            $('#result1>li').remove();
                            search(obj, true);
                            if(resultsArray.length == 0){
                                    debugger;
                                    jQuery('#result1').append(
                                        '<h4>Пошук не дав результату</h4>'

                                    );
                                };
                                   
                            for (var i = 0; i < resultsArray.length; i++) {
                                var object = resultsArray[i];
                                jQuery('#result1').append(
                                    '<li> <a class="search-result-link" href ="' + object.name + '" id ="' + object.id + '">' + object.name + '</a> <br>' + object.description + '</li>'

                                );
                            }

                        })
                    });

                });
            },
            ".search-result-link click": function(el, ev){
                    ev.preventDefault();
                    var x = el.attr('id');
                    debugger;
                    this.navigate('Passtest', x);
                }
        });
    });
