import React, { useEffect, useState } from "react";
import StarShipClass from "./components/StarShipClass/StarShipClass";
import StarShipTotal from "./components/StarShipTotal/StarShipTotal";

function App() {
  const [starShips, setStarShips] = useState([]);

  const getStarShips = async () => {
    const response = await fetch("https://swapi.dev/api/starships/");
    const starShipsData = await response.json();
    setStarShips(starShipsData);
  };

  useEffect(() => {
    getStarShips();
  }, []);

  return (
    <div id="background-container">
      <header id="header-title">Star Wars</header>
      <main id="main-container">
        <h2>StarShips:</h2>
        <p id="total-ships">Total ships:</p>
        <StarShipTotal number={41} />
        <h2>Starships by class</h2>
        <StarShipClass name={"prueba"} numbers={starShips.length} />
      </main>
    </div>
  );
}

export default App;
