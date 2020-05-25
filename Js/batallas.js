$(document).ready(function() {
    var imagenes=document.querySelectorAll("img");
    for(var i=0;i<imagenes.length;i++){
        imagenes[i].addEventListener("click",function(e){
             
            if (e.target==batalla2) {
                $("#batalla2").animate({
                    marginLeft:"+=150px",
                    marginTop:"+=50px"
                },800);
            }
            else   if (e.target==batalla3) {
                $("#batalla3").animate({
                    marginLeft:"+=150px",
                    marginTop:"-=50px"
                },800);
            }
            else   if (e.target==batalla4) {
                $("#batalla4").animate({
                    marginLeft:"-=150px",
                    marginTop:"-=50px"
                },800);
            }
            
            
        },false)
    }
});