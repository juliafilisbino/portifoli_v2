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
        const response = await fetch('http://backend-portif-lio.vercel.app/pegaCardsVerde');
        const data = await response.json();
        const projetos = data.projetos;

        this.cards_projetos.innerHTML = '';
        this.divs = [];

        for (let i = 0; i < projetos.length; i++) {
            let div = document.createElement('div');

            div.className = 'card-container';
            this.divs.push(div);
            this.cards_projetos.appendChild(div);
        }

        for (let i = 0; i < projetos.length; i++) {
            let cardContent = document.createElement('div');
            cardContent.className = 'card-content';

            let cardTitle = document.createElement('div');
            cardTitle.className = 'card-title';

            let titleSpan = document.createElement('span');
            titleSpan.className = 'title';
            titleSpan.textContent = projetos[i].titulo;
            cardTitle.appendChild(titleSpan);

            let cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            let img = document.createElement('img');
            img.src = `../assets/img/${projetos[i].img}`;
            cardBody.appendChild(img);

            let cardDescricao = document.createElement('div');

            let descricaoSpan = document.createElement('span');
            descricaoSpan.className = 'title';
            descricaoSpan.textContent = projetos[i].descricao;
            descricaoSpan.style.width ='70%';
            cardDescricao.appendChild(descricaoSpan);

            let btn = document.createElement('button');
            btn.className = 'btn_del';
            btn.textContent = 'DELETAR';
            btn.style.fontSize = '0.5vw';
            btn.style.zIndex = '5';
            btn.addEventListener('click', () => {
                this.removerCard(projetos[i].id);
            });


            // Monta a estrutura final
            cardContent.appendChild(btn);
            cardContent.appendChild(cardTitle);
            cardContent.appendChild(cardBody);
            cardContent.appendChild(cardDescricao);
            this.divs[i].appendChild(cardContent);
        }

        let divAdd = document.createElement('div');
        divAdd.className = 'card-container cardAdd';
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

        const response = await fetch('http://backend-portif-lio.vercel.app/addCardVerde', {
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
        const response = await fetch('http://backend-portif-lio.vercel.app/deleteCardVerde', {
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