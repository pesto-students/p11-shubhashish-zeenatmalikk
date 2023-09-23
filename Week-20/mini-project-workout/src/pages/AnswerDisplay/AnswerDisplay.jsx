import React, { useState, useEffect } from "react";

function AnswerDisplay({ answer }) {
 
  return (
    <main>
      {answer && (
        <div>
          <h2>Answer</h2>
          <p>{answer}</p>
        </div>
      )}
    </main>
  );
}

export default AnswerDisplay;
