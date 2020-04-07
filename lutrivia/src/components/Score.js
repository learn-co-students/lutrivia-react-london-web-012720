import React from "react";

export default function Score({ scores }) {
  return scores.length >= 1 ? (
    <div>
      <h4 className="scoreTitle">Scores:</h4>
      {scores.map((score, index) => (
        <h5 key={index} className="scoreBoard">
          Name: {score.name} - Score: {score.score}
        </h5>
      ))}
    </div>
  ) : null;
}
