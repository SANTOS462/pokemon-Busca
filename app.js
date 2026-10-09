const input = document.getElementById("pokemonInput");
const botao = document.getElementById("buscarBtn");
const resultado = document.getElementById("resultado");

async function buscarPokemon() {

    const nome = input.value.toLowerCase().trim();

    if (nome === "") {
        resultado.innerHTML = "<p>Digite o nome de um Pokemon!</p>";
        return;
    }

    try {
        const resposta = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${nome}`
        );

        if (!resposta.ok) {
            throw new Error("Pokémon não encontrado");
        }

        const pokemon = await resposta.json();

        resultado.innerHTML = `
            <h2>${pokemon.name.toLowerCase()}</h2>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
           <div class="info-grupo">
           <p><strong>Número:</strong> ${pokemon.id}</p>
           <p><strong>Peso:</strong> ${pokemon.weight}</p>
           </div>
           <p>Altura: ${pokemon.height}</p>
            

        `;

    } catch (erro) {
        resultado.innerHTML = "<p>Pokémon não encontrado!</p>";
        console.error(erro);
    }
}

// Ligar o botão à função de busca
botao.addEventListener("click", buscarPokemon);