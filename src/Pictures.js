import React from "react";

import "./Pictures.css";

export default function Pictures(props) {
  if (props.photos) {
    return (
      <div className="Photos row">
        {props.photos.map(function (picture, index) {
          return (
            <div className="col-4" key={index}>
              <a href={picture.src.original} target="_blank" rel="noreferrer">
                <img
                  className="img-fluid mt-4"
                  src={picture.src.landscape}
                  alt={picture.alt}
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
