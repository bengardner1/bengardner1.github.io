import React, { useState } from "react";
import './index.css';

function FunFactCard({ question, answer, isGreenGradient }) {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="col-md-3 mb-4">
      <div
        className={`card-flip ${flipped ? "flipped" : ""}`}
        onClick={toggleFlip}
      >
        <div className="card-front d-flex align-items-center justify-content-center p-3">
          <h5>{question}</h5>
        </div>
        <div className={`card-back d-flex align-items-center justify-content-center p-3 ${isGreenGradient ? 'green-gradient-card' : ''}`}>
          <h5>{answer}</h5>
        </div>
      </div>
    </div>
  );
}

export default FunFactCard;
