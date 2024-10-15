import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Rating.sass";

const Rating = (rating) => {
  const starnumber = [1, 2, 3, 4, 5];

  return (
    <div className="rate-box">
      {starnumber.map((id) =>
        id <= rating?.rating ? (
          <FontAwesomeIcon
            key={id}
            icon={faStar}
            className="redstar"
          ></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon
            key={id}
            icon={faStar}
            className="greystar"
          ></FontAwesomeIcon>
        )
      )}
    </div>
  );
};

export default Rating;
