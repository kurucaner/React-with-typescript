import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

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

  people.map((person) => {
    person.name;
  });

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
    </div>
  );
}

export default App;
