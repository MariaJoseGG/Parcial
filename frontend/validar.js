function verificar() {
    let val=document.getElementById("poblacion");
    if (val.value < 0 || val.value > 2500000000 || val.value.length === 0) {
        document.getElementById("poblacion").style.borderColor = "red";
        document.getElementById("boton").disabled = true;
    }
    else {
        document.getElementById("poblacion").style.borderColor = "green";
        document.getElementById("boton").disabled = false;
    }
}