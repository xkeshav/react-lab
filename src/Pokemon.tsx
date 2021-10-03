import React, { useCallback, useEffect, useState } from 'react';

import { Search } from './Search';

import './styles/pokemon.css';

export const Pokemon: React.FC = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchList = useCallback(async (limit: number, offset: number) => {
    const list = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    return list.json();
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    const l = fetchList(20, 0);
    l.then(async ({ results }) => {
      const op = results.map(async (r: any) => {
        const rr = await fetch(r.url);
        return rr.json();
      });
      const result: any = await Promise.all(op);
      setPokemonList(result);
    });
  }, [fetchList]);

  return (
    <>
      <h1>Pokemon Listing</h1>
      <Search details={pokemonList} />
    </>
  );
};
