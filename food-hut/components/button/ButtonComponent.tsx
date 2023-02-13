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
  href?: string;
  disabled?: boolean;
}

function ButtonComponent({
  children,
  classes,
  color,
  size,
  sx,
  href,
  disabled,
}: ButtonProps) {
  return (
    <Button
      classes={classes}
      color={color}
      size={size}
      sx={{
        ...sx,
        borderRadius: "100px",
        textTransform: "none",
        fontFamily: "Sofia Pro",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "24px",
      }}
      variant="contained"
      href={href}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}

export default ButtonComponent;
