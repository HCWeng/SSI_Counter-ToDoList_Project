import React, { useState } from "react";
import InputField from "./InputField";
import ItemList from "./ItemList";
import classes from "./TdList.module.css";

const TdList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [sortOption, setSortOption] = useState("A-Z");

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const sortedItems = [...items].sort((a, b) => {
    if (sortOption === "A-Z") {
      return a.localeCompare(b);
    } else if (sortOption === "Z-A") {
      return b.localeCompare(a);
    }
    return 0;
  });

  return (
    <div className={classes.container}>
      <InputField value={inputValue} onChange={handleInputChange} />
      <button className={classes["blue-button"]} onClick={handleAddItem}>
        Add
      </button>

      <label className={classes["label-container"]}>To sort: </label>

      <select
        className={classes["select"]}
        value={sortOption}
        onChange={handleSortChange}
      >
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
      <ItemList items={sortedItems} onDeleteItem={handleDeleteItem} />
    </div>
  );
};

export default TdList;
