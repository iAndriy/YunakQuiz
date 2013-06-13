steal('jquery/view/ejs',
      'jquery',
      'jquery/controller/route',
      'app/style/style.css',
      'app/controller/contactsContr.js',
      'app/controller/aboutContr.js',
      'app/controller/featuresContr.js',
      function ($) {

/*var urlMap = {
	'contacts': 	{view: "contacts.ejs", 	ctrl: "someCtrl"},
	'about': 		{view: "about.ejs", 	ctrl: "someCtrl2"},
	'features': 	{view: "features.ejs", 	ctrl: "someCtrl3"}
}*/

            var urlMap = {
                'contacts': function() {
                    // Виклик контроллера значно простіший у такій формі
                    // Тому що одразу видно:
                    // 1. Що за контроллер,
                    // 2. Куди ми його прив'язуємо
                    // 3. Які параметри ми хочемо йому передати
                    new Contacts($('#content'), {view: 'static/js/app/view/items.ejs'});
                },
                'about': function() {
                    new About($('#content'), {view: 'static/js/app/view/items.ejs'});
                },
                'features': function() {
                    new Features($('#content'), {view: 'static/js/app/view/items.ejs'});
                }
            };

            // Головний контроллер, від якого будуть наслідуватись усі контроллери вашої аплікації
            // Міститиме базові конфігураційні параметри, а також запуск основних вюшок
            /*$.Controller ('BaseController', {
                defaults : {
                    options : {}
                }
            }, {
                'init': function (){
                    $("#inside").html(this.options.view, this.options.options);
                    console.info("Base controller run.");
                }
            });*/

            /*BaseController.extend ('Contacts', {
                defaults : {
                    options : {
                        message : 'Contacts Page [defaults]'
                    }
                }
            },{
                'init': function(){
                    this._super();

                    console.info("Contacts controller run!!!");
                    $('#newbutton').click(function () {
                        alert('Event on Contacts controller');
                    });
                },
                'destroy' : function () {
                    console.log('Contacts - Destroyed');
                    this._super();
                }
            });*/

            /*BaseController.extend ('About', {
                defaults : {
                    options : {
                        message : 'About Page [defaults]'
                    }
                }
            },{
                'init': function(){
                    this._super();

                    console.info("Contacts controller run!!!");
                    $('#newbutton').click(function () {
                        alert('Event on About controller');
                    });
                },
                'destroy' : function () {
                    console.log('About - Destroyed');
                    this._super();
                }
            });

            BaseController.extend ('Features', {
                defaults : {
                    options : {
                        message : 'Features Page [defaults]'
                    }
                }
            },{
                'init': function(){
                    this._super();

                    console.info("Features controller run!!!");
                    $('#newbutton').click(function () {
                        alert('Event on Features controller');
                    });
                },
                'destroy' : function () {
                    console.log('Features - Destroyed');
                    this._super();
                }
            });*/


$.Controller('Routing', {
	"route": function(){
		
	}, 
	":id route": function(data){
		var ip = data.id;
        if ($('#content').controller()) {
            $('#content').controller().destroy();
        }

		urlMap[ip]();
	},
	".navbar-header__nav-item-links click": function(el, ev){
		ev.preventDefault();
		var hr = el.attr("href");
		$.route.attr('id', hr);
	}
});

new Routing(document.body);
});
