let divs = [];
let titulos = ['submundo', 'pacifico', 'passarela', 'céu', 'floresta isolada', 'paraíso'];
let textos = ['um barco ati encontrar', 'solitário', 'o caminho para o pós vida', 'onde poderíamos chegar', 'uma janela do mundo dos homens', 'descanso para almas perdidas'];
let imgs = ['download.jpg', 'image.jpg', 'imagem.jpg', 'imagen.jpg', 'noite.avif', 'images.jpg'];

const cards_projetos = document.getElementById('cards_projetos');
const input_titulo = document.getElementById('input_titulo');
const input_descricao = document.getElementById('input_descricao');
const input_img = document.getElementById('input_img');
const criar_card = document.getElementById('criar_card');

function createCard(){
    divs = [];
    cards_projetos.innerHTML = '';

    for(let i = 0; i <titulos.length ; i++){
        let div = document.createElement('div');
        div.className = 'card';
        divs.push(div);
        cards_projetos.appendChild(div);
    }

    for(let i = 0; i <titulos.length ; i++){
        let img = document.createElement('img');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let btn = document.createElement('button');

        img.src = "/assets/img/"+ imgs[i] ;
        img.style.width = '15vw';

        h3.textContent = titulos[i];

        p.textContent = textos[i];
         
        btn.addEventListener('click', function(){
            deleteCard(i);
        })


        divs[i].appendChild(img);
        divs[i].appendChild(h3);
        divs[i].appendChild(p);
        divs[i].appendChild(btn);
    }

    let divAdd = document.createElement('div');
    divAdd.className = 'card cardAdd';
    divAdd.addEventListener('click', function() {
        criar_card.style.display = 'flex'
    });
    cards_projetos.appendChild(divAdd);
    
}

function addCard(){
    titulos.push(input_titulo.value);
    textos.push(input_descricao.value);
    imgs.push(input_img.value);
    createCard();
}

function deleteCard(index){
    titulos.splice(index, 1);
    textos.splice(index, 1);
    imgs.splice(index, 1);
    createCard();
}

function salvarCard(){
    criar_card.style.display = 'none';
    addCard();
}

let bannerAtual = 1;
const totalBanners = 5;


function trocaBanner(numero){
    let banner = document.getElementById("banner");
    banner.style.left = '-' + (numero-1)+'00vw'; 

for (let i = 1; i <= totalBanners; i++){
    document.getElementyByld("btn" + i).style.width = '1.2vw';
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

document.addEventListener("DOMContentLoaded", ()=> {
    createCard();
    trocaBanner(bannerAtual); // Inicializa o banner
    startAutoSwap(); // Inicia a troca automática
});
