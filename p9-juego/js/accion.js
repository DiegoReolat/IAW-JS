$(function (){
    let numero = parseInt(Math.random()*100+1);
    let intro;
    let intentos = 0;
    console.log(numero);

    $("main").on("click", "#verde", function (e){
        if($("verde").html("Comprobar")){
            intro = parseInt($("#numero").val());
            if(intro==numero){
                console.log("Has acertado");
                intentos++;
                document.getElementById("verde").innerHTML = "Volver a jugar";
                $("input").toggle();
            }
            else{
                intentos++;
                if(intro>numero){
                    $("label").html("El número es menor que: <strong>"+intro+"</strong>");
                    $("#numero").val("");
                    $("#numero").focus();
                }
                else if(intro<numero){
                    $("label").html("El número es mayor que: <strong>"+intro+"</strong>");
                    $("#numero").val("");
                    $("#numero").focus();
                }
            }
        }
        else if($("verde").html("Volver a jugar")){
            document.getElementById("verde").innerHTML = "Comprobar";
        }
    })
})




