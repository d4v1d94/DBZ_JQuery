$(document).ready(function(){
    $("#galeria_1").hide().fadeIn(5000);
    document.getElementById("cerrar").addEventListener("click",function(){
        $("#banner").remove();
    },false);
    document.getElementById("gokubtn").addEventListener("click",function(){
        $(".goku").addClass("linkDestacaImagen");
        $(".vegeta").removeClass("linkDestacaImagen");
    },false);
    document.getElementById("vegetabtn").addEventListener("click",function(){
        $(".goku").removeClass("linkDestacaImagen");
        $(".vegeta").addClass("linkDestacaImagen");
    },false);
   var elementos=document.querySelectorAll("img");
   for(var i=0;i<elementos.length;i++){
       elementos[i].addEventListener("mouseover",function(e){
           if (e.target==goku3) {
               $("#goku3").attr("src","img/GokuBlack_1.png");
           }
           else if(e.target==goku4){
               $("#goku4").attr("src","img/GokuBlack_2.png");
           }
           else if (e.target==vegeta1) {
               $("#vegeta1").attr("src","img/Majin_2.png");
           }
           else if (e.target==goku5) {
               $("#goku5").attr("src","img/GokuBlack_3.png");
           }
           else if (e.target==vegeta3) {
               $("#vegeta3").attr("src","img/Majin_4.png");
           }
           else if (e.target==goku7) {
               $("#goku7").attr("src","img/GokuBlack_4.png");
           }
           else if (e.target==goku6) {
               $("#goku6").attr("src","img/Goku_1.jpg");
           }
           else if (e.target==vegeta2) {
               $("#vegeta2").attr("src","img/Majin_5.png");
           }

       },false);
       elementos[i].addEventListener("mouseout",function(e){
        if (e.target==goku3) {
            $("#goku3").attr("src","img/Goku_3.jpg");
        }
        else if(e.target==goku4){
            $("#goku4").attr("src","img/Goku_4.jpg");
        }
        else if (e.target==vegeta1) {
            $("#vegeta1").attr("src","img/Vegeta_1.jpg");
        }
        else if (e.target==goku5) {
            $("#goku5").attr("src","img/Goku_5.jpg");
        }
        else if (e.target==vegeta3) {
            $("#vegeta3").attr("src","img/Vegeta_3.jpg");
        }
        else if (e.target==goku7) {
            $("#goku7").attr("src","img/Goku_7.jpg");
        }
        else if (e.target==goku6) {
            $("#goku6").attr("src","img/Goku_6.jpg");
        }
        else if (e.target==vegeta2) {
            $("#vegeta2").attr("src","img/Vegeta_2.jpg");
        }

    },false);
   }
//    document.getElementById("miboton").addEventListener("click",function(){
//        $("img").each(function(){
//            $(this).fadeOut(1000).fadeIn(1000).width("410");
//        })
//    },false);
//    document.getElementById("miboton2").addEventListener("click",function(){
//     $("img").each(function(){
//         $(this).fadeOut(1000).fadeIn(1000).width("300");
//     })
// },false);
$(".goku").dblclick(function(){
    alert("Golpeaste a Kakaroto")
});
$(".vegeta").dblclick(function(){
    alert("Me golpeaste maltido insecto");
});
$("#mensajeGoku").hide();
$("#mensajeVegeta").hide();
$(".goku").hover(function(){
    $("#mensajeGoku").show();
},function(){
    $("#mensajeGoku").hide();
});
$(".vegeta").hover(function(){
    $("#mensajeVegeta").show();
},function(){
    $("#mensajeVegeta").hide();
});
$("#JqueryMenu").navPlugin({
    'itemWidth':'auto',
    'itemHeight':30,
    'navEffect':'slide',
    'speed':200
});
$("#abierto").toggle(function(){
    $("#login form").slideDown(300);
    $(this).addClass("cerrado");
},function(){
    $("#login form").fadeOut(600);
    $(this).removeClass("cerrado");
});
$("#menu").hover(function(){
    $(this).stop().animate({
        right:"0px"
    },500,"easeInSine");
},function(){
    $(this).stop().animate({
        right:"-92px"
    },1500,"easeOutBounce");
});
$("#menu2").hover(function(){
    $(this).stop().animate({
        left:"0px"
    },500,"easeInSine");
},function(){
    $(this).stop().animate({
        left:"-92px"
    },1500,"easeOutBounce");
});
$(".iframe").fancybox({
    width:"90%",
    height:"90%",
    titlwPosition:"outside"
});
});
