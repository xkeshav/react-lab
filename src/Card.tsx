import React from 'react';

import './styles/card.css';

export type AbilityItem = { name: string; url: string };

export type PokeMonItem = {
  name: string;
  weight: number;
  height: number;
  abilityList: AbilityItem[];
};

type CardProps = { item: PokeMonItem };

export const Card = ({ item }: CardProps) => {
  return (
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
        <AbilityMapper list={item.abilityList} />
      </div>
    </div>
  );
};

const CardBodyItem = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => {
  return (
    <div className="card__body--item">
      <label>{label}</label>
      <span>{value}</span>
    </div>
  );
};

const AbilityMapper = ({ list }: { list: AbilityItem[] }) => {
  return (
    <div className="card__body--item">
      <label>Abilities:</label>
      <ul>
        {list.map((a: AbilityItem, i: number) => (
          <li key={`${a.name}`}>{a.name}</li>
        ))}
      </ul>
    </div>
  );
};
