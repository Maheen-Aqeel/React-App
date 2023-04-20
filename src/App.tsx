import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './Components/List';
import AddToList from './Components/AddToList';

export interface IState {
  people: {
      name: string
      age: number
      img: string
      note?: string
  }[]
}


function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Ali Ahmed",
      age: 24,
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allegeric to staying on the same team",
    }
  ])

  return (
    <div className="App">
      <h1>Add to List</h1>
      <List people={people}/>
      <AddToList setPeople={setPeople} people={people}/>
    </div>
  );
}

export default App;
