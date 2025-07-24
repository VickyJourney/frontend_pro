import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";

const ResponseContainer = () => {
  const items = useSelector((state) => state.people.items);

  const displayText =
    items && items.length > 0 ? JSON.stringify(items, null, 2) : "";

  return <Form.Control as="textarea" rows={20} readOnly value={displayText} />;
};

export default ResponseContainer;
