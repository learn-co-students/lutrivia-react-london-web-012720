import React from "react";

export default function Submit({ onSubmitScore }) {
  return (
    <form onSubmit={onSubmitScore} className="submitScore">
      <input name="name" placeholder="Name" type="text" />
      <button type="submit">Submit Score</button>
    </form>
  );
}
