import React from "react";
import { TextField } from "@mui/material";

interface TextFieldProps {
  id?: string;
  label?: React.ReactNode;
  variant?: "outlined" | "filled" | "standard";
  name?: string;
  onChange: (event: object) => void;
  placeholder?: string;
  required?: boolean;
  sx?: object;
  value?: string | number | boolean | object;
  type?: string;
}

function TextFieldComponent({
  id,
  label,
  variant,
  name,
  onChange,
  placeholder,
  required,
  sx,
  value,
  type,
}: TextFieldProps) {
  return (
    <TextField
      id={id}
      label={label}
      variant={variant}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      sx={sx}
      value={value}
      type={type}
    />
  );
}

export default TextFieldComponent;
