const totalBanners = 5;
let bannerAtual = 1;
let intervaloTrocaBanner;

let banner = document.getElementById("banner");

export function trocaBanner(numero) {    
    banner.style.left = "-" + (numero - 1) + "00vw";

    for (let i = 1; i <= totalBanners; i++) {
        document.getElementById("btn" + i).style.width = '1.2vw';
        document.getElementById("btn" + i).style.height = '1.2vw';
    }   
    document.getElementById("btn" + numero).style.width = '1.7vw';  
    document.getElementById("btn" + numero).style.height = '1.7vw';
}

export function startAutoSwap() {
    intervaloTrocaBanner = setInterval(autoTrocaBanner, 3000); // Troca a cada 3 segundos
}

function autoTrocaBanner() {
    bannerAtual = (bannerAtual >= totalBanners) ? 1 : bannerAtual + 1;
    trocaBanner(bannerAtual);
}