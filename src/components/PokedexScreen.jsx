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
                    <ul className="pokemon-stats">
                        {pokemon?.stats?.map(item => (
                            <li key={item?.stat?.name}>{item?.stat?.name}: {item?.base_stat}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PokedexScreen;