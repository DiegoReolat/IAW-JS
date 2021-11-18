$(function (){
    let primero;
    let segundo;
    let resultado;
  $("#n1").on("keyup", function (e){
      e.preventDefault();
      primero = parseFloat($(e.target).val());
      console.log(primero);
  });
  $("#n2").on("keyup", function (e){
      segundo = parseFloat($(e.currentTarget).val());
      console.log(segundo);
  });
  $("#suma").on("click", function(e){
      resultado = primero + segundo;
      $("#resul").html(resultado);
    })
    $("#resta").on("click", function(e){
        resultado = primero - segundo;
        $("#resul").html(resultado);
    })
    $("#multiplicacion").on("click", function(e){
        resultado = primero * segundo;
        $("#resul").html(resultado);
    })
    $("#division").on("click", function(e){
        resultado = primero / segundo;
        $("#resul").html(resultado);
    })
})