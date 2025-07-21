import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

const Input = ({ field, form, label, ...props }) => {
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (form.submitCount > 0) {
      setIsTyping(false);
    }
  }, [form.submitCount]);

  const error =
    form.submitCount > 0 &&
    !isTyping &&
    form.errors[field.name] &&
    (form.touched[field.name] || form.submitCount > 0);

  return (
    <TextField
      {...field}
      {...props}
      label={label}
      variant="outlined"
      fullWidth
      error={Boolean(error)}
      helperText={error ? form.errors[field.name] : " "}
      onFocus={() => setIsTyping(false)}
      onBlur={(e) => {
        setIsTyping(false);
        form.handleBlur(e);
      }}
      onChange={(e) => {
        setIsTyping(true);
        field.onChange(e);
      }}
    />
  );
};

export default Input;
