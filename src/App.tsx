import React from "react";
import StarShipClass from "./components/StarShipClass/StarShipClass";

function App() {
  return (
    <div id="background-container">
      <header id="header-title">Star Wars</header>

      <StarShipClass name={"hola"} numbers={2} />
    </div>
  );
}

export default App;
