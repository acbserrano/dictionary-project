import React from "react";

import "./SearchEngine.css";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="example">
        e.g. : <span className="capitalize"> {props.example}</span>
      </div>
    );
  } else {
    return null;
  }
}
