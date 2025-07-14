import Button from "react-bootstrap/Button";

const Item = ({ text, done, onDone, onDelete }) => {
  return (
    <li className="d-flex justify-content-between mb-2 mt-2 listItem">
      <span style={{ textDecoration: done ? "line-through" : "none" }}>
        {text}
      </span>
      <div>
        <Button variant="success" onClick={onDone}>
          Done
        </Button>
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </li>
  );
};

export default Item;
