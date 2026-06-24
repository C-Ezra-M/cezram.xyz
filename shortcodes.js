import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();

export async function pokemonRow(pkmn) {
    const apiPkmnSpecies = await P.getPokemonSpeciesByName(pkmn.number)
    const enName = apiPkmnSpecies.names.find(e => e.language.name === "en").name;
    const nameCell = `#${pkmn.number} ${
        !pkmn.name || pkmn.name === enName ? `${pkmn.name} (${enName})` : enName
    }`;
    const img = (await P.getResource(apiPkmnSpecies.varieties.find(e => e.is_default).pokemon.url)).sprites.front_default
    return `<tr><th>${nameCell}</th><td><img src="${img}" alt="${enName}"></td><td>${pkmn.etymology}</td><td>${pkmn.notes}</td></tr>`
}

export async function pokemonIcon(pkmn) {
    const apiPkmn = await P.getPokemonByName(pkmn)
    const enName = (await P.getResource(apiPkmn.species.url)).names.find(e => e.language.name === "en").name;
    const img = apiPkmn.sprites.other['official-artwork'].front_default
    return `<img width="80" height="80" src="${img}" alt="${enName}">`
}

export function youtube(id) {
    return `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<p><small><strong>⚠️ Warning:</strong> Once you click on the above embed, Google may collect information about your browser. You may want to watch this video on <a href="https://inv.nadeko.net/watch?v=${id}">inv.nadeko.net</a> to protect your privacy.</small></p>`
}