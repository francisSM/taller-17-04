async function buscarPokemon() {
    const pokemonId = document.getElementById('pokemonId').value;

    try {
        const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const pokemon = respuesta.data;

        mostrarInformacion(pokemon);
    } catch (error) {
        console.error('Error error error:', error);
    }
}

function mostrarInformacion(pokemon) {
    const divInfoPokemon = document.getElementById('pokemonInfo');
    divInfoPokemon.innerHTML = `
        <h2>${pokemon.name}</h2>
        <p><strong>ID:</strong> ${pokemon.id}</p>
        <p><strong>Tipo(s):</strong> ${pokemon.types.map(type => type.type.name).join(', ')}</p>
        <p><strong>Altura:</strong> ${pokemon.height}</p>
        <p><strong>Peso:</strong> ${pokemon.weight}</p>
    `;
}
