import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>DICTONARY</h1>
        </header>
        <main>
          <SearchEngine defaultKeyword="water" />
        </main>
        <footer className="app-footer">
          <a
            href="https://github.com/acbserrano/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Coded
          </a>{" "}
          by Ana Góis
        </footer>
      </div>
    </div>
  );
}
