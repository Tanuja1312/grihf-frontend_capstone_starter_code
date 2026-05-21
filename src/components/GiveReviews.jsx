import React, { useState } from "react";

function GiveReviews() {
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <h2>Give Review</h2>
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
      ></textarea><br /><br />

      <button disabled={submitted} onClick={() => setSubmitted(true)}>
        Submit
      </button>

      {submitted && <p>Review submitted ✅</p>}
    </div>
  );
}

export default GiveReviews;