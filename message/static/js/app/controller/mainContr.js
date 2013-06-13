steal(
	'jquery',
	'app/models/my_models.js',		// steals all your models
	'app/controller/menuContr.js',
	'app/controller/navContr.js',
	'app/controller/baseContr.js',
	'app/controller/user/loginContr.js')
    .then('resources/jquery-plugins/login_menu.js', function(){		
		new Menus("#nav");			// configure your application
		new Login('#login_wrapper');
		new BaseController("#content");
		//new Routing(document.body);
/*		$('#tests').app_test_list();
		$('#editTest').app_test_edit();
		$('#createTest').app_test_create();*/
});
