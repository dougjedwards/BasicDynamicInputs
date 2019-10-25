import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SpecForm from './SpecForm';
import { ISpecItem } from './Spec';

const App: React.FC = () => {
  const [items, setItems] = useState<ISpecItem[]>([]);

  return (
    <div className="App">
    <SpecForm onSubmit={(items)=> setItems(items)} />
    {JSON.stringify(items)}
    </div>
  );
}

export default App;
