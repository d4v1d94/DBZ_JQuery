$(document).ready(function(){
    $("#form_registro").validate({
        rules:{
            e_mail:{
                required:true,
                email:true
            },
            password:{
                required:true,
                rangelength:[6,12]
            },
            confirma:{
                equalTo:"#password"
            }
        },
        messages:{
        e_mail:{
            required:"Introduce email por favor",
            email:"Ingrese formato valido"
        },
        password:{
            required:"Introduce contraseña",
            rangelength:"Entre 6 y 12 caracteres"
        },
        confirma:{
            equalTo:"No coinciden las contraseñas"
        }}
    });
});