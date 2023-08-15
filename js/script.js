const ingresoTexto = document.getElementById("ingresoTexto");

const botonEncriptar = document.getElementById("botonEncriptar");

const botonDesencriptar = document.getElementById("botonDesencriptar");

const botonCopiar = document.getElementById("botonCopiar");

const mensajeFinal = document.getElementById("mensajeFinal");

const muneco = document.getElementById("muneco");

const rightInfo = document.getElementById("rightInfo");

const right = document.getElementById("right");


//e - enter
//o - ober
//i - imes
//a - ai
//u - ufat


let reemplazar =[
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "u"],
]



const reemplace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;
    muneco.classList.add("oculto");
    ingresoTexto.value = "";
    rightInfo.style.display = "none"
    botonCopiar.style.display = "block"

}

botonEncriptar.addEventListener("click", () => {

    const texto = ingresoTexto.value.toLowerCase()
    function encriptar(newText){
        for(let i = 0; i < reemplazar.length; i++ ){
            if(newText.includes(reemplazar[i][0])){
                newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1]);
            };
        };
        return newText
    }
    
    reemplace(encriptar(texto));


    
});

botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase()
    function desencriptar(newText){
        for(let i = 0; i < reemplazar.length; i++ ){
            if(newText.includes(reemplazar[i][1])){
                newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0]);
            };
        };
        return newText
    }
    
    reemplace(desencriptar(texto));

});


botonCopiar.addEventListener("click", () =>{
    let texto = mensajeFinal;
    navigator.clipboard.writeText(texto.value);

    mensajeFinal.innerHTML = "";

    muneco.classList.remove("oculto");

    rightInfo.style.display = "block";
    botonCopiar.style.display = "none";
    right.classList.remove("ajustar");

    ingresoTexto.focus();
   
   
})

