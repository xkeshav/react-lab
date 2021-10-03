import React, { useState, useEffect } from 'react';

import './styles/card.css';

export const Card = ({ item }: any) => (
  <div className="card">
    <div className="card__head">
      <img
        className="card__image"
        alt={item.name}
        src={`https://img.pokemondb.net/artwork/${item.name}.jpg`}
      />
    </div>
    <div className="card__body">
      <CardBodyItem label="name" value={item.name} />
      <CardBodyItem label="height" value={item.height} />
      <CardBodyItem label="weight" value={item.weight} />
      <AbilityMapper list={item.abilities} />
    </div>
  </div>
);

const CardBodyItem = ({ label, value }: { label: string; value: any }) => {
  return (
    <div className="card__body--item">
      <label>{label}</label>
      <span>{value}</span>
    </div>
  );
};

const AbilityMapper = ({ list }: { list: any }) => {
  const [abilityList, setAbilityList] = useState([]);

  useEffect(() => {
    setAbilityList(
      list.map(({ ability }: { ability: any }) => ({
        name: ability?.name,
        slot: ability?.slot,
      }))
    );
  }, [list]);

  return (
    <div className="card__body--item">
      <label>Abilities:</label>
      <ul>
        {abilityList.map((a: any, i: number) => (
          <li key={`${a.name}_${a.slot}`}>{a.name}</li>
        ))}
      </ul>
    </div>
  );
};
