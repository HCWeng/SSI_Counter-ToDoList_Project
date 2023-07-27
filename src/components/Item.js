import React from "react";
import classes from "./item.module.css";

const Item = ({ item, onDelete }) => {
  return (
    <div className={classes["item"]}>
      <spanc className={classes["item"]}>{item}</spanc>
      <button className={classes["delete-button"]} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Item;
