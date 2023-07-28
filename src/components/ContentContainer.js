import React, { useState } from "react";
import HOC from "./HOC";
import Counter from "./Counter";
import TdList from "./TdList";
import classes from "./ContentContainer.module.css";

const ContentContainer = () => {
  const [showCounter, setShowCounter] = useState(true);
  const [showTdList, setShowTdList] = useState(true);

  const ToggleCounterVisibility = () => {
    setShowCounter((prev) => !prev);
  };

  const ToggleTdListVisibility = () => {
    setShowTdList((prev) => !prev);
  };

  const HOCCounter = HOC(Counter);
  const HOCTdList = HOC(TdList);

  return (
    <div className={classes.container}>
      <div className={classes["checkbox-label"]}>
        <label className={classes["label-class"]}>
          1. Show Counter:
          <input
            type="checkbox"
            checked={showCounter}
            onChange={ToggleCounterVisibility}
          />
        </label>
      </div>
      {showCounter && <HOCCounter visible={showCounter} />}
      <div className={classes["checkbox-label"]}>
        <label className={classes["label-class"]}>
          2. Show To-do List:
          <input
            type="checkbox"
            checked={showTdList}
            onChange={ToggleTdListVisibility}
          />
        </label>
      </div>
      {showTdList && <HOCTdList visible={showTdList} />}
    </div>
  );
};

export default ContentContainer;
