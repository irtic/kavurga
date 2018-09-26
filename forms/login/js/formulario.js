$(document).ready( () =>{
    traer_formulario();
});

function traer_formulario () {
    $.ajax({
        beforeSend : function(){            
            $("#logo").css("display","block");
        },
        complete : function()
        {
            $("#logo").css("display","none");
        },
        data: {
            "accion" : "inicio"
        },
        url: "forms/login/models/formulario.php", 
        type: "POST",    
        dataType: "json",        
        success: function(result)
        {
            let success = result.success;

            if(success)
            {
                $("#formulario").load("forms/login/formulario.php");

                
            }else
            {
                console.log('No entro');
            }
        }
    })
    .done(function( data, textStatus, jqXHR ) {
        if ( console && console.log ) {
            console.log( "La solicitud  de traer formulario se ha cargado correctamente." );
        }
    })
    .fail(function( jqXHR, textStatus, errorThrown ) {
        if ( console && console.log ) {
            console.log( "La solicitud a fallado:  " +  textStatus);
        }
   });
}