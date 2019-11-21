$(function(){
    $('.galeria .contenedor-imagen').on('click', function(){
        $('#modal').modal;
        var ruta_img = ($(this).find('img').attr('src'));
        $('#imagen-modal').attr('src', ruta_img);
    });

    $('#modal').on('click', function(){
        $('modal').modal('hide');
    });
})