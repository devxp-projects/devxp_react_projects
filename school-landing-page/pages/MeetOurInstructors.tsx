import { Box, Button, Grid, Typography } from "@mui/material";
import MoiCard from "./MoiCard";

export default function MeetOurInstructors() {
  const btnStyle = {
    width: "8.941rem",
    height: "3.332rem",
    borderRadius: "0.278rem",
    textTransform: "capitalize",
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "0.889rem",
    lineHeight: "1.125rem",
  };
  return (
    <Box
      sx={{
        height: "64.89rem",
        width: "80rem",
        backgroundColor: "#FFFFFF",
        marginBottom: "4.497rem",
      }}
    >
      <Box
        sx={{
          width: "68.75rem",
          height: "26.85rem",
          mx: "auto",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            width: "18.188rem",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "1.777rem",
            lineHeight: "2.688rem",
            color: "#000000",
          }}
        >
          Meet our instructors
        </Typography>
        <Grid
          sx={{ width: "68.611rem", marginTop: "3.533rem", mx: "0" }}
          spacing={"1.777rem"}
          container
        >
          <Grid item md={4} sx={{ padding: "0 !important" }}>
            <MoiCard
              source={"SeniorDeveloper.png"}
              sourceBig={"SeniorDeveloperBG.jpeg"}
              name={"John Mark"}
              role={"Senior Developer"}
              quote={" “Education will be for you what you want it to be” "}
            />
          </Grid>
          <Grid item md={4} sx={{ padding: "0 !important" }}>
            <MoiCard
              source={"MarketingLead.png"}
              sourceBig={"MarketingLeadBG.jpeg"}
              name={"Lora Shrof"}
              role={"Marketing Lead"}
              quote={
                " “Knowledge has to be improved, challenged, and increased constantly, or it vanishes” "
              }
            />
          </Grid>
          <Grid item md={4} sx={{ padding: "0 !important" }}>
            <MoiCard
              source={"DataAnalist.png"}
              sourceBig={"DataAnalistBG.jpeg"}
              name={"Zeng Chin"}
              role={"Data Analist at Meta"}
              quote={
                " “To know that we know what we know, and to know that we do not know what we do not know, that is true knowledge” "
              }
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          marginTop: "4.498rem",
          paddingTop: "3.999rem",
          width: "80rem",
          height: "33.543rem",
        }}
      >
        <Box
          sx={{
            height: "29.544rem",
            backgroundColor: "#000000",
          }}
        >
          <Box
            component="img"
            src="../src/assets/images/MoiBG.png"
            sx={{
              width: "100%",
              position: "relative",
              top: "0rem",
            }}
          />
          <Box
            component="img"
            src="../src/assets/images/MoiBG1.gif"
            sx={{
              position: "relative",
              top: "-20rem",
              left: "-20.159rem",
              opacity: "0.2",
              mixBlendMode: "color-dodge",
              width: "33.375rem",
              height: "18.771rem",
            }}
          />
          <Box
            component="img"
            src="../src/assets/images/MoiBG2.gif"
            sx={{
              position: "relative",
              top: "-20rem",
              left: "-20.143rem",
              opacity: "0.2",
              mixBlendMode: "color-dodge",
              transform: "matrix(-1, 0, 0, 1, 0, 0)",
              width: "33.375rem",
              height: "18.771rem",
            }}
          />
          <Box
            component="img"
            src="../src/assets/images/MoiBG3.gif"
            sx={{
              position: "relative",
              top: "-39.2rem",
              left: "46.5rem",
              opacity: "0.2",
              mixBlendMode: "color-dodge",
              width: "33.375rem",
              height: "18.771rem",
            }}
          />
          <Grid
            container
            sx={{
              position: "relative",
              top: "-71rem",
              paddingLeft: "5.443rem",
              paddingRight: "8.441rem",
            }}
          >
            <Grid item xs={6}>
              <Box component="img" src="../src/assets/images/MoiWoman.png" />
            </Grid>
            <Grid item xs={6} sx={{ height: "23.046rem" }}>
              <Box
                sx={{
                  marginTop: "6rem",
                  width: "31.543rem",
                  marginLeft: "1.5rem",
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: "Open Sans",
                    fontWeight: "700",
                    fontSize: "2.333rem",
                    lineHeight: "3.176rem",
                    fontStyle: "normal",
                    textTransform: "capitalize",
                    color: "#FFFFFF",
                    marginBottom: "1.267rem",
                  }}
                >
                  You don’t have to see the whole staircase just take the first
                  step
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Open Sans",
                    fontWeight: "400",
                    fontSize: "1.333rem",
                    lineHeight: "1.815rem",
                    fontStyle: "normal",
                    textTransform: "capitalize",
                    color: "#FFFFFF",
                  }}
                >
                  Amet in a suspendisse convallis eget, Amet in a suspendisse
                  convallis egetAmet in A
                </Typography>
              </Box>
              <Grid
                container
                spacing={"1.777rem"}
                sx={{
                  width: "19.77rem",
                  height: "3.332rem",
                  marginLeft: "2rem",
                  marginTop: "4.943rem",
                }}
              >
                <Grid item xs={6} sx={{ padding: "0 !important" }}>
                  <Button
                    variant="contained"
                    sx={{
                      ...btnStyle,
                      backgroundColor: "#09B451",
                      color: "#FFFFFF",
                      ":hover": {
                        backgroundColor: "#FFFFFF",
                        color: "#09B451",
                      },
                    }}
                  >
                    Get Started
                  </Button>
                </Grid>
                <Grid item xs={6} sx={{ padding: "0 !important" }}>
                  <Button
                    data-testid="btn"
                    variant="contained"
                    sx={{
                      ...btnStyle,
                      backgroundColor: "#E7FAEF",
                      color: "#09B451",
                      ":hover": {
                        backgroundColor: "#FFFFFF",
                      },
                    }}
                  >
                    Place a call
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
