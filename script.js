$(function(){
    let color= "";

    $("#color-pallete").on("click", ".color", function(){
            color = $(this).css("background-color");
    });

    $("#pixel-board").on("click", ".pixel", function(){
            $(this).css("background-color", color);
    });

    $(".btn-limpar").on("click", function(){
        $("#pixel-board div").each(function(){
            $(this).css("background-color", "white");
        });
    });
});