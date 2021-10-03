import React, { useCallback, useEffect, useState } from 'react';

import { Card } from './Card';

export const SearchList = ({ filteredList }: any) => {
  //TODO: sorting 1 cycle behind

  const [sortField, setSortField] = useState('name');
  const [pokeList, setPokeList] = useState([...filteredList]);
  console.log({ filteredList, pokeList });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sortedPokemonList = useCallback(() => {
    console.log('sortedPokeList called');
    setPokeList(() =>
      filteredList.sort((a: any, b: any) => {
        if (sortField === 'name') {
          return a[sortField].localeCompare(b[sortField]);
        } else {
          return a[sortField] - b[sortField];
        }
      })
    );
  }, [filteredList, sortField]);

  useEffect(() => {
    console.log('useEffect called');
    sortedPokemonList();
  }, [sortedPokemonList]);

  const sortBy = (val: string) => {
    setSortField(val);
  };

  return (
    <>
      <div className="sort-block">
        Sort By:
        <span onClick={() => sortBy('name')}> Name </span>
        <span onClick={() => sortBy('height')}> Height </span>
        <span onClick={() => sortBy('weight')}> Weight </span>
      </div>
      <main>
        {pokeList.map((pokemon: any, i: number) => (
          <Card key={i} item={pokemon} />
        ))}
      </main>
    </>
  );
};
