import { trocaBanner } from "./bangreen.js";
import { startAutoSwap } from "./bangreen.js";

import { startAutoSwapHabilits } from "./habilgreen.js";
import { criarHabilits } from "./habilgreen.js";

import { CriadorCards } from "./cardgreen.js";

window.trocaBanner = trocaBanner;

document.addEventListener("DOMContentLoaded", function() {
    criarHabilits();
    
    let criadorCards = new CriadorCards();
    criadorCards.criarCards();    
    window.addCard = criadorCards.addCard;
    
    trocaBanner(1);
    startAutoSwap(); // Inicia a troca automática

    startAutoSwapHabilits();
});