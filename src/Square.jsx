import React from "react";

const Square = (props) => {
  const handleClick = () => {
    //this handleClick function jamdles when a user clicks on a square
    // first if statement checks if there is a value in props.squareValue ! is a "logical not" operator, so this checks if the square is "falsy" or empty.
    if (!props.squareValue) {
      // check if player state is true
      if (props.player) {
        // if both conditions are true, then change the value of props.squares at props.index to “X” using splice
        props.squares.splice(props.index, 1, "X");
        // and setSquares to see the updated board
        props.setSquares(props.squares);
        // and setPlayer to change the player state to "falsy" and let the next player play
        props.setPlayer(!props.player);
      } else {
        props.squares.splice(props.index, 1, "O");
        props.setSquares(props.squares);
        props.setPlayer(!props.player);
      }
    }
  };
  return (
    // invoke the handleClick function if user clicks on the div with className = "square"
    <div className="square" onClick={handleClick}>
      {props.squareValue === "O" ? (
        <img src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png" />
      ) : (
        props.squareValue
      )}
    </div>
  );
};

export default Square;
