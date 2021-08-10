$(function () {
    var $toggler = $('.header__navbar-toggler'),
        $dropdown = $('#menu__dropdown'),
        $imgToggler = $('.menu-toggler'),
        $close = $('.menu-close');
    $toggler.click(function () {
        $(this).toggleClass('is-active');
        $imgToggler.toggleClass('is-disabled');
        $close.toggleClass('is-active');
        $dropdown.toggleClass('is-active');
        return false;
    });
    $('body').on('click', function (e) {
        if (!$dropdown.is(e.target) 
            && $dropdown.has(e.target).length === 0 
            && $('.is-active').has(e.target).length === 0
        ) {
            $toggler.removeClass('is-active');  
        }
    }); 
});