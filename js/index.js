$(function(){
    var $toggler = $('.header__navbar-toggler'),
        $dropdown = $('.menu__dropdown');
        $toggler.click(function(){
            $(this).toggleClass('active');
            $dropdown.toggleClass('active');
            return false;
        });
});