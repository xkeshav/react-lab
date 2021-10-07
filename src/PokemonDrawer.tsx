import React, { useCallback, useEffect, useState } from 'react';

import { Search } from './utils/Search';
import './styles/pokemon.css';
import './styles/pagination.css';
import { Pagination } from './utils/Pagination';

export const PokemonDrawer: React.FC = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [error, setError] = useState('');

  const [dataLimit, setDataLimit] = useState(20); // TODO: set data limit by UI

  const [offset, setOffset] = useState(0);

  const fetchList = useCallback(async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${dataLimit}&offset=${offset}`
    );
    if (response.ok) {
      return response.json();
    }
    throw new Error('something went wrong while fetching pokemon list');
  }, [dataLimit, offset]);

  const fetchMoreDetail = useCallback(() => {
    fetchList()
      .then(async ({ results }) => {
        const op = results.map(async (result: any) => {
          return await fetch(result.url).then((r) => r.json());
        });
        const result: any = await Promise.all(op);
        setPokemonList(result);
      })
      .catch((error) => setError(error.message));
  }, [fetchList]);

  useEffect(() => {
    fetchMoreDetail();
  }, [fetchList, dataLimit, offset, fetchMoreDetail]);

  if (error) return <h1>Error: {error}</h1>;

  return (
    <>
      <h1>Pokemon Listing</h1>
      {pokemonList.length > 0 ? (
        <>
          <Pagination
            title="Pokemon Listing"
            data={pokemonList}
            RenderComponent={Search}
            pageLimit={5}
            dataLimit={dataLimit}
            fetchDataFromServer={(off: number) => setOffset(off)}
          />
        </>
      ) : (
        <h1>No Pokemon to display</h1>
      )}
    </>
  );
};
