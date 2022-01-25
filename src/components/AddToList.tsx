import React, { useSate } from "react";

const AddToList = () => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        url: "",
        notes: "",
    })
  return (
    <div className="AddToList">
      <input type="text" placeholder="Name" className="AddToList-input" />
      <input type="text" placeholder="Age" className="AddToList-input" />
      <input type="text" placeholder="Image Url" className="AddToList-input" />
      <textarea placeholder="Notes" className="AddToList-input" />
    </div>
  );
};

export default AddToList;
