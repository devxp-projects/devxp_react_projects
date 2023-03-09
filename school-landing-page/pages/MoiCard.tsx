import { Avatar, Paper, Typography, Box } from "@mui/material";
import React, { useState } from "react";

export default function MoiCard(props) {
  let [style, setStyle] = useState({
    position: "relative",
    left: "0rem",
    opacity: "1",
    display: "block",
    transition: "none",
  });
  let [style1, setStyle1] = useState({
    width: "19.341rem",
    height: "19.341rem",
    borderRadius: "50%",
    position: "absolute",
    opacity: "0",
    transition: "none",
    top: "0.762rem",
    mx: "1.172rem",
  });
  return (
    <Paper
      onMouseEnter={() => {
        setStyle({
          position: "relative",
          left: "-18.75rem",
          opacity: "0",
          display: "none",
          transition: "all 1s",
        });
        setStyle1({
          width: "19.341rem",
          height: "19.341rem",
          borderRadius: "50%",
          position: "absolute",
          opacity: "1",
          transition: "opacity 1s",
          top: "0.762rem",
          mx: "1.172rem",
        });
      }}
      onMouseLeave={() => {
        setStyle({
          position: "relative",
          left: "0rem",
          opacity: "1",
          display: "block",
          transition: "all 1s",
        });
        setStyle1({
          width: "19.341rem",
          height: "19.341rem",
          borderRadius: "50%",
          position: "absolute",
          opacity: "0",
          transition: "opacity 1s",
          top: "0.762rem",
          mx: "1.172rem",
        });
      }}
      sx={{
        height: "20.631rem",
        width: "21.686rem",
        paddingTop: "1.699rem",
        borderRadius: "0.333rem",
        filter: "drop-shadow(0px 0px 17.7709px rgba(203, 203, 203, 0.25))",
      }}
      elevation={2}
    >
      <Box sx={style}>
        <Avatar
          alt="Senior Developer"
          src={"../src/assets/images/" + props.source}
          sx={{
            width: "6.33rem",
            height: "6.33rem",
            mx: "auto",
          }}
        />
        <Typography
          variant="body1"
          sx={{
            marginTop: "0.914rem",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "1.111rem",
            lineHeight: "1.516rem",
            textAlign: "center",
            color: "#333333",
          }}
        >
          {props.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginTop: "0.333rem",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "0.889rem",
            lineHeight: "1.213rem",
            textAlign: "center",
            color: "#09B451",
          }}
        >
          {props.role}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            width: "16.604rem",
            marginTop: "2.008rem",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "0.889rem",
            lineHeight: "1.438rem",
            textAlign: "center",
            color: "#333333",
            mx: "auto",
          }}
        >
          {props.quote}
        </Typography>
      </Box>
      <Box
        data-testid="bigPic"
        component="img"
        sx={style1}
        src={"../src/assets/images/" + props.sourceBig}
      />
    </Paper>
  );
}
