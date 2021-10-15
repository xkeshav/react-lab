import React, { useCallback, useEffect, useState } from 'react';
import { PokeMon } from '../models';
import { Card } from './Card';

type SearchListProps = { filteredList: PokeMon[] };

export const SearchList = (props: SearchListProps): JSX.Element => {
  const { filteredList } = props;
  const [sortField, setSortField] = useState('name');
  const [pokeMonList, setPokeMonList] = useState<PokeMon[]>([]);

  const sortPokemonList = useCallback(() => {
    const sortedList = [...filteredList].sort((a: PokeMon, b: PokeMon) => {
      if (sortField === 'name') {
        return a[sortField].localeCompare(b[sortField]);
      } else {
        return a[sortField] - b[sortField];
      }
    });
    setPokeMonList(sortedList);
  }, [filteredList, sortField]);

  useEffect(() => {
    sortPokemonList();
  }, [sortPokemonList]);

  const sortBy = (val: string) => {
    setSortField(val);
  };

  const applyClass = (name: string) => {
    return name === sortField ? 'sort--active' : undefined;
  };

  return (
    <>
      <div className="sort-block">
        Sort By:
        <span onClick={() => sortBy('name')} className={applyClass('name')}>
          Name
        </span>
        <span onClick={() => sortBy('height')} className={applyClass('height')}>
          Height
        </span>
        <span onClick={() => sortBy('weight')} className={applyClass('weight')}>
          Weight
        </span>
      </div>
      <main>
        {pokeMonList.map((pokemon: PokeMon, i: number) => (
          <Card key={i} item={pokemon} />
        ))}
      </main>
    </>
  );
};
