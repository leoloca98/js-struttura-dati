/**

Proviamo a ripetere quanto visto in classe,
creando la struttura che riteniamo più adeguataper
rappresentare una carta di Magic.
Una volta definita la struttura,
stampiamo sulla pagina HTML tutte le informazioni
relative alla carta stessa, senza particolare
attenzione a dettagli grafici (va bene una lista coi tag UL e LI)

** Carta di ORSO GRIZZLY

 */

//*FORM
cardTemplate = document.getElementById("card-template");


//*CREAZIONE DELLA CARTA
const card = {
    id: 1,
    nameCard: "Grizzly Bears",
    launchCost: ["1", "G"],
    convertedManaCost: 2,
    cardType: "Creature",
    optionalType: "Bear",
    flavorText: {
        text: "Non possiamo dimenticare...",
        author: "Jolrael",
    },
    expansion: {
        nameExpansion: "Tenth Edition",
        rarity: "Commmon",
        cardNbr: 268
    },
    abilities: [],
    strenghtCard: 2,
    costitutionCard: 2,
    artist: "D. J. Cleland-Hura"
};

//*CONTROLLI PER IL TEMPLATE
let subType = card.optionalType ? ` -  ${card.optionalType}` : "";
let abilitiesMessage = `<i>Nessuna abilità</i>`;
if (card.abilities.length) {
    abilitiesMessage = `<ul>`;
    for (let i = 0; i < card.abilities.length; i++) {
        let currentAbility = card.abilities[i];
        abilitiesMessage += `<li>Description: ${currentAbility.description}</li>`
        abilitiesMessage += `<li>Costo di lancio: ${currentAbility.launchCost}</li>`
    }
    abilitiesMessage += `</ul>`;
}

//*CREAZIONE DEL TEMPLATE
let cardDisplay = `
<ul class="card-type">
    <li>Id: ${card.id}</li>
    <li>Name: ${card.nameCard}</li>
    <li>Launch Cost: ${card.launchCost}</li>
    <li>Converted Mana Cost: ${card.convertedManaCost}</li>
    <li>Card type: ${card.cardType} ${subType}</li>
    <li>Expansion: 
        <ul>
            <li> Name Expansion: ${card.nameExpansion}</li>
            <li> Rarity: ${card.rarity}</li>
            <li> Card Number: ${card.cardNbr}</li>
        </ul>
    </li>
    <li>Flavor Text:
        <ul>
            <li>Text: ${card.text}</li>
            <li>Author: ${card.author}</li>
        </ul>
    </li>
    <li>Abilities: ${abilitiesMessage}</li>    
    <li>Strength: ${card.strenghtCard}</li>    
    <li>Costitution: ${card.costitutionCard}</li>
    <li>Artist: ${card.artist}</li>    
</ul>`;

//*STAMPARE IN PAGINA
cardTemplate.innerHTML = cardDisplay;