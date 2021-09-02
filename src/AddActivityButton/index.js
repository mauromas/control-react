import React from "react";
import "./AddActivityButton.css";

function AddActivityButton(props) {
  const buttonOpen = () => {
    props.setOpenModal((prevState) => !prevState);
  };

  return (
    <button className="addActivity" onClick={buttonOpen}>
      +
    </button>
  );
}

export { AddActivityButton };
