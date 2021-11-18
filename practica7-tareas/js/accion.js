$(function (){
    $("#boton").on("click", function (e){
        console.log("clickado");
        let tarea = $("input").val();
        console.log(tarea);
        $("ul").append(
            "<li><span>"+tarea+"</span><a class='quitar'>quitar</a></li>"
        );
    });

    $("body").on("click","a", function (e){
        $(e.currentTarget).parent().remove();
    });

    $("body").on("click","span",function (e){
       // let clon = $(e.currentTarget);
        let cosa = $(e.currentTarget).parent().remove();
        $("#funciona").prepend(cosa);
    });
})