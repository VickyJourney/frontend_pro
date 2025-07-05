import { useState } from "react";
import Button from "react-bootstrap/Button";

const BtnResetResult = ({ resetCount }) => {
  const [resultIsCleared, setResultIsCleared] = useState(false);

  const handleClick = () => {
    setResultIsCleared(true);
    resetCount();
  };

  return (
    <Button variant="outline-warning" onClick={handleClick}>
      Clear results!
    </Button>
  );
};

export default BtnResetResult;
