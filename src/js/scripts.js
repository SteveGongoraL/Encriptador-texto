const politicaCifrar = [
    ["e", "enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]
];


// Aceptar solo minusculas y sin acentos
let textArea = document.getElementById("content-encriptar-textArea");

textArea.addEventListener("input", function(){
    const reglas = /[^a-z\s]/g;
    if(reglas.test(this.value)) {
        this.value = this.value.replace(reglas, ""); // Elimina caracteres no permitidos
    }
});


// Funcion para el btn Encriptar
function mostrarEncriptado(){
    // Validar el contenido del textArea
    let textoAEvaluar = contenidoTextArea("content-encriptar-textArea");

    if(textoAEvaluar !== null){
        let resultadoEncriptado = encriptarTexto(textoAEvaluar); // Encriptar el texto
        // Cambiar el texto del parrafo, limpiar textArea, ocultar elemntos y copiar en portapapeles
        prepararAreaResultado("desencriptar-parrafo", resultadoEncriptado);
    } else{
        restablecerElementos();
    }
    return;
};


// Funcion para el btn Desencriptar
function mostrarDesencriptado(){
    // Validar el contenido del textArea
    let textoAEvaluar = contenidoTextArea("content-encriptar-textArea");

    if(textoAEvaluar !== null){
        let resultadoDesencriptado = desencriptarTexto(textoAEvaluar); // Desencriptar texto
        // Cambiar el texto del parrafo, limpiar textArea, ocultar elemntos y copiar en portapapeles
        prepararAreaResultado("desencriptar-parrafo", resultadoDesencriptado);
    } else{
        restablecerElementos();
    }
    return;
};


// Encriptar el texto
function encriptarTexto(textoEncriptar){
    for(const [letra, valor] of politicaCifrar){
        textoEncriptar = textoEncriptar.split(letra).join(valor);
    }
    return textoEncriptar;
};


// Desencriptar el texto
function desencriptarTexto(textoDesencriptar){
    for(const [letra, valor] of politicaCifrar){
        textoDesencriptar = textoDesencriptar.split(valor).join(letra);
    }
    return textoDesencriptar;
};


// Validar que el textArea tenga contenido
function contenidoTextArea(idCampo){
    let textObtenido = document.getElementById(idCampo).value;
    
    if(textObtenido === ""){
        return null;
    } else{
        return textObtenido;
    }
};


// Funcion para preparar el desencriptado
function prepararAreaResultado(idElemento, textoResultado){
    cambiarTextoParrafo(idElemento, textoResultado);
    limpiarImput();
    ocultarElementos();
    copiarAlPortapapeles(textoResultado);
};
// Cambiar el texto
function cambiarTextoParrafo(idElementoACambiar, textoACambiar){
    let parrafoACambiar = document.getElementById(idElementoACambiar);
    parrafoACambiar.innerHTML = textoACambiar;
    return;
};
// Limpiar el textarea
function limpiarImput(){
    document.getElementById("content-encriptar-textArea").value = "";
    return;
};
// Ocultar elementos
function ocultarElementos(){
    document.getElementById("desencriptar-imagen").style.display = "none";
    document.getElementById("desencriptar-titulo").style.display = "none";
};
// Copiar en el portapapeles
function copiarAlPortapapeles(textoACopiar){
    // Api clipboard
    navigator.clipboard.writeText(textoACopiar).then(function(){
        msjCopiadoPortapapeles("desencriptar-parrafo-copiado","¡Texto copiado en el portapapeles!");
    }).catch(function(error){
        console.error("Error al copiar", error);
    });
    return;
};
// Mensaje copiado
function msjCopiadoPortapapeles(idParrafoAMostrar, textoAMostrar){
    document.getElementById(idParrafoAMostrar).style.display = "block";

    cambiarTextoParrafo(idParrafoAMostrar, textoAMostrar);
};

// Restablecer elementos
function restablecerElementos(){
    document.getElementById("desencriptar-titulo").style.display = "block";
    document.getElementById("desencriptar-parrafo-copiado").style.display = "none";
    document.getElementById("desencriptar-parrafo").innerText = "Ingresa el texto que desees encriptar o desencriptar";
};
