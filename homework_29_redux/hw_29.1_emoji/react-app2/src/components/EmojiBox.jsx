import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/slice/counterSlice";

const EmojiBox = ({ text, addActivity }) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter[text] || 0);

  const handleClick = () => {
    dispatch(increment(text));
    addActivity(text, count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>
        <span>{text}</span>
      </button>
      <p>{count}</p>
    </div>
  );
};

export default EmojiBox;
