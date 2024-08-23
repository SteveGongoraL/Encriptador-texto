const politicaCifrar = [
    ["e", "enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]
];


function mostrarEncriptado(){
    let resultadoEncriptado = encriptarTexto("txtAreaTexto");
    console.log(resultadoEncriptado);
    limpiarImput();
    return;
}

function mostrarDesencriptado(){
    let resultadoDesencriptado = desencriptarTexto("txtAreaTexto");
    console.log(resultadoDesencriptado);
    limpiarImput();
    return;
}

function encriptarTexto(idCampo){
    let textoEncriptar = document.getElementById(idCampo).value;
    
    for(const [letra, valor] of politicaCifrar){
        textoEncriptar = textoEncriptar.split(letra).join(valor);
    }
    
    return textoEncriptar;
}

function desencriptarTexto(idCampo){
    let textoDesencriptar = document.getElementById(idCampo).value;
    for(const [letra, valor] of politicaCifrar){
        textoDesencriptar = textoDesencriptar.split(valor).join(letra);
    }
    return textoDesencriptar;
}

// Limpiar el textarea
function limpiarImput(){
    document.getElementById("txtAreaTexto").value = "";
    return;
}