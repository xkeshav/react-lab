import React, { useCallback, useEffect, useState } from 'react';

import './styles/counter.css';

export const Counter: React.FC = (props) => {
  console.log('%c Counter re-rendered', 'color: green');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState<null | boolean>(null);
  const maxIndex = 4;
  const duration = 1000; // in ms

  // perfect use of useCallback; it will preserve previous value of state during re-render and on click of auto start check box.
  // wrap method in `useCallBack` and also add in `useEffect` dependency array
  const doIncrease = useCallback(() => {
    const nextIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
    console.log({ nextIndex });
    setCurrentIndex(nextIndex);
  }, [currentIndex]);

  const doDecrease = () => {
    const prevIndex = currentIndex === 0 ? maxIndex : currentIndex - 1;
    console.log({ prevIndex });
    setCurrentIndex(prevIndex);
  };

  const doIncrease_ = () => {
    /**
     * below code will not work when user select auto start because on every re render currentIndex value will be reset to initialState == 0
     */

    // const nextIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
    // console.log({ nextIndex });
    // setCurrentIndex(nextIndex);

    /**
				* to make it functional and working, evaluate currentIndex within set method of useState is must like below
				  setCurrentIndex( (currentIndex) => currentIndex <maxIndex > currentIndex + 1 : 0);
			*/

    // alternative approach
    setCurrentIndex((currentIndex) => {
      const renewIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
      console.log({ renewIndex });
      return renewIndex;
    });
  };

  const autoStartCounter = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    const {
      currentTarget: { checked },
    } = e;
    setTimer(checked);
  };

  useEffect(() => {
    let interval: number;
    if (timer) {
      interval = setInterval(() => doIncrease(), duration) as any;
    }
    return () => clearInterval(interval);
  }, [doIncrease, timer]);

  return (
    <>
      <div className="counter--block">
        <span onClick={doDecrease}>
          <button className="button">-</button>
        </span>
        <span className="text">{currentIndex}</span>
        <span onClick={doIncrease}>
          <button className="button">+</button>
        </span>
      </div>
      <div className="action--block">
        <input
          type="checkbox"
          name="start"
          className="auto--start"
          id="start"
          onChange={(e) => autoStartCounter(e)}
        />
        <label htmlFor="start" className="label">
          Auto Start
        </label>
      </div>
    </>
  );
};
