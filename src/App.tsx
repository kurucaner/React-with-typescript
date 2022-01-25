// Hooks
import React, { useState } from "react";
// Style
import "./App.css";
// Components
import List from "./components/List";
interface IState {
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
      url: "https://www.google.com/search?q=Michael+Jordon&rlz=1C1CHBF_enUS831US831&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjNy7KHwK7XAhXC4YMKHWXoBQMQ_AUICigB&biw=1366&bih=657#imgrc=_",
      notes: "He is a good guy",
    },
    {
      name: "Lebron James",
      age: 35,
      url: "https://www.google.com/search?q=Lebron+James&rlz=1C1CHBF_enUS831US831&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjNy7KHwK7XAhXC4YMKHWXoBQMQ_AUICigB&biw=1366&bih=657#imgrc=_",
      notes: "He is a living legend",
    },
    {
      name: "Kobe Bryant",
      age: 40,
      url: "https://www.google.com/search?q=Kobe+Bryant&rlz=1C1CHBF_enUS831US831&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjNy7KHwK7XAhXC4YMKHWXoBQMQ_AUICigB&biw=1366&bih=657#imgrc=_",
      notes: "He was a legend",
    },
  ]);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
    </div>
  );
}

export default App;
