import React from "react";

import "./SearchEngine.css";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <div className="partOfSpeech">{props.meaning.partOfSpeech}</div>
      <div className="definition">{props.meaning.definition}</div>
      <div className="example">{props.meaning.example}</div>
    </div>
  );
}
