$(function(){
    $('button').click(function(){
        $('h1').hide();
    });
});

$(function(){
    $('#azul').click(function(){
        $('p').css("background-color", "blue");
        $('p').fadeOut('fast');
    });
});

$(function(){
    $('#vermelho').click(function(){
        $('p').css("background-color", "red").fadeIn(5000);
        $('#mensagem').text("olá você ai")
            .css("background-color", "red")
            .css("color", "white")
            .css("border", "1px solid black");
    });
});
