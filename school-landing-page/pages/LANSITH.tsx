import { Box, Grid, Paper, Typography } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

const paper = [
  {
    img: "../src/assets/images/card1.jpeg",
    title: "All you need in Business Strategy",
    rating: "4.5",
    duration: "6 weeks",
    students: "1.5k Students",
    price: "30.5$",
  },
  {
    img: "../src/assets/images/card2.jpeg",
    title: "The amazing hack in Figma prototyping",
    rating: "4.5",
    duration: "6 weeks",
    students: "1.5k Students",
    price: "30.5$",
  },
  {
    img: "../src/assets/images/card3.jpeg",
    title: "Introduction to basic game developement",
    rating: "4.5",
    duration: "6 weeks",
    students: "1.5k Students",
    price: "30.5$",
  },
  {
    img: "../src/assets/images/card4.jpeg",
    title: "Use surveyMonkey to create a survey",
    rating: "4.5",
    duration: "6 weeks",
    students: "1.5k Students",
    price: "30.5$",
  },
  {
    img: "../src/assets/images/card5.jpeg",
    title: "Introduction to front-end development",
    rating: "4.5",
    duration: "6 weeks",
    students: "1.5k Students",
    price: "30.5$",
  },
  {
    img: "../src/assets/images/card6.jpeg",
    title: "Get started with First aid ",
    rating: "4.5",
    duration: "6 weeks",
    students: "1.5k Students",
    price: "30.5$",
  },
  {
    img: "../src/assets/images/card7.jpeg",
    title: "Everything you need to know in UX",
    rating: "4.5",
    duration: "6 weeks",
    students: "1.5k Students",
    price: "30.5$",
  },
];

export default function LANSITH() {
  return (
    <Box
      sx={{
        width: "68.75rem",
        height: "29.322rem",
        marginBottom: "4.498rem",
        mx: "auto",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          width: "28.1rem",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "1.777rem",
          lineHeight: "2.688rem",
          textTransform: "capitalize",
          color: "#333333",
          marginBottom: "3.533rem",
        }}
      >
        Learn a new skill in two hours
      </Typography>
      <Box
        data-testid="box"
        sx={{
          display: "flex",
          gap: "1.777rem",
          py: 0,
          overflow: "auto",
          width: "100%",
          height: "24.657rem",
          scrollSnapType: "x mandatory",
          "& > *": {
            scrollSnapAlign: "center",
          },
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        {paper.map((i) => (
          <Paper
            key={i.title}
            sx={{
              width: "21.769rem",
              height: "22.491rem",
              boxShadow: "0rem 0rem 1.111rem rgba(203, 203, 203, 0.25)",
              borderRadius: "0.555rem",
            }}
          >
            <Box
              component="img"
              src={i.img}
              sx={{
                width: "100%",
                height: "11.94rem",
                borderRadius: "0.555rem 0.555rem 0 0",
                marginBottom: "1.333rem",
              }}
            />
            <Grid
              container
              sx={{
                width: "19.375rem",
                height: "4rem",
                mx: "1.197rem",
                marginBottom: "1.998rem",
              }}
            >
              <Grid item sx={{ width: "16.383rem", marginRight: "0.313rem" }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "1.333rem",
                    lineHeight: "2rem",
                    textTransform: "capitalize",
                    color: "#333333",
                  }}
                >
                  {i.title}
                </Typography>
              </Grid>
              <Grid item sx={{ width: "2.646rem", paddingTop: "0.438rem" }}>
                <Grid container>
                  <Grid item>
                    <StarBorderIcon
                      sx={{
                        width: "0.999rem",
                        height: "0.999rem",
                        color: "#09B451",
                        marginTop: "0.125rem",
                        marginRight: "0.333rem",
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "0.889rem",
                        lineHeight: "1.313rem",
                        color: "#000000",
                        width: "1.313rem",
                      }}
                    >
                      {i.rating}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ width: "19.375rem", height: "2rem", mx: "auto" }}
            >
              <Grid
                item
                sx={{
                  width: "3.688rem",
                  height: "1.313rem",
                  marginRight: "0.889rem",
                  my: "auto",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "0.889rem",
                    lineHeight: "1.313rem",
                    color: "#333333",
                  }}
                >
                  {i.duration}
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  width: "0.889rem",
                  height: "0.889rem",
                  my: "auto",
                  marginRight: "0.518rem",
                }}
              >
                <PeopleOutlineIcon
                  sx={{
                    width: "0.889rem",
                    height: "0.889rem",
                    color: "#09B451",
                  }}
                />
              </Grid>
              <Grid
                item
                sx={{
                  width: "5.938rem",
                  height: "1.313rem",
                  my: "auto",
                  marginRight: "3.669rem",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "0.889rem",
                    lineHeight: "1.313rem",
                    color: "#333333",
                  }}
                >
                  {i.students}
                </Typography>
              </Grid>
              <Grid item sx={{ width: "3.75rem", height: "2rem" }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "1.333rem",
                    lineHeight: "2rem",
                    color: "#09B451",
                  }}
                >
                  {i.price}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
