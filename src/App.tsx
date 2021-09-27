import React from 'react';
import './App.css';
import { Counter } from './Counter';

import { Watch } from './utils/Watch';

function App({ name }: { name: string }) {
  return (
    <div className="App">
      <header className="App-header">
        <Watch>{{ name }}</Watch>
        <p> Hello {name} There </p>
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
