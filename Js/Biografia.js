
$(document).ready(function(){
    var botones=document.querySelectorAll("input");
    for(var i=0;i<botones.length;i++){
        botones[i].addEventListener("click",function(e){
            var zonaActuacion;
    if (e.target==aumenta1) {
        zonaActuacion="#biografiaGoku";
    }
    else if (e.target==aumenta2) {
        zonaActuacion="#biografiaVegeta";
    }
    var tamDefecto=$(zonaActuacion).css("font-size");
    tamDefecto=parseInt(tamDefecto);
    $(zonaActuacion).css("font-size",tamDefecto+1);
        },false);
        botones[i].addEventListener("click",function(e){
            var zonaActuacion;
            if (e.target==disminuye1) {
                zonaActuacion="#biografiaGoku";
            }
            else if (e.target==disminuye2) {
                zonaActuacion="#biografiaVegeta";
            }
            var tamDefecto=$(zonaActuacion).css("font-size");
            tamDefecto=parseInt(tamDefecto);
            $(zonaActuacion).css("font-size",tamDefecto-1);
        },false);
        botones[i].addEventListener("click",function(e){
            var zonaActuacion;
            if (e.target==m_lectura1) {
                zonaActuacion="#biografiaGoku";
            }
            else if (e.target==m_lectura2) {
                zonaActuacion="#biografiaVegeta"
            }
            $(zonaActuacion).css({"background-color":"#000",
                                "font-size":"25px",
                                "text-align":"justify",
                                "color":"#fff"});
        },false)
    }
    $("#imagen_grande").hide();
   
    var img1=$("#gokun").attr("src");
    
    
    $("#gokun").bind("click",img1,function(e){
        
            
       
        e.stopPropagation();
        $("#imagen_grande").fadeIn(1000);
        $("#img_sustitucion").replaceWith("<img src='"+e.data+"'width='700' height='405'>") 
    });
   
    $(document).bind("click keypress",function(){
        $("#imagen_grande").fadeOut(1000);
    });
    var img2=$("#vegetan").attr("src");
    $("#imagen_grande2").hide();
    $("#vegetan").bind("click",img2,function(e){
       
            
      
        e.stopPropagation();
        $("#imagen_grande2").fadeIn(1000);
        $("#img_sustitucion2").replaceWith("<img src='"+e.data+"'width='700' height='405'>")  
    });
    $(document).bind("click keypress",function(){
        $("#imagen_grande2").fadeOut(1000);
    });
    
   
        $("#btn").toggle(function(){
            $("#menu").animate({
              left:"0px"
            });
          },function(){
            $("#menu").animate({
              left:"-210px"
            });
          });
});