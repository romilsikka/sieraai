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
    const copy = { ...state.track };
    if (
      state.track[marketId] &&
      state.track[marketId].selectionId === selectionId
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
          ...state.track,
          [marketId]: { selectionId, selectionName, selectionPrice, marketName },
        },
      });
    }
  };

  const deleteSelection = (marketId) => {
    let copy = { ...state.track };
    delete copy[marketId];
    setState({
      ...state,
      track: copy,
    });
  };

  const handleOpen = () => {
    setState({
      ...state,
      isOpen: !state.isOpen,
    });
  };
  console.log(state);
  return (
    <div className="App">
      <div className="buttonWrapper">
        <button onClick={handleOpen} className="openButton">
          Open
        </button>
      </div>
      <EventCard
        data={state.teamList}
        handleSelect={handleSelect}
        track={state.track}
      />
      <Menu
        deleteSelection={deleteSelection}
        open={state.isOpen}
        track={state.track}
        data={state.teamList}
      />
    </div>
  );
}

export default App;
