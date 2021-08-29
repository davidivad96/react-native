import { useCallback, useEffect, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import {
  Pokemon,
  PokemonPaginatedResponse,
  Result,
} from '../interfaces/pokemonInterfaces';

export const usePokemonSearch = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  const loadPokemons = useCallback(async () => {
    const res = await pokemonApi.get<PokemonPaginatedResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=1200',
    );
    setPokemons(mapPokemonList(res.data.results));
    setIsFetching(false);
  }, []);

  const mapPokemonList = (pokemonList: Result[]): Pokemon[] =>
    pokemonList.map(({ name, url }) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      return { id, picture, name };
    });

  useEffect(() => {
    loadPokemons();
  }, [loadPokemons]);

  return {
    pokemons,
    isFetching,
  };
};
