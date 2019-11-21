$(document).ready(function(){

    // Slider
    if(window.location.href.indexOf('index') > -1){
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            slideHeight: 100,
            responsive: true
        });
    }
    // Posts

    if(window.location.href.indexOf('index') > -1){
        var posts= [
            {
                title: 'Titulo 1',
                data: moment().format("MMMM Do YYYY"),
                content: 'Suspendisse semper, massa ac condimentum mattis, tortor nunc egestas sem, bibendum tempor urna dui vitae est. Integer dui lacus, dignissim at rutrum vitae, mollis mollis ex. Nulla facilisi. Curabitur quis dui sit amet erat feugiat finibus. Morbi facilisis, nisi ut laoreet malesuada, erat mi porttitor tortor, sed iaculis erat ipsum id erat. Mauris mattis, purus a bibendum ornare, ligula velit luctus massa, sit amet accumsan turpis est nec ipsum. Nunc ullamcorper diam viverra, consequat lectus vestibulum, vulputate ipsum. Donec et est vitae ipsum tempus condimentum. In lectus felis, condimentum eget consectetur a, ornare condimentum urna. Aenean iaculis, nisl quis fringilla commodo, tellus ligula vulputate odio, at accumsan nisl sapien ac ante.'
            },
            {
                title: 'Titulo 2',
                data: "Se público el día :" + moment().format('dddd') + " de :" + moment().format('MMMM') + " del año :" + moment().format('YYYY'),

                content: 'Suspendisse semper, massa ac condimentum mattis, tortor nunc egestas sem, bibendum tempor urna dui vitae est. Integer dui lacus, dignissim at rutrum vitae, mollis mollis ex. Nulla facilisi. Curabitur quis dui sit amet erat feugiat finibus. Morbi facilisis, nisi ut laoreet malesuada, erat mi porttitor tortor, sed iaculis erat ipsum id erat. Mauris mattis, purus a bibendum ornare, ligula velit luctus massa, sit amet accumsan turpis est nec ipsum. Nunc ullamcorper diam viverra, consequat lectus vestibulum, vulputate ipsum. Donec et est vitae ipsum tempus condimentum. In lectus felis, condimentum eget consectetur a, ornare condimentum urna. Aenean iaculis, nisl quis fringilla commodo, tellus ligula vulputate odio, at accumsan nisl sapien ac ante.'
            },
            {
                title: 'Titulo 3',
                data: new Date(),
                content: 'Suspendisse semper, massa ac condimentum mattis, tortor nunc egestas sem, bibendum tempor urna dui vitae est. Integer dui lacus, dignissim at rutrum vitae, mollis mollis ex. Nulla facilisi. Curabitur quis dui sit amet erat feugiat finibus. Morbi facilisis, nisi ut laoreet malesuada, erat mi porttitor tortor, sed iaculis erat ipsum id erat. Mauris mattis, purus a bibendum ornare, ligula velit luctus massa, sit amet accumsan turpis est nec ipsum. Nunc ullamcorper diam viverra, consequat lectus vestibulum, vulputate ipsum. Donec et est vitae ipsum tempus condimentum. In lectus felis, condimentum eget consectetur a, ornare condimentum urna. Aenean iaculis, nisl quis fringilla commodo, tellus ligula vulputate odio, at accumsan nisl sapien ac ante.'
            },
            {
                title: 'Titulo 4',
                data: new Date(),
                content: 'Suspendisse semper, massa ac condimentum mattis, tortor nunc egestas sem, bibendum tempor urna dui vitae est. Integer dui lacus, dignissim at rutrum vitae, mollis mollis ex. Nulla facilisi. Curabitur quis dui sit amet erat feugiat finibus. Morbi facilisis, nisi ut laoreet malesuada, erat mi porttitor tortor, sed iaculis erat ipsum id erat. Mauris mattis, purus a bibendum ornare, ligula velit luctus massa, sit amet accumsan turpis est nec ipsum. Nunc ullamcorper diam viverra, consequat lectus vestibulum, vulputate ipsum. Donec et est vitae ipsum tempus condimentum. In lectus felis, condimentum eget consectetur a, ornare condimentum urna. Aenean iaculis, nisl quis fringilla commodo, tellus ligula vulputate odio, at accumsan nisl sapien ac ante.'
            },
            {
                title: 'Titulo 5',
                data: new Date(),
                content: 'Suspendisse semper, massa ac condimentum mattis, tortor nunc egestas sem, bibendum tempor urna dui vitae est. Integer dui lacus, dignissim at rutrum vitae, mollis mollis ex. Nulla facilisi. Curabitur quis dui sit amet erat feugiat finibus. Morbi facilisis, nisi ut laoreet malesuada, erat mi porttitor tortor, sed iaculis erat ipsum id erat. Mauris mattis, purus a bibendum ornare, ligula velit luctus massa, sit amet accumsan turpis est nec ipsum. Nunc ullamcorper diam viverra, consequat lectus vestibulum, vulputate ipsum. Donec et est vitae ipsum tempus condimentum. In lectus felis, condimentum eget consectetur a, ornare condimentum urna. Aenean iaculis, nisl quis fringilla commodo, tellus ligula vulputate odio, at accumsan nisl sapien ac ante.'
            },
        ];
    

        posts.forEach((item, index)=>{
            var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.data}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">Leer Más</a>
                </article>
            `;
            $("#posts").append(post);
        });
    }

    var theme = $("#theme");

    $("#to_green").click(function(){
        theme.attr("href", "css/green.css");
    });
    $("#to_blue").click(function(){
        theme.attr("href", "css/blue.css");
    });
    $("#to_red").click(function(){
        theme.attr("href", "css/red.css");
    });

    // Scroll arriba de la web
    $('.subir').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false
    });

    // Login falso

    $("#login form").submit(function(){
        var form_name = $("#form_name").val();
        
        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");
    
    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");

        about_parrafo.html("<strong>Bienvenido, "+ form_name+"</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar Session</a>");
        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }
    // Acordeon
    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    }

    // Reloj
    if(window.location.href.indexOf('reloj') > -1){

        setInterval(function(){
            var reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj);
        }, 1000);
        
    }

    // Validacion

    if(window.location.href.indexOf('contact') > -1){

        $("form input[name='date']").datepicker({
            dateFormat: 'dd/mm/yy'
        });
        
        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true

        });
    }
});