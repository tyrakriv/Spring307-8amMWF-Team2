import React from "react";

const Result = ({score, playAgain}) => (
  <div className="score-board">
    {score < 3 ? (
      <div className="score">You might be feeling a little down, but how about calling a friend to cheer you up ?!</div>
    ) : null}
    {score >= 3 ? (
      <div className="score">It's a beautiful day!
                      Keep the good times rollin'</div>
    ) : null}
    
    <h2 style={{
      marginTop: 375,
    }}>Come back tomorrow!</h2>
  </div>
);

export default Result;
