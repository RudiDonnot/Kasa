import React, { useState } from "react";
import "./retractcards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Retractcards(props) {
  return (
    <div>
      <button className="retract-top-part">
        <div className="retract-top-part-content">
          <p className="retract-title">{props.title}</p>
          <FontAwesomeIcon />
        </div>
      </button>
      {open && (
        <div className="retract-bottom-part">
          <p className="retract-content">{props.content}</p>
        </div>
      )}
    </div>
  );
}

export default Retractcards;
