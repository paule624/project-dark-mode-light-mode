

const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon?limit=20';
let randomPoke="";
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
        console.log("Mon Pokémon aléatoire est :", randomPoke);

    } catch (error) {
        console.error("Erreur :", error);
    }
}

initPokedex();


function getRandomPokemon(pokemons){
    if(pokemons){
        const randomIndex = Math.floor(Math.random() * pokemons.length);
        return pokemons[randomIndex];
    }else{
        return null;
    }
}


