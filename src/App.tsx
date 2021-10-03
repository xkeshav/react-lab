import React from 'react';
import './App.css';
//import { Counter } from './Counter';
import { Pokemon } from './Pokemon';


import { Watch } from './utils/Watch';

function App({ name }: { name: string }) {
  return (
    <div className="App">
      <header className="App-header">
        <Watch>{{ name }}</Watch>
        <p> Hello {name}</p>
        <Pokemon></Pokemon>
      </header>
    </div>
  );
}

export default App;
