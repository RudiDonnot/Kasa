import "./Carrousel.sass";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Carroussel = (props) => {
  const [index, setIndex] = useState(0);
  const pictures = props.pictures || [];

  const next = () => {
    if (index === pictures.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const previous = () => {
    if (index === 0) {
      setIndex(pictures.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="Carrousel">
      {pictures.length > 0 && (
        <>
          <img
            src={pictures[index]}
            alt="appartement"
            className="Carrouselimg"
          />
          {pictures.length > 1 && (
            <div className="arrowspart">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="arrow-slide"
                onClick={previous}
              />
              <FontAwesomeIcon
                icon={faChevronRight}
                className="arrow-slide"
                onClick={next}
              />
            </div>
          )}
          {pictures.length > 1 && (
            <div className="numberpart">
              <span className="number">
                {index + 1}/{pictures.length}
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Carroussel;
