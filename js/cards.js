export class CriadorCards {
    constructor() {
        this.cards_projetos = document.getElementById('cards_projetos');
        this.divs = [];
        this.criar_card = document.getElementById('criar_card');
        this.input_titulo = document.getElementById('input_titulo');
        this.input_descricao = document.getElementById('input_descricao');
        this.input_img = document.getElementById('input_img');

        this.addCard = this.addCard.bind(this);
        this.removerCard = this.removerCard.bind(this);
    }

    async criarCards() {
        const response = await fetch('http://127.0.0.1:3000/pegaCards');
        const data = await response.json();
        const projetos = data.projetos;

        this.cards_projetos.innerHTML = '';
        this.divs = [];
    
        for (let i = 0; i < projetos.length; i++) {
            var div = document.createElement('div');
    
            div.className = 'card';
            this.divs.push(div);
            this.cards_projetos.appendChild(div);
        }
    
        for (let i = 0; i < projetos.length; i++) {
            var div = document.createElement('div');
            var img = document.createElement('img');
            var h3 = document.createElement('h3');
            var p = document.createElement('p');
            var btn = document.createElement('button');
    
            btn.style.width = '5vw';
            btn.style.height = '2vw';
            btn.textContent = 'Remover';
            btn.addEventListener('click', () => {
                this.removerCard(projetos[i].id);
            });
    
            img.src = '../assets/img/'+projetos[i].img;
            img.style.width = '5vw';
    
            h3.textContent = projetos[i].titulo;
    
            p.textContent = projetos[i].descricao;
    
            div.appendChild(img);
            div.appendChild(h3);
            div.appendChild(p);
            div.appendChild(btn);
            this.divs[i].appendChild(div);
        }
    
        let divAdd = document.createElement('div');
        divAdd.className = 'card cardAdd';
        divAdd.addEventListener('click', () => {
            this.criar_card.style.display = 'flex';
        });
    
        let icon = document.createElement('i');
        icon.className = "fa-solid fa-plus iconeMais";
    
        divAdd.appendChild(icon);
        this.cards_projetos.appendChild(divAdd);
    }

    async addCard() {
        const nome = this.input_titulo.value;
        const descricao = this.input_descricao.value;
        const img = this.input_img.value;

        const response = await fetch('http://127.0.0.1:3000/addCard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, descricao, img })
        });
        const result = await response.json();

        if (response.status === 201) {
            console.log(result.message);
            this.criar_card.style.display = 'none';
            this.criarCards();
        } else {
            console.error(result.error);
        }
    }

    async removerCard(cardId) {
        const response = await fetch('http://127.0.0.1:3000/deleteCard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ cardId })
        });
        const result = await response.json();

        if (response.status === 200) {
            console.log(result.message);
            this.criarCards();
        } else {
            console.error(result.error);
        }
    }
}


























// let divs = [];
// let projetos =[
//     new Projeto('banana', 'um barco ati encontrar..', '../../assets/img/download.jpg'),
//     new Projeto('pacifico', 'solitário..', '../../assets/img/image.jpg'),
//     new Projeto('passarela', 'o caminho para o pós vida..', '../../assets/img/imagem.jpg'),
//     new Projeto('céu', 'onde poderíamos chegar..', '../../assets/img/imagen.jpg'),
//     new Projeto('floresta isolada', 'uma janela do mundo dos homens..', '../../assets/img/noite.avif'),
//     new Projeto('paraíso', 'descanso para almas perdidas..', '../../assets/img/images.jpg'),
// ];