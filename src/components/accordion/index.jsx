import React, { useState } from "react";
import "./style.css";
import data from "./data";
const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const handleSingleSelection = (getCurrentID) => {
    setSelected(getCurrentID === selected ? null : getCurrentID);
  };
  const handleMultiSelection = (getCurrentID) => {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentID = cpyMultiple.indexOf(getCurrentID);
    console.log(findIndexOfCurrentID, multiple);
    if (findIndexOfCurrentID === -1) {
      cpyMultiple.push(getCurrentID);
    } else {
      cpyMultiple.splice(findIndexOfCurrentID, 1);
    }
    setMultiple(cpyMultiple);
  };

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {" "}
        Enable multi Selection{" "}
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id || multiple.indexOf(dataItem.id)  !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
