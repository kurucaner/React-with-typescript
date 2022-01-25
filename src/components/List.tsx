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
  return <div>I am a list</div>;
};

export default List;
