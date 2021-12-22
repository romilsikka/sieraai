import React from "react";
import MarketCard from "./MarketCard";
import "../App.css";

const EventCard = (props) => {
  const { data, track, handleSelect } = props;

  return (
    <>
      {data.map((item) => {
        if (item.markets.length) {
          return (
            <div className="card" key={item.id}>
              <div className="teamName">{item.name}</div>
              <MarketCard
                track={track}
                handleSelect={(
                  marketId,
                  selectionId,
                  selectionName,
                  selectionPrice,
                  marketName
                ) =>
                  handleSelect(
                    marketId,
                    selectionId,
                    selectionName,
                    selectionPrice,
                    marketName
                  )
                }
                data={item.markets}
              />
            </div>
          );
        }
      })}
    </>
  );
};

export default EventCard;
