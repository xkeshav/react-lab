import React, { useCallback, useEffect, useState } from 'react';
import { PokeMonItem } from './Card';

import { SearchList } from './SearchList';

export const Search = ({ details }: any) => {
  console.log('search called');
  const [searchField, setSearchField] = useState('');
  const [requiredList, setRequiredList] = useState<PokeMonItem[]>([]);

  useEffect(() => {
    // only send the required item not the complete object
    setRequiredList(
      details.map((d: any) => {
        const { name, weight, height, abilities } = d;
        const abilityList = abilities.map(({ ability }: any) => ability);
        return { name, weight, height, abilityList };
      })
    );
  }, [details]);

  const filteredPokemonList = requiredList.filter((pokemon: PokeMonItem) => {
    const { abilityList } = pokemon;
    const abilityNameList = abilityList.map((ability: any) =>
      ability.name.toLowerCase()
    );

    return (
      pokemon.name.toLowerCase().includes(searchField) ||
      abilityNameList.includes(searchField)
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
