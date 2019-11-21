$(document).ready(function(){
    // Selector de ID
    var rojo = $("#rojo").css("background", "red")
                         .css("color", "white");
    console.log(rojo);

    var amarillo = $("#amarillo").css("background", "yellow")
                                 .css("color", "green");

    $('#verde').css("background", "green")
               .css("color", "white");


    // selectores de clases
    var mi_clase = $('.zebra');

    console.log(mi_clase);
    console.log(mi_clase[0]);

    $('.no_border').click(function(){
        console.log("Click dado");
        $(this).addClass('zebra');
    });

    // selectores de etiqueta
    var parrafo = $('p').css("cursor", "pointer");

    parrafo.click(function(){
        var that = $(this);

        if(!that.hasClass('grande')){
            that.addClass("grande");
        }else{
            that.removeClass('grande');
        }
    });

    // Selectores atributo

    $('[title="Google"]').css('background', '#ccc');
    $('[title="Facebook"]').css('background', 'green');

    // otros
    // $('p,a').addClass('margen_sup');
    //var busqueda = $('#caja').find('.resaltado');
    var busqueda = $('#caja.resaltado').eq(0).parent().find('[title="Google"]');
    console.log(busqueda);

});
