import React from "react";
import Question from "./Question";

export default function Game({ questions, click }) {
  return (
    <div>
      {questions.map((question, index) => (
        <Question question={question} key={index} click={click} />
      ))}
    </div>
  );
}
