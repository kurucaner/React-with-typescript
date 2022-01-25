import React from "react";

interface IProps {
  people: {
    name: string;
    age: number;
    url: string;
    notes?: string;
  }[];
}

const List = ({ people }: IProps) => {
  const renderList = () => {
    return people.map((person) => {
      return (
        <div key={person.name}>
          <h1>{person.name}</h1>
          <h2>{person.age}</h2>
          <img src={person.url} alt={person.name} />
          <p>{person.notes}</p>
        </div>
      );
    });
  };
  return (
    <ul>
      {people.map((person) => {
        return <div>{person.name}</div>;
      })}
    </ul>
  );
};

export default List;
