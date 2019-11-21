$(document).ready(function(){

    // Mover elementos por la página
    $('.elemento').draggable();

    // Resize
    $('.elemento').resizable();

    // Lista de selección
    //$('.lista_seleccionable').selectable();

    // ordenar
    $('.lista_seleccionable').sortable({
        update: function(event, ui){
            console.log("Ha cambiado la lista");
        }
    });

    // Drop
    $("#elemento_movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("has soltado algo dentro del area");
        }
    });

    //Efectos

    /*$("#mostrar").click(function(){
        $(".caja_efectos").toggle("fade");
    });*/
    /*
    $("#mostrar").click(function(){
        $(".caja_efectos").effect("explode");
    });*/
    /*
    $("#mostrar").click(function(){
        $(".caja_efectos").toggle("explode");
    });*/
    /*
    $("#mostrar").click(function(){
        $(".caja_efectos").toggle("blind");
    });
    */
    /*
    $("#mostrar").click(function(){
        $(".caja_efectos").toggle("slide");
    */
   /*
    $("#mostrar").click(function(){
        $(".caja_efectos").toggle("fold");
    });
    */
    /*
    $("#mostrar").click(function(){
        $(".caja_efectos").toggle("scale");
    });
    
    $("#mostrar").click(function(){
        $(".caja_efectos").toggle("shake",4000);
    });
    */

    // ToolTip
    $(document).tooltip();

    // Dialog
    $("#lanzarpopup").click(function(){
        $("#popup").dialog();

    });

    // DatePicker
    $("#calendario").datepicker();

    // Tabs
    $("#pestanas").tabs();
});
