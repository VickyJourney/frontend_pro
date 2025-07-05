const EmojiBox = ({ text, count, addActivity }) => {
  const handleClick = () => {
    const newCount = count + 1;
    addActivity(text, newCount);
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
