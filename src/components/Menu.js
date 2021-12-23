import React from "react";
import "../App.css";

const Menu = (props) => {
  const { open = false, track = {}, deleteSelection = () => {} } = props;
  let arr = Object.keys(track);
  return (
    <>
      {open && (
        <div className="menu">
          {arr.map((item) => {
            return (
              <div className="menuList" key={item}>
                <span>
                  {track[item].selectionName} {track[item].marketName}
                </span>
                <span>{track[item].selectionPrice}</span>
                <button
                  className="deleteButton"
                  onClick={() => deleteSelection(item)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Menu;
