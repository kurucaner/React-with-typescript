// Hooks
import React, { useState } from "react";
// Style
import "./App.css";
// Components
import List from './components/List';
interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    notes?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([]);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
