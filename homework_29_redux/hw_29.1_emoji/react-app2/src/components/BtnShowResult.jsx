import { useState } from "react";
import Button from "react-bootstrap/Button";
import Winner from "./Winner";

const BtnShowResult = ({ getWinners }) => {
  const [isWinnerHidden, setIsWinnerHidden] = useState(true);

  const handleToggleWinner = () => {
    setIsWinnerHidden(!isWinnerHidden);
  };

  const winners = getWinners?.() || [];

  return (
    <>
      <Button variant="outline-success" onClick={handleToggleWinner}>
        {isWinnerHidden ? "Show the winner" : "Hide results"}
      </Button>
      {!isWinnerHidden && <Winner winners={winners} />}
    </>
  );
};

export default BtnShowResult;
