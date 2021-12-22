import React from "react";
import SelectionCard from "./SelectionCard";
import "../App.css";

const MarketCard = (props) => {
  const { data, track, handleSelect } = props;

  return (
    <div className="test">
      {data.map((item) => {
        return (
          <div key={item.id} className="market">
            <div>{item.name}</div>
            <SelectionCard
              track={track}
              marketId={item.id}
              handleSelect={(selectionId, selectionName, selectionPrice) =>
                handleSelect(
                  item.id,
                  selectionId,
                  selectionName,
                  selectionPrice,
                  item.name
                )
              }
              data={item.selections}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MarketCard;
