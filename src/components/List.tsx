import React from "react";

interface IProps {
  people: {
    name: string;
    age: number;
    url: string;
    notes?: string;
  }[];
}

const List: React.FC<IProps> = ({ people }) => {
  const renderList = () => {
    return people.map((person) => {
      return (
        <li className="List">
          <div key={person.name} className="List-header">
            <img className="List-img" src={person.url} alt={person.name} />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age}</p>
          <p className="List-note">{person.notes}</p>
        </li>
      );
    });
  };
  return <ul>{renderList()}</ul>;
};

export default List;
