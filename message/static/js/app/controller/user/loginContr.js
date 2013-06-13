steal('jquery/class',
    'jquery/controller',
    'jquery/model',    
    'jquery/view/ejs',
    'app/controller/menuContr.js',
    'app/controller/baseContr.js')
    .then('app/models/users.js',function($){

        BaseController.extend('Login', {
            defaults: {
                options: {
                    options: App.Models.User.findAll()
                },
                view: '//app/view/login.ejs'
            }
        },
        {
        'init': function () {
            console.log('login controller runs....');

            this.element.html(this.options.view,{});
            var p = this;  

            $(document).ready(function(){

                var allcookies = document.cookie;
                console.log(allcookies);

                // Повертає усі куки у парах у вигляді масиву
                cookiearray  = allcookies.split(';');

                // key value pairs
                for(var i=0; i<cookiearray.length; i++){
                    name = cookiearray[i].split('=')[0];
                    value = cookiearray[i].split('=')[1];

                //alert("Імя:" + name + " Значення : " + value);
                }
                if (p.checkCookie()){                           // є користувач
                    debugger;
                    $("#login_wrapper").html('//app/view/user_login.ejs',{"user":p.getCookie()[0]});
                }
            });
        },

        "#formLogin submit" : function(el, ev){
            debugger;
            ev.preventDefault();
            var login = $("#log_in").val();
            var password = $("#pwd").val();
        
            if(login.length == 0 && password.length == 0) {
                alert("Будь ласка, введіть Ваш логін та пароль");
                event.preventDefault();
            }

        App.Models.User.findAll({},function(data){

             $.each(data,function (key, value){
                

                if(data[key].log_in == login && data[key].pwd == password) {

                    var checked = $("#login__remember-me-checkbox" + ":checked").length;

                        if (checked == 0) {
                            alert("Привіт, " + login);
                            return false;
                            //event.preventDefault();
                        }
                        else{
                            cookieRole= data[key].role + ";";
                            document.cookie="role=" + cookieRole;

                            cookieLogin= escape(document.form.log_in.value) + ";";
                            document.cookie="login=" + cookieLogin;

                            cookiePwd= escape(document.form.pwd.value) + ";";
                            document.cookie="pwd=" + cookiePwd;

                            var now = new Date();
                            now.setMonth( now.getMonth() + 1 );
                            document.cookie = "expires=" + now.toUTCString() + ";"

                            alert("Role=" + cookieRole + "Login=" + cookieLogin + "Pwd=" + cookiePwd);
                            
                            debugger;
                            new Menus("#nav");
                            $("#login_wrapper").html('//app/view/user_login.ejs',{"user":cookieLogin});
                            
                            return false;
                        }
                }
                else {
                    alert("Користувача із такими даними не знайдено! Будь ласка, перевірте Ваш логін та пароль");
                };
             });
        });
        },
        '#login-exit click': function(){
            this.deleteCookie();
            debugger;
            new Menus("#nav");
            $("#login_wrapper").html(this.options.view,{});
        }
        });

});