import React from "react";
import Item from "./Item"; // Make sure to replace './Item' with the correct path to the Item.js file

const ItemList = ({ items, onDeleteItem }) => {
  return (
    <div>
      {items.map((item, index) => (
        <Item key={index} item={item} onDelete={() => onDeleteItem(index)} />
      ))}
    </div>
  );
};

export default ItemList;
