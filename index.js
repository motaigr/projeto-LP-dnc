var setaDireita = document.getElementById("setaDireita"); 
var Leo = document.getElementById("Leo");
var Bruna = document.getElementById("Bruna");
var Samantha = document.getElementById("Samantha");
var setaEsquerda = document.getElementById("setaEsquerda");

function RolarParaDireita() {
    Leo.style.display = "none"; 
    Bruna.style.display = "flex";
    setaEsquerda.style.display = "flex";
    setaEsquerda.style.marginTop = "55px";
    setaDireita.style.display = "none";
}

function RolarParaEsquerda() {
    Leo.style.display = "flex"; 
    Bruna.style.display = "none";
    setaEsquerda.style.display = "none";
    setaEsquerda.style.marginTop = "55px";
    setaDireita.style.display = "flex";
}