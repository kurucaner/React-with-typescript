// Hooks
import React, { useState } from "react";
// Style
import "./App.css";
// Components
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    notes?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Michael Jordon",
      age: 32,
      url: "https://cdn.cnn.com/cnnnext/dam/assets/210616193741-04-michael-jordan-athlete-activism-super-169.jpg",
      notes: "He is a good guy",
    },
    {
      name: "Lebron James",
      age: 35,
      url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/LeBron_James_crop.jpg",
      notes: "He is a living legend",
    },
    {
      name: "Kobe Bryant",
      age: 40,
      url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwMzQyOTk2OTY3ODkyODQ0/gettyimages-490703338.jpg",
      notes: "He was a legend",
    },
  ]);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
