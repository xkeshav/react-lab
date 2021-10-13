import React, { useCallback, useEffect, useState } from 'react';
import { Card } from '../Card';
import { PokeMon } from '../model';

type SearchListProps = { filteredList: PokeMon[] };

export const SearchList = (props: SearchListProps) => {
  const { filteredList } = props;
  const [sortField, setSortField] = useState('name');
  const [pokeList, setPokeList] = useState<PokeMon[]>([]);

  const sortPokemonList = useCallback(() => {
    const sortedList = [...filteredList].sort((a: any, b: any) => {
      if (sortField === 'name') {
        return a[sortField].localeCompare(b[sortField]);
      } else {
        return a[sortField] - b[sortField];
      }
    });
    setPokeList(sortedList);
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
        {pokeList.map((pokemon: any, i: number) => (
          <Card key={i} item={pokemon} />
        ))}
      </main>
    </>
  );
};
