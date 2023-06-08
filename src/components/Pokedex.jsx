import { useEffect, useState } from "react";
import PokedexScreen from "./PokedexScreen";
import axios from "axios";


const Pokedex = () => {

    const [pokemonData, setPokemonData] = useState({});
    const [seconds, setSeconds] = useState(30);

    useEffect(() => {
        if (seconds == 0) {
            fetchRandomPokemon();
        }
        if (seconds >= 0) {
            const interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);

            return () => clearInterval(interval);
        } else {
            setSeconds(30); 
        }

    }, [seconds])
    const fetchRandomPokemon = async () => {
        const aleatorio = Math.floor(Math.random() * (500 - 1 + 1) + 1)
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${aleatorio}`);
            setPokemonData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="pokedex-container d-flex justify-content-center align-items-center">
            <div className="pokedex">
                <div className="pokedex">
                    <div className="pokedex-left">
                        <div className="pokedex-left-top">
                            <div className='light is-sky is-big' />
                            <div className="light is-red" />
                            <div className="light is-yellow" />
                            <div className="light is-green" />
                        </div>
                        <div className="pokedex-screen-container">
                            <PokedexScreen
                                pokemon={pokemonData}
                            />
                        </div>
                        <div className="pokedex-left-bottom">
                            <div className="pokedex-left-bottom-lights">
                                <div className="light is-blue is-medium" />
                                <div className="light is-green is-large" />
                                <div className="light is-orange is-large" />
                            </div>
                        </div>
                        <div className="pokedex-button-container">
                        {<p className="text-light">Un pokémon aparecerá en: {seconds}</p>}
                            <button className="pokedex-button" onClick={fetchRandomPokemon}

                            >Mostrar Pokémon</button>
                        </div>
                    </div>
                    <div className="pokedex-right-front" />
                    <div className="pokedex-right-back" />
                </div>
            </div>
        </div>
    );
}

export default Pokedex;