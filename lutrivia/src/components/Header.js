import React from "react";

export default function Header({ newGame, score }) {
  return (
    <div>
      <h1 className="heading">Lutrivia</h1>
      <div className="row1">
        <button onClick={newGame} className="newGameBtn">
          New Game
        </button>
        <p className="score">Score: {score}</p>
      </div>
    </div>
  );
}
