let search_input = document.getElementById("busqueda-input")
let container = document.getElementById("card")

async function search() {
  console.log(search_input.value)
  let result = await search_pokemon(search_input.value)
  let pokemon = result.data
  console.log(pokemon)

}

async function search_pokemon(pokemon_name) {
  var config = {
    method: 'get',
    url: `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`
  };

  return await axios(config)
}


async function search() {
    console.log(search_input.value)
    try {
      let result = await search_pokemon(search_input.value.toLowerCase())
      let pokemon = result.data
      console.log(pokemon)
      // Aquí puedes agregar código para mostrar la información del Pokemon en la página
      
    // Actualizar la información del Pokemon en el HTML
    container.querySelector('h2').textContent = pokemon.name
    container.querySelector('img').src = pokemon.sprites.front_default
    container.querySelector('ul:nth-of-type(1) li:nth-of-type(1)').textContent = `Tipo: ${pokemon.types[0].type.name}`
    container.querySelector('ul:nth-of-type(1) li:nth-of-type(2)').textContent = `Altura: ${pokemon.height}`
    container.querySelector('ul:nth-of-type(1) li:nth-of-type(3)').textContent = `Peso: ${pokemon.weight}`
    container.querySelector('ul:nth-of-type(2) li:nth-of-type(1)').textContent = `Ataque: ${pokemon.stats[1].base_stat}`
    container.querySelector('ul:nth-of-type(2) li:nth-of-type(2)').textContent = `Defensa: ${pokemon.stats[2].base_stat}`
    container.querySelector('ul:nth-of-type(2) li:nth-of-type(3)').textContent = `Velocidad: ${pokemon.stats[5].base_stat}`
    container.querySelector('ul:nth-of-type(3) li:nth-of-type(1)').textContent = `${pokemon.moves[0].move.name}`
    container.querySelector('ul:nth-of-type(3) li:nth-of-type(2)').textContent = `${pokemon.moves[1].move.name}`
    container.querySelector('ul:nth-of-type(3) li:nth-of-type(3)').textContent = `${pokemon.moves[2].move.name}`
    
    } catch (error) {
      console.log(error)
      alert('No se encontró información para' + pokemonNombre ,'Por favor, inténtalo de nuevo.')
    }
  }