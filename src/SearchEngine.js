import React from "react";

export default function SearchEngine() {
  function search(event) {
    event.preventDeafault();
    return "searching";
  }

  return (
    <div className="dictonary">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus="true"
          placeholder="write something..."
        ></input>
      </form>
    </div>
  );
}
