
interface Pokemon {
    name: string;
    url: string;
}

interface Props {
    pokemons: Pokemon[];
}

const PokemonList = ({ pokemons }: Props) => {

    return (
        <ul>
            {pokemons.map((pokemon, index) => (
                <li key={index}>{pokemon.name}</li>
            ))}
        </ul>
    )
}

export default PokemonList