let divs = [];
let titulos = ['submundo', 'pacifico', 'passarela', 'céu', 'floresta isolada', 'paraíso'];
let textos = ['um barco ati encontrar', 'solitário', 'o caminho para o pós vida', 'onde poderíamos chegar', 'uma janela do mundo dos homens', 'descanso para almas perdidas'];
let imgs = ['download.jpg', 'image.jpg', 'imagem.jpg', 'imagen.jpg', 'noite.avif', 'images.jpg'];

var cards_projetos = document.getElementById('cards_projetos');

for(var i = 0; i <titulos.length ; i++){
    var div = document.createElement('div');

    div.className = 'card';
    divs.push(div);
    cards_projetos.appendChild(div);
}

for(var i = 0; i <titulos.length ; i++){
    var img = document.createElement('img');
    var h3 = document.createElement('h3');
    var p = document.createElement('p');

    img.src = "/assets/img/"+ imgs[i] ;
    img.style.width = '15vw';

    h3.textContent = titulos[i];

    p.textContent = textos[i]; 

    divs[i].appendChild(img);
    divs[i].appendChild(h3);
    divs[i].appendChild(p);
}


let bannerAtual = 1;
const totalBanners = 5;
let intervaloTroca;


function trocaBanner(numero){
    let banner = document.getElementById("banner");
    banner.style.left = '-' + (numero-1)+'00vw'; 

for (let i = 1; i <= totalBanners; i++){
    document.getElementyByld("btn" + numero).style.width = '1.2vw';
    document.getElementById("btn" + i).style.height = '1.2vw';
    }

    document.getElementById("btn" + numero).style.width = '1.7vw';
    document.getElementById("btn" + numero).style.height = '1.7vw';
    bannerAtual = numero;
}

function autoTrocaBanner() {
    bannerAtual = (bannerAtual >= totalBanners) ? 1 : bannerAtual + 1;
    trocaBanner(bannerAtual);
}

function startAutoSwap() {
    intervaloTroca = setInterval(autoTrocaBanner, 3000); // Troca a cada 3 segundos
}

function manualTrocaBanner(numero) {
    clearInterval(intervaloTroca);
    trocaBanner(numero);
    setTimeout(startAutoSwap, 5000); // Reinicia o auto swap após 5 segundos
}

document.addEventListener("DOMContentLoaded", function() {
    trocaBanner(bannerAtual); // Inicializa o banner
    startAutoSwap(); // Inicia a troca automática
});
