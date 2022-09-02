/*"e" convertida en "enter"
"i" convertida en "imes"
"a" converitda en "ai"
"o" convertida en "ober"
"u" converitda en "ufat"*/

const entrada = document.querySelector(".entrada");
const salida = document.querySelector(".salida");

function btcr(){
    const textoEncriptado = cr(entrada.value);
    salida.value = textoEncriptado;
    salida.style.backgroundImage = "none";
    entrada.value="";
}

function cr(strEnc){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],["u", "ufat"]];
    strEnc = strEnc.toLowerCase();

    for(let i = 0; i < matriz.length; i++){
        if(strEnc.includes(matriz[i][0])){
            strEnc = strEnc.replaceAll
            (matriz[i][0], matriz[i][1]);
        }
    }
    return strEnc;
}
function btdec(){
        const textoDesencriptado = decr(entrada.value);
        salida.value = textoDesencriptado;
        salida.style.backgroundImage = "none";
        entrada.value="";
    }
function decr(strDc){
        let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],["u", "ufat"]];
        strDc = strDc.toLowerCase();
    
        for(let i = 0; i < matriz.length; i++){
            if(strDc.includes(matriz[i][0])){
                strDc = strDc.replaceAll
                (matriz[i][1], matriz[i][0]);
            }
        }
        return strDc;
    }
    function copiar(){
        salida.select()
        navigator.clipboard.writeText(salida.value)
        salida.value=""
        alert("texto copiado")
    }