import Item from "./Item";

const List = ({ todos, onDone, onDelete }) => (
  <ul className="js--todos-wrapper">
    {todos.map((todo, index) => (
      <Item
        key={index}
        text={todo.name}
        done={todo.done}
        onDone={() => onDone(index)}
        onDelete={() => onDelete(index)}
      />
    ))}
  </ul>
);

export default List;
