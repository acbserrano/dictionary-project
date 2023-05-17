import React, { useState } from "react";

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
