function CalcularAngulos(lad){
    var lados = lad;

    var angulo = (180 * (lados - 2))/lados;

    var result = document.getElementById("resultado");
    result.style.fontWeight = "900";
    result.innerHTML = "Resultado: " + angulo;
}