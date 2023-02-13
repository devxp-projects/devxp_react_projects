import React from "react";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  clickableSearchIcon: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

interface SearchInputFieldProps {
  id?: string;
  label?: React.ReactNode;
  name?: string;
  onChange?: (event: object) => void;
  placeholder?: string;
  required?: boolean;
  sx?: object;
  value?: string | number | boolean | object;
  type?: string;
  onClick?: (event: object) => void;
}

function SearchInputField({
  id,
  label,
  name,
  onChange,
  placeholder,
  required,
  sx,
  value,
  type,
  onClick,
}: SearchInputFieldProps) {
  const { classes } = useStyles();
  return (
    <Box
      borderRadius="100px"
      display="flex"
      alignItems="center"
      border="0.5px solid"
      padding="6px 4px"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="42px"
        height="42px"
      >
        <Image
          src="/assets/vectors/black-search-icon.svg"
          alt="black_search_icon"
          width={18.71}
          height={18.71}
        />
      </Box>
      <TextField
        id={id}
        label={label}
        variant="standard"
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        value={value}
        type={type}
        sx={{
          ...sx,
          input: {
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "24px",
            paddingLeft: "10px",
            "&::placeholder": {
              opacity: 0.5,
            },
          },
        }}
        InputProps={{
          disableUnderline: true,
        }}
        fullWidth={true}
      />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minWidth="42px"
        minHeight="42px"
        borderRadius="50%"
        onClick={onClick}
        className={classes.clickableSearchIcon}
      >
        <Image
          src="/assets/vectors/white-search-icon.svg"
          alt="black_search_icon"
          width={18.71}
          height={18.71}
        />
      </Box>
    </Box>
  );
}

export default SearchInputField;
