$(document).ready(function(){
    var caja = $("#caja");
    $("#mostrar").hide();
    $("#mostrar").click(function(){
        $(this).hide();
        $("#ocultar").show();
        //caja.show('slow');
        //caja.fadeIn('slow');
        caja.fadeTo('slow',1);
    });

    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show();
        //caja.hide('slow');
        //caja.fadeOut('slow');
        caja.fadeTo('slow',0);
    });

    $("#action").click(function(){
        caja.toggle('fast');
    });

    $("#animame").click(function(){
        caja.animate({marginLeft:'500px',
            fontSize:'40px',
            height:'110px'
        }, 'slow')
        .animate({
            borderRadius: '900px',
            marginTop: '80px'
        }, 'slow')
        .animate({
            borderRadius:'0px',
            marginLeft:'0px'
        }, 'slow')
        .animate({
            borderRadius:'100px',
            marginTop: '2px',
        }, 'slow')
        .animate({marginLeft:'500px',
        fontSize:'40px',
        height:'110px'
        }, 'slow');
    });
});