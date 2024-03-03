import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import classes from "./PokemonInfoPage.module.css";


const PokemonInfoPage = () => {
    const { id } = useParams();

    const [ pokemon, setPokemon ] = useState({});
    console.log(pokemon);
    const [ loading, setLoading ] = useState(false);

    const getPokemonById = async() => {
        setLoading(true);
        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            return data;
        } catch(e) {
            console.log('Error', e.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getPokemonById().then(pokemon=>setPokemon(pokemon))
        }, [ id ]
    );

    // const array = [1,2,3,4,5,6,7,8,9,10]
    // console.log(array.slice(4,5));

    return (
        <div>
            {
                loading
                    ?
                    <p>Загрузка</p>
                    :
                    <>
                        <div className={classes.photo}>
                            <img  src={pokemon?.sprites?.other?.dream_world?.front_default} alt="pokemon"/>
                        </div>
                        <div className={classes.item}>
                            <p className={classes.info}><span>Name:</span> {pokemon?.name}</p>
                            <p><span>Abilities:</span> {pokemon?.abilities?.map(value=> value.ability.name).join(', ')}</p>
                            <p><span>Stats:</span> {pokemon?.stats?.map(value=> value.stat.name).join(', ')}</p>
                            <p><span>Types:</span> {pokemon?.types?.map(value=> value.type.name).join(', ')}</p>
                            <p><span>Some-moves:</span> {pokemon?.moves?.slice(0,5).map(value=> value.move.name).join(', ')}</p>
                        </div>
                    </>
            }
        </div>
    );
};

export default PokemonInfoPage;