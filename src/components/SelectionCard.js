import React from "react";
import "../App.css";

const SelectionCard = (props) => {
  const { data, track, handleSelect, marketId } = props;

  return (
    <div className="selectionWrapper">
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className="selection"
            onClick={() => handleSelect(item.id,item.name,item.price)}
            style={{
              backgroundColor:
                track[marketId] && track[marketId].selectionId === item.id
                  ? "green"
                  : "white",
            }}
          >
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SelectionCard;
