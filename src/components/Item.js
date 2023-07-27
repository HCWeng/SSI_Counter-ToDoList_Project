import React from "react";

const Item = ({ item, onDelete }) => {
  return (
    <div>
      <span>{item}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Item;
