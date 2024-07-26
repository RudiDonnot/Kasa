import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Rating = (rating) => {
  const starnumber = [1, 2, 3, 4, 5];

  return (
    <div className="rate-box">
      {starnumber.map((id) =>
        id <= rating?.rating ? (
          <FontAwesomeIcon
            key={id}
            icon={faStar}
            style={{ color: "#ff6060" }}
          ></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon
            key={id}
            icon={faStar}
            style={{ color: "#e3e3e3" }}
          ></FontAwesomeIcon>
        )
      )}
    </div>
  );
};

export default Rating;
