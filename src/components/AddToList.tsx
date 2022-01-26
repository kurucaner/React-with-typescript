import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    url: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.url || !input.notes) {
      alert("Please fill out all fields");
      return;
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        notes: input.notes,
      },
    ]);
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
        required
      />
      <input
        type="number"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
        name="age"
        required
      />
      <input
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        value={input.url}
        onChange={handleChange}
        name="url"
        required
      />
      <textarea
        placeholder="Notes"
        className="AddToList-input"
        value={input.notes}
        onChange={handleChange}
        name="notes"
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add To List
      </button>
    </div>
  );
};

export default AddToList;
