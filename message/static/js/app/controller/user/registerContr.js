steal('jquery/class',
    'jquery/controller',
    'jquery/model',    
    'jquery/view/ejs',
    'jquery')
    .then('app/controller/baseContr.js', 'app/models/users.js',function($){

        BaseController.extend('Register', {
            defaults: {
                options: {
                    options: App.Models.User.findAll()
                },
            }
        },
        {
        'init': function () {
            console.log('register controller runs....');
            this._super();
        $("#inside").html('//app/view/register.ejs', {})   
        
        },

        "#register_btn click" : function(){

            var mail = $("#email").val();
            var logg = $("#log").val();
            var password = $("#pass").val();
            var password2 = $("#confirm_pwd").val();

                var dog = mail.indexOf("@");
                var dot = mail.lastIndexOf(".");

                if (dog < 1 || dot < dog+2 || dot+2 >= mail.length) {
                    alert("Невірна електронна адреса");
                    return false;
                }

                else if ((logg.length < 4) || (logg.length > 14)) {

                    alert("Логін повинен містити від 5 до 15 символів");
                    return false;
                }

                else if (password.length < 4 || password.length > 19) {

                    alert("Пароль повинен містити від 5 до 20 символів");
                    return false;
                }

                else if(password2 !== password) {

                    alert("Введені паролі не співпадають");
                    return false;
                }
                else {
                     
                     console.log(logg + " " + password);

             };
                
                App.Models.User.findAll({},function(data){


                      $.each(data,function (key, value){
                         console.log(data[key].log_in);
                         if(data[key].log_in == logg || data[key].email == mail) {


                             alert("Користувач із таким логіном уже існує, або ж на Вашу електронну адресу уже було створено аккаунт");
                             return false;
                          }
                        else {
                        };
                      });
           
                });
    
                var formParams = {};
                formParams.mail = $("#email").val();
                formParams.logg = $("#log").val();
                formParams.password = $("#pass").val();
                var jsonString = $.toJSON(formParams); 
                console.log(jsonString);
//output:  '{ "mail" : "email", "logg" : "log", "password" : "pass" }'
                 
                $.ajax({
                    type: 'post',
                    data: jsonString,
                    dataType: 'json'
                });
        }

        });

   
});