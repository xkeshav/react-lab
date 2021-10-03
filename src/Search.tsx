import React, { useCallback, useState } from 'react';

import { SearchList } from './SearchList';
import { SortList } from './SortList';

export const Search = ({ details }: any) => {
  const [searchField, setSearchField] = useState('');

  const filteredPokemonList = details.filter((pokemon: any) => {
    const { abilities } = pokemon;
    const abilityList = abilities.map(({ ability }: any) =>
      ability.name.toLowerCase()
    );

    return (
      pokemon.name.toLowerCase().includes(searchField) ||
      abilityList.includes(searchField)
    );
  });

  const handleChange = useCallback((e) => {
    setSearchField(e.target.value.toLowerCase());
  }, []);

  return (
    <section className="section">
      <div className="search--block">
        <input
          className="search"
          type="search"
          placeholder="Search Pokemon"
          onChange={handleChange}
        />
      </div>
      <SearchList filteredList={filteredPokemonList} />
    </section>
  );
};
