import React, { useState, useEffect } from "react";
import EventCard from "./components/EventCard";
import Menu from "./components/Menu";
import "./App.css";

function App() {
  const [state, setState] = useState({
    teamList: [],
    track: {},
    isOpen: false,
  });

  const {track , isOpen, teamList} = state;

  useEffect(() => {
    fetch("http://www.mocky.io/v2/59f08692310000b4130e9f71")
      .then((response) => response.json())
      .then((data) => setState({ ...state, teamList: data }));
  }, []);

  const handleSelect = (
    marketId,
    selectionId,
    selectionName,
    selectionPrice,
    marketName
  ) => {
    const copy = { ...track };
    if (
      track[marketId] &&
      track[marketId].selectionId === selectionId
    ) {
      delete copy[marketId];
      setState({
        ...state,
        track: copy,
      });
    } else {
      setState({
        ...state,
        track: {
          ...track,
          [marketId]: { selectionId, selectionName, selectionPrice, marketName },
        },
      });
    }
  };

  const deleteSelection = (marketId) => {
    let copy = { ...track };
    delete copy[marketId];
    setState({
      ...state,
      track: copy,
    });
  };

  const handleOpen = () => {
    setState({
      ...state,
      isOpen: !isOpen,
    });
  };
  return (
    <div className="App">
      <div className="buttonWrapper">
        <button onClick={handleOpen} className="openButton">
          {isOpen ? 'Close' : 'Open'}
        </button>
      </div>
      <EventCard
        data={teamList}
        handleSelect={handleSelect}
        track={track}
      />
      <Menu
        deleteSelection={deleteSelection}
        open={isOpen}
        track={track}
        data={teamList}
      />
    </div>
  );
}

export default App;
