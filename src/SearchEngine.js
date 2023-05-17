import React, { useState } from "react";
import axios from "axios";

import "./SearchEngine.css";

export default function SearchEngine() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword}`);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "0fa3104eo0aa5adfe05t8da10af2b9bf";
  let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="dictonary">
      <form onSubmit={search}>
        <input
          className="search-button border-0 border-bottom border-dark"
          type="search"
          autoFocus={true}
          placeholder="write something..."
          onChange={handleKeyword}
        />
      </form>
    </div>
  );
}
