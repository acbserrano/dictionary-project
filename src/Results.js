import React from "react";

import Meaning from "./Meaning";

import "./SearchEngine.css";

export default function Results(props) {
  return (
    <div className="results">
      <h2>{props.data.word}</h2>
      <h3>{props.data.phonetic}</h3>
      {props.data.meanings.map(function (meaning, index) {
        return (
          <div key={index}>
            <Meaning meaning={meaning} />
          </div>
        );
      })}
    </div>
  );
}
