import React from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";
import "./App.css";

function MainPage() {
  return (
    <div className="App">
      <Nav />
      <Main />
    </div>
  );
}

export default MainPage;
