const PokedexScreen = ({ pokemon }) => {
    return (
        <div className="pokedex-screen">
            <div className="pokemon-info">
                <h2 className="pokemon-name">{pokemon.name}</h2>
                <img
                    className="pokemon-img"
                    src={pokemon?.sprites?.front_default}
                    alt={pokemon.name}
                />
                <div className="">
                    <h6>Abilities</h6>
                    <ul className="pokemon-stats">
                        {pokemon?.abilities?.map((ability, index) => (<li key={index}>{ability.ability.name}</li>))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PokedexScreen;