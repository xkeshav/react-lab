import React from 'react';
import './App.css';

import { PokemonDrawer } from './PokemonDrawer';

function App({ name }: { name: string }) {
  return (
    <div className="App">
      <header className="App-header">
        <PokemonDrawer />
      </header>
    </div>
  );
}

export default App;
