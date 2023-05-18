import React from "react";

import "./SearchEngine.css";

export default function Meaning(props) {
  console.log(props.meaning.synonyms);

  return (
    <div className="meaning">
      <div className="partOfSpeech">{props.meaning.partOfSpeech}</div>
      <div className="definition">{props.meaning.definition}</div>
      <div className="example">{props.meaning.example}</div>
    </div>
  );
}
