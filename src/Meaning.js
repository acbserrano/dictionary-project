import React from "react";

import "./SearchEngine.css";

import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <div className="partOfSpeech">{props.meaning.partOfSpeech}</div>
      <div className="definition">{props.meaning.definition}</div>
      <div className="example">{props.meaning.example}</div>

      <div>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
