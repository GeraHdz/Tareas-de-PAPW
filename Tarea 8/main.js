$( document ).ready(function() {
    console.log( 'ready!' );

    $("#accion").on({
        click: function(){
            var lados = $("#Angulo").val();
            var angulo = (180 * (lados - 2))/lados;

            $("#resultado").text("Resultado: " + angulo);
        }
    });
  });
