import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import TCBox from "./TCBox";

export default function TopCategories() {
  return (
    <Box
      sx={{
        marginBottom: "4.498rem",
        mx: "auto",
        width: "68.75rem",
        height: "31.25rem",
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        sx={{ width: "100%", marginBottom: "4.498rem" }}
      >
        <Grid item sx={{ width: "41.875rem" }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "1.777rem",
              lineHeight: "2.666rem",
              color: "#333333",
            }}
          >
            Choose favourite course from top cartegories
          </Typography>
        </Grid>
        <Grid item sx={{ width: "4.375rem" }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "1.333rem",
              lineHeight: "1.999rem",
              color: "#333333",
            }}
          >
            See all
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          width: "100%",
          height: "23.991rem",
          display: "flex",
          gap: "1.777rem",
          py: 0,
          overflowX: "visible",
          overflowY: "hidden",
          scrollSnapType: "x mandatory",
          "& > *": {
            scrollSnapAlign: "center",
          },
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        <TCBox
          img={"../src/assets/images/topCategories1.png"}
          title={"Marketing"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nibh netus auctor consect massa. Maecen vivamus sed nibh enim sed. Hac ridiculus tellus urna quam odio quis montes, diam. Malesuada ut urna eu faucibus faucibus faucibus u"
          }
        />
        <TCBox
          img={"../src/assets/images/topCategories2.jpeg"}
          title={"Design"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nibh netus auctor consect massa. Maecen vivamus sed nibh enim sed. Hac ridiculus tellus urna quam odio quis montes, diam. Malesuada ut urna eu faucibus faucibus faucibus u"
          }
        />
        <TCBox
          img={"../src/assets/images/topCategories3.jpeg"}
          title={"Programming"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nibh netus auctor consect massa. Maecen vivamus sed nibh enim sed. Hac ridiculus tellus urna quam odio quis montes, diam. Malesuada ut urna eu faucibus faucibus faucibus u"
          }
        />
        <TCBox
          img={"../src/assets/images/topCategories4.jpeg"}
          title={"Technology"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nibh netus auctor consect massa. Maecen vivamus sed nibh enim sed. Hac ridiculus tellus urna quam odio quis montes, diam. Malesuada ut urna eu faucibus faucibus faucibus u"
          }
        />
        <TCBox
          img={"../src/assets/images/topCategories5.jpeg"}
          title={"Cooking"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nibh netus auctor consect massa. Maecen vivamus sed nibh enim sed. Hac ridiculus tellus urna quam odio quis montes, diam. Malesuada ut urna eu faucibus faucibus faucibus u"
          }
        />
        <TCBox
          img={"../src/assets/images/topCategories6.jpeg"}
          title={"Health and Care"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nibh netus auctor consect massa. Maecen vivamus sed nibh enim sed. Hac ridiculus tellus urna quam odio quis montes, diam. Malesuada ut urna eu faucibus faucibus faucibus u"
          }
        />
        <TCBox
          img={"../src/assets/images/topCategories7.jpeg"}
          title={"Photography"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nibh netus auctor consect massa. Maecen vivamus sed nibh enim sed. Hac ridiculus tellus urna quam odio quis montes, diam. Malesuada ut urna eu faucibus faucibus faucibus u"
          }
        />
      </Box>
    </Box>
  );
}
