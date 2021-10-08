import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import './styles/pagination.css';
import './styles/pokemon.css';
import { Pagination } from './utils/Pagination';
import { Search } from './utils/Search';

export const PokemonDrawer: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<any>([]);
  const [error, setError] = useState<string | null>(null);
  //const [selectedOption, setSelectedOption] = useState(20);

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

  const fetchAdditionalDetail = useCallback(async () => {
    const data = await fetchList();
    const result: Promise<any>[] = data.results.map(async (result: any) => {
      return await fetch(result.url).then((r) => r.json());
    });
    try {
      const resultSet = await Promise.all(result);
      setPokemonList(resultSet);
    } catch (e) {
      setError('error while fetching');
    }
  }, [fetchList]);

  useEffect(() => {
    fetchAdditionalDetail();
  }, [dataLimit, offset, fetchAdditionalDetail]);

  if (error) return <h1>Error: {error}</h1>;

  const fetchFromServer = (pn: number) => {
    setOffset(() => (pn - 1) * dataLimit);
  };

  const onPageLimitChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setDataLimit(+e.target.value);
  };

  return (
    <>
      {pokemonList.length > 0 ? (
        <>
          <label>Per page pokemon</label>
          <select value={dataLimit} onChange={(e) => onPageLimitChange(e)}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
          <Pagination
            title="Pokemon Listing"
            data={pokemonList}
            RenderComponent={Search}
            pageLimit={5}
            dataLimit={dataLimit}
            fetchDataFromServer={(pn) => fetchFromServer(pn)}
          />
        </>
      ) : (
        <h1>No Pokemon to display</h1>
      )}
    </>
  );
};
