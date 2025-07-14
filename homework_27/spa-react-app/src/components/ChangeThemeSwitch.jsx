import { useContext } from "react";
import { ThemeContext, themes } from "../themeContext";
import { Form } from "react-bootstrap";

const ChangeThemeSwitch = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const handleChange = () => {
    setTheme(theme.color === "lightblue" ? themes.orange : themes.blue);
  };

  return (
    <Form>
      <Form.Check
        type="switch"
        id="theme-switch"
        label="Theme"
        checked={theme.color === "orange"}
        onChange={handleChange}
      />
    </Form>
  );
};

export default ChangeThemeSwitch;
