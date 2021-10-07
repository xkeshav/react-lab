import React, { useCallback, useEffect, useState } from 'react';

import { Card, PokeMonItem } from './Card';

type SearchListProps = { filteredList: PokeMonItem[] };

export const SearchList = (props: SearchListProps) => {
  console.log('searchList called', { props });
  const { filteredList } = props;

  //TODO: sorting 1 cycle behind

  const [sortField, setSortField] = useState('name');
  const [pokeList, setPokeList] = useState<PokeMonItem[]>([]);

  const sortPokemonList = useCallback(() => {
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
    sortPokemonList();
  }, [sortPokemonList]);

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
