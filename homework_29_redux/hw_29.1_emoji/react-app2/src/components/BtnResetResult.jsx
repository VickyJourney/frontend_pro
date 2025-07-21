import { useDispatch } from "react-redux";
import { reset } from "../redux/slice/counterSlice";
import Button from "react-bootstrap/Button";

const BtnResetResult = ({ setActivities }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(reset());
    localStorage.removeItem("activities");
    setActivities([]);
  };

  return (
    <Button variant="outline-warning" onClick={handleClick}>
      Clear results!
    </Button>
  );
};

export default BtnResetResult;
