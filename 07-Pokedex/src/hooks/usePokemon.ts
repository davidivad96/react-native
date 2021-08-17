import { useCallback, useEffect, useState } from 'react';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { pokemonApi } from '../api/pokemonApi';

export const usePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState<PokemonFull>({} as PokemonFull);

  const loadPokemon = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await pokemonApi.get<PokemonFull>(
        `https://pokeapi.co/api/v2/pokemon/${id}`,
      );
      setPokemon(res.data);
    } catch (error) {
      console.log("Couldn't load full pokemon: ", error);
    }
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    loadPokemon();
  }, [loadPokemon]);

  return {
    isLoading,
    pokemon,
  };
};
