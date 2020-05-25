$(document).ready(function(){
    $(".respuesta").hide();
    $(".principal h3").toggle(function(){
        $(this).next(".respuesta").fadeIn();
        $(this).addClass("cerrar");
    },function(){
        $(this).next(".respuesta").fadeOut();
        $(this).removeClass("cerrar");
    });
});