steal('app/controller/baseContr.js', 
    'resources/jquery-plugins/mxui/nav/selectable',
    'app/models/category.js',
    'jquery/view/ejs',

    'app/models',


    function () {
        BaseController.extend('Search_all', {
                defaults: {
                    options: {
                        message: this.data

                    },
                 
                }

            },

            {
                init:function () {

                    this._super();
                    this.element.html('//app/view/search/search_all.ejs',{});
                    console.info("run in search_all.js");


                    App.Models.Category.findAll({}, function (data) {
                        var obj4 = $.each(data, function(data){
                            return obj4
                        });

                        console.info("tests open");


                                var search_query = jQuery('#search_input').val();
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
                                search(obj4, true);

                                if(resultsArray.length == 0){
                                    debugger;
                                    jQuery('#result1').append(
                                        '<h4>Пошук не дав результату</h4>'

                                    );
                                };
                                for (var i = 0; i < resultsArray.length; i++) {
                                    var object = resultsArray[i];
                                    jQuery('#result1').append(
                                        '<h5> <a class="search-result__header" id ="' + object.id + '">' + object.name + '</a> <br>' + object.description + '</h5>'

                                    );
                                }
                           
                            });


                         },
                             ".search-result__header click": function(el, ev){
                                     ev.preventDefault();
                                      var x = el.attr('id');                  
                                        this.navigate('Passtest', x);
              }

            }); 
 });
