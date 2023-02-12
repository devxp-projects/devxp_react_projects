import React from "react";
import { Button } from "@mui/material";

interface ButtonProps {
  children?: React.ReactNode;
  classes?: object;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  size?: "small" | "medium" | "large";
  sx?: object;
  variant?: "text" | "outlined" | "contained";
  href?: string;
  disabled?: boolean;
}

function ButtonComponent({
  children,
  classes,
  color,
  size,
  sx,
  variant,
  href,
  disabled,
}: ButtonProps) {
  return (
    <Button
      classes={classes}
      color={color}
      size={size}
      sx={sx}
      variant={variant}
      href={href}
      disabled={disabled}
    >
      {children && children}
    </Button>
  );
}

export default ButtonComponent;
