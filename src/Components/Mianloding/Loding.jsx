import React from "react";
import "./loding.css";
function Loding({ progress }) {
  return (
    <div className="loading-stage">
      <div className="loading-container">
        <div class="typing-indicator">
          <div class="typing-circle"></div>
          <div class="typing-circle"></div>
          <div class="typing-circle"></div>
          <div class="typing-shadow"></div>
          <div class="typing-shadow"></div>
          <div class="typing-shadow"></div>
        </div>
        <div className="text-center mt-2">{progress && progress + "%"}</div>
      </div>
    </div>
  );
}

export default Loding;
