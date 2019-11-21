$(document).ready(function(){
    reloadLinks();


    $('#add_button').click(function(){
        $('#menu').append('<a href="'+$("#add").val()+'"></a>');

        $("#add").val(''); // para que vacie el texto
        reloadLinks();
    });

    
});

function reloadLinks(){
    $('a').each(function(index){
        var that = $(this);
        var enlace = $(this).attr("href");

        that.attr('target','_blank');
        that.text(enlace);
    });
}