import React, { useCallback, useEffect, useState } from 'react';

import { SearchList } from './SearchList';

export const SortList = ({ list }: any) => {
  const [sortField, setSortField] = useState('name');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sortedPokemonList = useCallback(() => {
    return list.sort((a: any, b: any) => {
      console.log({ sortField });
      if (sortField === 'name') {
        return a[sortField].localeCompare(b[sortField]);
      } else {
        return parseFloat(a[sortField]) - parseFloat(b.sortField);
      }
    });
  }, [list, sortField]);

  useEffect(() => {
    sortedPokemonList();
  }, [sortField, sortedPokemonList]);

  const sortBy = (val: string) => {
    console.log({ val });
    setSortField(val);
  };

  return (
    <section className="section">
      <div className="sort-block">
        <div onClick={() => sortBy('name')}> Name </div>
      </div>
      <SearchList filteredList={sortedPokemonList} />
    </section>
  );
};
