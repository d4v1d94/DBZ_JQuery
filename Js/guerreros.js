$(document).ready(function(){
    $("img").hide();
    var elementos=document.querySelectorAll("li");
    for(var i=0;i<elementos.length;i++){
        elementos[i].addEventListener("mouseover",function(e){
            if (e.target==elem1) {
                $("#elem1").addClass("destacar");
                $("img").attr("src","img/Guerreros/Goku.jpg").hide().fadeIn(2000);
            }
             else if (e.target==elem2) {
                $("#elem2").addClass("destacar");
                $("img").attr("src","img/Guerreros/Vegeta.jpg").hide().fadeIn(2000);
            }
            else if (e.target==elem3) {
                $("#elem3").addClass("destacar");
                $("img").attr("src","img/Guerreros/Gohan.jpg").hide().fadeIn(2000);
            }
            else if (e.target==elem4) {
                $("#elem4").addClass("destacar");
                $("img").attr("src","img/Guerreros/trunks.jpg").hide().fadeIn(2000);
            }
            else if (e.target==elem5) {
                $("#elem5").addClass("destacar");
                $("img").attr("src","img/Guerreros/Goten.jpg").hide().fadeIn(2000);
            }
            else if (e.target==elem6) {
                $("#elem6").addClass("destacar");
                $("img").attr("src","img/Guerreros/Picoro.jpg").hide().fadeIn(2000);
            }
            else if (e.target==elem7) {
                $("#elem7").addClass("destacar");
                $("img").attr("src","img/Guerreros/Ten.jpg").hide().fadeIn(2000);
            }
            else if (e.target==elem8) {
                $("#elem8").addClass("destacar");
                $("img").attr("src","img/Guerreros/Krillin.jpg").hide().fadeIn(2000);
            }
            else if (e.target==elem9) {
                $("#elem9").addClass("destacar");
                $("img").attr("src","img/Guerreros/Chaos.jpg").hide().fadeIn(2000);
            }
            else if (e.target==elem10) {
                $("#elem10").addClass("destacar");
                $("img").attr("src","img/Guerreros/Yamcha.jpg").hide().fadeIn(2000);
            }
            
        },false);
        elementos[i].addEventListener("mouseout",function(e){
            $("img").hide();
            if (e.target==elem1) {
                $("#elem1").removeClass("destacar");
                $("img").removeAttr("src");
            }
            else if (e.target==elem2) {
                $("#elem2").removeClass("destacar");
                $("img").removeAttr("src");
            }
            else if (e.target==elem3) {
                $("#elem3").removeClass("destacar");
                $("img").removeAttr("src");
            }
            else if (e.target==elem4) {
                $("#elem4").removeClass("destacar");
                $("img").removeAttr("src");
            }
            else if (e.target==elem5) {
                $("#elem5").removeClass("destacar");
                $("img").removeAttr("src");
            }
            else if (e.target==elem6) {
                $("#elem6").removeClass("destacar");
                $("img").removeAttr("src");
            }
            else if (e.target==elem7) {
                $("#elem7").removeClass("destacar");
                $("img").removeAttr("src");
            }
            else if (e.target==elem8) {
                $("#elem8").removeClass("destacar");
                $("img").removeAttr("src");
            }
            else if (e.target==elem9) {
                $("#elem9").removeClass("destacar");
                $("img").removeAttr("src");
            }
            else if (e.target==elem10) {
                $("#elem10").removeClass("destacar");
                $("img").removeAttr("src");
            }
           
        },false);
    }
   
});