import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classes from './PokemonCard.module.css';
import { Link } from 'react-router-dom';


const PokemonCard = ({pokemon}) => {
    const [pokemonOne, setPokemonOne] = useState({})
    const getPokemon = async () => {
        try {
            const { data } = await axios.get(pokemon.url)
            return data
        } catch(e) {
            console.log('Error', e.message);
        }
    }

    useEffect(() => {
        getPokemon().then(pokemon=>setPokemonOne(pokemon))
    }, []);

    return (
        <li className={classes.info}>
            {pokemon.name}
            <img src={pokemonOne?.sprites?.other?.dream_world?.front_default} alt=""/>
            <Link to={`/pokemon/${pokemonOne.id}`}>Подробнее</Link>
        </li>
    );
};

export default PokemonCard;