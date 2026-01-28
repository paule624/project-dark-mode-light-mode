

const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon';
let randomPoke="";
const pokemons = [];
async function initPokedex() {
    console.log("Chargement via PokeAPI...");

    try {
        if (pokemons.length === 0) {
            // 1. Récupération de la liste des 20 premiers Pokémon si non chargés
            const response = await fetch(POKEAPI_URL);
    
            if (!response.ok) throw new Error("Erreur réseau");
    
            const data = await response.json();
            // PokeAPI renvoie un objet { count: 1302, results: [...] }
            // Nous on veut juste le tableau "results"
            pokemons.push(...data.results);
        }


        console.log(`Succès ! ${pokemons.length} Pokémon récupérés.`);

         randomPoke = getRandomPokemon(pokemons);
         if (randomPoke) {
             const detailResponse = await fetch(randomPoke.url);
             pokeDetails = await detailResponse.json();
         }
         const pokenomName = document.querySelector('.card-title');
         const pokenomImage = document.querySelector('.card-image');
         if (randomPoke && pokeDetails) {
            pokenomImage.src = pokeDetails.sprites.front_default;
         } else {
            pokenomImage.src = "";
         }  
        if (randomPoke) {
            pokenomName.textContent = randomPoke.name;
        } else {
            pokenomName.textContent = "Déso il est mort";
        }

    } catch (error) {
        console.error("Erreur :", error);
    }
}
// Remplace ton appel direct "initPokedex();" par ceci :
document.querySelector('.fetch-random-pokemon-btn').addEventListener('click', () => {
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


