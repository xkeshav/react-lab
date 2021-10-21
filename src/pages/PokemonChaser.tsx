import React, { useCallback, useEffect, useState } from 'react';
import { DropDown, Pagination, Search } from '../components';
import { SelectChangeEvent } from '../models';
import '../styles/pagination.css';
import '../styles/pokemon.css';



export const PokemonChaser: React.FC = () => {
  console.log('PokemonChaser');
  const [pokemonList, setPokemonList] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [dataLimit, setDataLimit] = useState(20);
  const [offset, setOffset] = useState(0);

  const fetchList = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${dataLimit}&offset=${offset}`
    );
    if (response.ok) {
      return response.json();
    }
    throw new Error('something went wrong while fetching pokemon list');
  };

  // fetch ability list of individual pokemon

  const fetchDetail = useCallback(async () => {
    try {
    const {results} = await fetchList();
    const result: Promise<any>[] = results.map(async (result: any) => {
      return await fetch(result.url).then((r) => r.json());
    });
    try {
      const resultSet = await Promise.all(result);
      //console.log({resultSet});
      setPokemonList(resultSet as any);
    } catch (e) {
      setError((e as Error).message);
    } 
  }
  catch (e) {
    console.log({e});
    setError((e as Error).message);
  }
  }, []);

  useEffect(() => {
    fetchDetail();
  }, [fetchDetail]);

  if (error) return <h1>Error: {error}</h1>;

  const fetchFromServer = (pn: number) => {
    setOffset(() => (pn - 1) * dataLimit);
  };

  const onPageLimitChange = (e: SelectChangeEvent) => {
    setDataLimit(+e.target.value);
  };

  return (
    <>
      {pokemonList.length > 0 ? (
        <>
          <DropDown handleChange={(e: SelectChangeEvent) => onPageLimitChange(e)} />
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
