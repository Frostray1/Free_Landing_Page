$(document).ready(function() {
    $('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.menu').toggleClass('open-menu');
        $('.profile__imgMobile').toggleClass('profile__imgMobile--open-menu');
    });
});