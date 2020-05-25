$(document).ready(function(){
    $("#nombre").focus(function(){
        var campoNombre=$(this);
        if (campoNombre.val()==campoNombre.attr("value")) {
            campoNombre.val("");
        }
    });
    $("#form_datos").submit(function(){
        if ($("#nombre").val()==""||$("#nombre").val()=="Campo obligatorio") {
            alert("Por favor completa el nombre");
            $("#nombre").focus();
            return false;
        }
        else if ($("#usuario").val()==""||$("#contrasena").val()=="") {
            alert("Usuario o contraseña incorrectos");
            return false;
        }
    });
    $("#edad").blur(function(){
        var edadUsuario=$(this).val();
        if (isNaN(edadUsuario)) {
            alert("Ingrese un numero en edad");
            $(this).focus();
            $(this).val("");
        }
    });
    
});