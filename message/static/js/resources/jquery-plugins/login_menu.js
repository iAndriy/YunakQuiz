$(document).ready(function(){
    $('#login-button').live('click', function(e){
        e.preventDefault();
        if($(this).parent().hasClass('selected')){
            console.info('delete selected');
            $('#formLogin .dropdown-menu').slideUp(100);
            $('#login_wrapper.selected').removeClass('selected');
            $('#log_in').val('');
            $('#pwd').val('');
        } else {
            console.log('add selected');
            $(this).parent().addClass("selected"); // display popup
            $('#formLogin .dropdown-menu').slideDown(100);
        }
        e.stopPropagation();
    });
    $(".dropdown-menu").live('click',function(e){
        e.stopPropagation();
    });

    $('body').live('click',function(){
        console.info('body delete selected');
        $('#formLogin .dropdown-menu').slideUp(100);
        $('#login_wrapper.selected').removeClass('selected');
        $('#log_in').val('');
        $('#pwd').val('');
    })
})