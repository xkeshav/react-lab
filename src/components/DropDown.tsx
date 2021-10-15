import { useState } from 'react';
import { SelectChangeEvent } from '../models';

export const DropDown = ({ handleChange }: { handleChange: any }) => {
  const [selectedOption, setSelectedOption] = useState<number | undefined>(undefined);

  const onChange = (e: SelectChangeEvent) => {
    setSelectedOption(+e.target.value);
    handleChange(e);
  };

  return (
    <>
      <div className="option--list">
        <label>Per page pokemon</label>
        <select value={selectedOption} onChange={(e) => onChange(e)}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    </>
  );
};
