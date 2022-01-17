import { useEffect, useState } from 'react';

type SortListProps = { sortBy: (b: string)=> void };

export const SortList = (props: SortListProps): JSX.Element => {
  const [sortField, setSortField] = useState('name');

  useEffect(() => {
    props.sortBy(sortField);
  }, [sortField]);

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
    </>
  );
};
