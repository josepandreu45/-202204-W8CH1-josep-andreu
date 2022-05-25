import React from "react";
import StarShipClass from "./components/StarShipClass/StarShipClass";
import StarShipTotal from "./components/StarShipTotal/StarShipTotal";

function App() {
  return (
    <div id="background-container">
      <header id="header-title">Star Wars</header>
      <main id="main-container">
        <h2>StarShips:</h2>
        <p id="total-ships">Total ships:</p>
        <StarShipTotal number={4} />
        <h2>Starships by class</h2>
        <StarShipClass name={"hola"} numbers={2} />
      </main>
    </div>
  );
}

export default App;
