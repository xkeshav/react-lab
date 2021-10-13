import { useCallback, useEffect, useState } from 'react';
import { PokeMon } from '../model/';
import { SearchList } from '../utils/SearchList';

export const Search = ({ data }: any) => {
  console.log({ data });
  const [searchField, setSearchField] = useState('');
  const [requiredList, setRequiredList] = useState<PokeMon[]>([]);

  useEffect(() => {
    // only send the required item not the complete object
    setRequiredList(
      data.map((d: any) => {
        const { name, weight, height, abilities } = d;
        const abilityList = abilities.map(({ ability }: any) => ability);
        return { name, weight, height, abilityList };
      })
    );
  }, [data]);

  const filteredPokemonList = requiredList.filter((pokemon: PokeMon) => {
    const { abilityList } = pokemon;
    const abilityNameList = abilityList.map((ability: any) => ability.name.toLowerCase());

    return pokemon.name.toLowerCase().includes(searchField) || abilityNameList.includes(searchField);
  });

  const handleChange = useCallback((e) => {
    setSearchField(e.target.value.toLowerCase());
  }, []);

  return (
    <section className="section">
      <SearchBox handleChange={handleChange} />
      <SearchList filteredList={filteredPokemonList} />
    </section>
  );
};

type SearchBoxProps = { handleChange: (e: any) => void };

const SearchBox = ({ handleChange }: SearchBoxProps) => (
  <>
    <div className="search--block">
      <input className="search" type="search" size={60} placeholder="Search Pokemon by name or abilities" onChange={handleChange} />
    </div>
  </>
);
