const entrada = document.querySelector(".entrada");
const saida = document.querySelector(".saida");
let chaves = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o", "ober"] , ["u" , "ufat"]];


function criptografando (textoCriptografado) {
    textoCriptografado = textoCriptografado.toLowerCase();
    
    for (let i = 0; i < chaves.length; i++) { 
        if (textoCriptografado.includes(chaves[i][0])) {
            textoCriptografado = textoCriptografado.replaceAll(chaves[i][0], chaves[i][1]);
        }
    }
   
    return textoCriptografado;
}

function mostrarCopiarTexto() {
    const botaoCopiar = document.querySelector(".botao__copiar");
    botaoCopiar.style.display = "inline-block"; 
}

function mostrarTextareaSaida() {
    const textareaSaida = document.querySelector(".saida");
    textareaSaida.style.display = "inline-block"; 
}

function ocultarImagem() {
    const imagem = document.querySelector(".apresentacao__saida");
    imagem.style.display = "none"; 
}

function criptografar () {
    const criptografia = criptografando(entrada.value);
    saida.value = criptografia;
    entrada.value = "";
    mostrarCopiarTexto();
    mostrarTextareaSaida();
    ocultarImagem();
    
}

async function copiarTexto() {
    const textoParaCopiar = saida.value;
  
    try {
      await navigator.clipboard.writeText(textoParaCopiar);
      alert("Texto copiado com sucesso!");
    } catch (err) {
      console.error("Falha ao copiar texto:", err);
    }
    saida.value = "";
}

function descriptografando (textoDescriptografado) {
    textoDescriptografado = textoDescriptografado.toLowerCase();
    
    for (let i = 0; i < chaves.length; i++) { 
        if (textoDescriptografado.includes(chaves[i][1])) {
            textoDescriptografado = textoDescriptografado.replaceAll(chaves[i][1], chaves[i][0]);
        }
    }
   
    return textoDescriptografado;
}

function descriptografar () {
    const descriptografia = descriptografando(entrada.value);
    saida.value = descriptografia;
    entrada.value = "";
}
