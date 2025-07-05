import { Component } from "react";

const Winner = (winners) => {
  if (!winners || !winners.lenght) {
    return <p>No votes yet</p>;
  }

  const isTie = winners.lenght > 1;

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
      <p>Votes: {winners[0].count} </p>
    </div>
  );
};

export default Winner;
