/**

Proviamo a ripetere quanto visto in classe,
creando la struttura che riteniamo più adeguataper
rappresentare una carta di Magic.
Una volta definita la struttura,
stampiamo sulla pagina HTML tutte le informazioni
relative alla carta stessa, senza particolare
attenzione a dettagli grafici (va bene una lista coi tag UL e LI)

 */

cardTemplate = document.getElementById("card-template");

const card = {
    id=1,
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
    collectionNbr: "268/301",
    strenghtCard: 2,
    costitutionCard: 2,
    artist: "D. J. Cleland-Hura",

}