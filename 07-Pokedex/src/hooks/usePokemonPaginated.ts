import { useCallback, useEffect, useRef, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import {
  Pokemon,
  PokemonPaginatedResponse,
  Result,
} from '../interfaces/pokemonInterfaces';

export const usePokemonPaginated = () => {
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadPokemons = useCallback(async () => {
    setIsLoading(true);
    const res = await pokemonApi.get<PokemonPaginatedResponse>(
      nextPageUrl.current,
    );
    setPokemons(currentPokemons => [
      ...currentPokemons,
      ...mapPokemonList(res.data.results),
    ]);
    nextPageUrl.current = res.data.next;
    setIsLoading(false);
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
    isLoading,
    loadPokemons,
  };
};
