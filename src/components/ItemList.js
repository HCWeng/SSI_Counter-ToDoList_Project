import React from "react";
import Item from "./Item";
import classes from "./item.module.css";

const ItemList = ({ items, onDeleteItem }) => {
  return (
    <div>
      {items.map((item, index) => (
        <Item
          className={classes["item-list"]}
          key={index}
          item={item}
          onDelete={() => onDeleteItem(index)}
        />
      ))}
    </div>
  );
};

export default ItemList;
