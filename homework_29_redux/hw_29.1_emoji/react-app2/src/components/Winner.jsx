import React from "react";
import { useSelector } from "react-redux";

const Winner = () => {
  const votes = useSelector((state) => state.counter);

  const voteEntries = Object.entries(votes);
  if (!votes || Object.keys(votes).length === 0) {
    return <p>No votes yet</p>;
  }

  const maxCount = Math.max(...voteEntries.map(([_, count]) => count));
  const winners = voteEntries
    .filter(([_, count]) => count === maxCount)
    .map(([text, count]) => ({ text, count }));

  const isTie = winners.length > 1;

  return (
    <div>
      <h2>Results:</h2>
      <h1>{isTie ? "It's a tie!" : "The winner is:"}</h1>
      <div>
        {winners.map((winner, index) => (
          <span className="winner-emoji" key={index}>
            {winner.text}
          </span>
        ))}
      </div>
      <p>Votes: {winners[0].count}</p>
    </div>
  );
};

export default Winner;
