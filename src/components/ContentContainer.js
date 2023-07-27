import React, { useState } from "react";
import HOC from "./HOC";
import Counter from "./Counter"; // Make sure to replace './Counter' with the correct path to the Counter.js file
import TdList from "./TdList"; // Make sure to replace './TdList' with the correct path to the TdList.js file

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
    <div>
      <div>
        <label>
          Show Counter:
          <input
            type="checkbox"
            checked={showCounter}
            onChange={ToggleCounterVisibility}
          />
        </label>
      </div>
      {showCounter && <HOCCounter visible={showCounter} />}
      <div>
        <label>
          Show To-do List:
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
