import React from "react";

export default function Question({ question, click }) {
  return (
    <div className="question">
      <h3>{question.text}</h3>
      <div>
        <button onClick={(e) => click(e, question)} value="true">
          True
        </button>
        <button onClick={(e) => click(e, question)} value="false">
          False
        </button>
      </div>
    </div>
  );
}
