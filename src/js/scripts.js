const politicaCifrar = [
    ["e", "enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]
];


// Funcion para el btn Encriptar
function mostrarEncriptado(){
    // Hacer el encriptado del texto y almacenarlo
    let resultadoEncriptado = encriptarTexto("txtAreaTexto");
    // Cambiar el texto del parrafo por el texto Encriptado
    cambiarTextoParrafo("desencriptar-parrafo", resultadoEncriptado);
    // Copiar al portapapeles
    copiarAlPortapapeles(resultadoEncriptado);
    // Limpiar el textArea y ocultar la imagen y titulo de la section de respuesta
    clearAndHide();
    return;
}

// Funcion para el btn Desencriptar
function mostrarDesencriptado(){
    // Hacer el encriptado del texto y almacenarlo
    let resultadoDesencriptado = desencriptarTexto("txtAreaTexto");
    // Cambiar el texto del parrafo por el texto Desencriptado
    cambiarTextoParrafo("desencriptar-parrafo", resultadoDesencriptado);
    // Copiar al portapapeles
    copiarAlPortapapeles(resultadoDesencriptado);
    // Limpiar el textArea y ocultar la imagen y titulo de la section de respuesta
    clearAndHide();
    return;
}

// Encriptar el texto
function encriptarTexto(idCampo){
    let textoEncriptar = document.getElementById(idCampo).value;
    for(const [letra, valor] of politicaCifrar){
        textoEncriptar = textoEncriptar.split(letra).join(valor);
    }
    return textoEncriptar;
}

// Desencriptar el texto
function desencriptarTexto(idCampo){
    let textoDesencriptar = document.getElementById(idCampo).value;
    for(const [letra, valor] of politicaCifrar){
        textoDesencriptar = textoDesencriptar.split(valor).join(letra);
    }
    return textoDesencriptar;
}

// Funcion para preparar el desencriptado
function clearAndHide(){
    limpiarImput();
    ocultarElementos();
}

// Cambiar el texto
function cambiarTextoParrafo(idElementoACambiar, textoACambiar){
    let parrafoACambiar = document.getElementById(idElementoACambiar);
    parrafoACambiar.innerHTML = textoACambiar;
    return;
}

// Limpiar el textarea
function limpiarImput(){
    document.getElementById("txtAreaTexto").value = "";
    return;
}

// Ocultar elementos
function ocultarElementos(){
    document.getElementById("desencriptar-imagen").style.display = "none";
    document.getElementById("desencriptar-titulo").style.display = "none";
}

// Copiar en el portapapeles
function copiarAlPortapapeles(textoACopiar){
    // Api clipboard
    navigator.clipboard.writeText(textoACopiar).then(function(){
        console.log("Texto copiado");
    }).catch(function(error){
        console.error("Error al copiar", error);
    });
    return;
}