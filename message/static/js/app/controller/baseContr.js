steal('jquery/controller',

	  function($){
        /*
        Base controller - головний контроллер на якому бузуються усі інші контроллери.
        Містись в собі загальні методи, які можна використати в інших контроллерах.
        */
	  	$.Controller('BaseController', {
	  		defaults : {
	  			options : {
	  				message: "Hello, I'm base Controller. UAHAHAHA UAHAHAHA"
	  			},
	  			veiw: "static/js/app/view/base.ejs"
	  		},
	  	}, {
	  		'init' : function() {                                  //ініціалізція Base контроллера
	  			$('#inside').html("static/js/app/view/base.ejs", this.options.options);
	  			this.routing = window.fRouting;
	  			console.info('Base controller run');
	  		}, 
	  		'destroy': function (){                                //руйнування Base контроллера 
	  			this._super();
	  			console.info("BASE - destroyed");
	  		},
	  		navigate : function(hr){                               //метод для навігації
                p = arguments[1] || "";                            //може приймати декілька аргументів (1-й: назва контроллера який буде ініціалізувтись, 2-й: параметри)
                $.route.attrs({type: hr, id: p}, true);
                console.info('Base controller navigate');
            },
            'getCookie': function(){
                    var i,name,role,ARRcookies = document.cookie.split(";");
                    console.info("d.c " + document.cookie);
                    console.info("arr " + ARRcookies);
                    
                    if(ARRcookies == ""){
                    	return[];
                    }

                    role = ARRcookies[0].substr(ARRcookies[0].indexOf("=")+1);
                    name = ARRcookies[1].substr(ARRcookies[1].indexOf("=")+1);
                    return [name,role];
            },
            'checkCookie': function(){                              //перевірка кукісів
                var username = this.getCookie()[0];
				
                if (username != null && username!=""){
					return true;						             //є зпис в куках
				};
				return false;							            //нема зпису в кукх
            },
            'deleteCookie': function(){
            	document.cookie    = "role=";
            	document.cookie    = "login=";
            	document.cookie    = "pwd=";
            	document.cookie    = "expires=";
            }
	  	});
	  });