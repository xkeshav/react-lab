import { Ability, PokeMon } from './model/pokemon';

import './styles/card.css';

type CardProps = { item: PokeMon };

export const Card = ({ item }: CardProps) => (
  <div className="card">
    <div className="card__head">
      <PokemonPicture name={item.name} />
    </div>
    <div className="card__body">
      <CardBodyItem label="name" value={item.name} />
      <CardBodyItem label="height" value={item.height} />
      <CardBodyItem label="weight" value={item.weight} />
      <AbilityMapper list={item.abilityList} />
    </div>
  </div>
);

const PokemonPicture = ({ name }: { name: string }) => (
  <>
    <img
      className="card__image"
      alt={name}
      src={`https://img.pokemondb.net/artwork/${name}.jpg`}
    />
  </>
);

const CardBodyItem = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => (
  <div className="card__body--item">
    <label>{label}</label>
    <span>{value}</span>
  </div>
);

const AbilityMapper = ({ list }: { list: Ability[] }) => (
  <div className="card__body--item">
    <label>Abilities:</label>
    <ul className="card__body--list">
      {list.map((a: Ability, i) => (
        <li key={`${a.name}_${i}`}>{a.name}</li>
      ))}
    </ul>
  </div>
);
