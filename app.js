

const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon';
let randomPoke="";
let pokeDetails={};
async function initPokedex() {
    console.log("Chargement via PokeAPI...");

    try {
        // 1. Récupération de la liste des 20 premiers Pokémon
        const response = await fetch(POKEAPI_URL);

        if (!response.ok) throw new Error("Erreur réseau");

        const data = await response.json();

        // PokeAPI renvoie un objet { count: 1302, results: [...] }
        // Nous on veut juste le tableau "results"
        const pokemons = data.results;

        console.log(`Succès ! ${pokemons.length} Pokémon récupérés.`);

         randomPoke = getRandomPokemon(pokemons);
         if (randomPoke) {
             const detailResponse = await fetch(randomPoke.url);
             pokeDetails = await detailResponse.json();
         }
         console.log(pokeDetails);
        const bouton = document.querySelector('#btn-random');
        if (randomPoke) {
            bouton.textContent = randomPoke.name;
        } else {
            bouton.textContent = "Deso il est mort";
        }

    } catch (error) {
        console.error("Erreur :", error);
    }
}
// Remplace ton appel direct "initPokedex();" par ceci :
document.addEventListener('DOMContentLoaded', () => {
    initPokedex();
});


function getRandomPokemon(pokemons){
    if(pokemons){
        const randomIndex = Math.floor(Math.random() * pokemons.length);
        return pokemons[randomIndex];
    }else{
        return null;
    }
}


