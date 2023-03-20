import { Box, Typography } from "@mui/material";
import React from "react";

export default function TCBox(props) {
  const [checked, setChecked] = React.useState(false);

  return (
    <Box
      key={props.title}
      sx={{
        width: "16.161rem",
        height: "100%",
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${props.img})`,
      }}
      onMouseEnter={() => {
        setChecked(true);
      }}
      onMouseLeave={() => {
        setChecked(false);
      }}
    >
      <Box
        sx={
          checked
            ? {
                width: "14.273rem",
                mx: "0.944rem",
                height: "15.438rem",
                transition: "transform .5s ease !important",
                transform: "translateY(8rem) !important",
              }
            : {
                width: "14.273rem",
                mx: "0.944rem",
                height: "15.438rem",
                transform: "translateY(20.625rem) !important",
                transition: "transform .5s ease !important",
              }
        }
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "1.777rem",
            lineHeight: "2.666rem",
            color: "#FFFFFF",
            marginBottom: "0.5rem",
            visibility: "visible !important",
          }}
        >
          {props.title}
        </Typography>
        <Typography
          data-testid={"test"}
          variant="body2"
          sx={
            checked
              ? {
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "0.889rem",
                  lineHeight: "1.333rem",
                  color: "#FFFFFF",
                  visibility: "visible !important",
                }
              : {
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "0.889rem",
                  lineHeight: "1.333rem",
                  color: "#FFFFFF",
                  visibility: "hidden !important",
                  transition: "visibility .5s",
                }
          }
        >
          {props.desc}
        </Typography>
      </Box>
    </Box>
  );
}
