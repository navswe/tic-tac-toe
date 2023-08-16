//destructure useState from React
import { useState } from "react";

// import component styles from App.css
import "./App.css";

// Import Square.js component
import Square from "./Square";

function App() {
  // Using array destructuring initialize the state for the games squares to an array of 9 empty strings
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  // Using array destructuring to initialize state of the player variable to a boolean of true
  const [player, setPlayer] = useState(true);
  return (
    <div className="App">
      <Square
        //Add a prop of squares that is equal to the squares state variable to the Square component
        squares={squares}
        //Add a prop of setSquares that is equal to the setSquares function to the Square component
        setSquares={setSquares}
        //Add a prop of player that is equal to the player state variable to the Square component
        player={player}
        //Add a prop of setPlayer that is equal to the setPlayer function to the Square component
        setPlayer={setPlayer}
      />
    </div>
  );
}

//export this function to make it available outside of this file
// default keyword tells other files that this is the main funciton of this file
export default App;
