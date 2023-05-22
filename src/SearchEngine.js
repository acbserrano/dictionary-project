import React, { useState } from "react";
import axios from "axios";

import "./SearchEngine.css";

import Results from "./Results";
import Pictures from "./Pictures";

export default function SearchEngine(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [descriptionWord, setDescriptionWord] = useState(false);
  let [photos, setPhotos] = useState("");

  function handleResponse(response) {
    setDescriptionWord({
      loaded: true,
      word: response.data.word,
      phonetic: response.data.phonetic,
      meanings: response.data.meanings,
    });
  }

  function handleImagesResponse(response) {
    console.log(response.data.photos);
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    searchWord();
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function searchWord() {
    let apiKey = "0fa3104eo0aa5adfe05t8da10af2b9bf";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    let apiKeyImages = "0fa3104eo0aa5adfe05t8da10af2b9bf";
    let apiUrlImages = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKeyImages}`;

    axios.get(apiUrlImages).then(handleImagesResponse);
  }

  let form = (
    <form onSubmit={search}>
      <input
        className="search-button border-0 border-bottom border-dark"
        type="search"
        autoFocus={true}
        placeholder="write something..."
        onChange={handleKeyword}
      />
    </form>
  );

  if (descriptionWord.loaded) {
    return (
      <div>
        <div className="dictonary">{form}</div>
        <Results data={descriptionWord} />
        <Pictures photos={photos} />
      </div>
    );
  } else {
    searchWord(keyword);
    return <div className="dictonary">{form} </div>;
  }
}
