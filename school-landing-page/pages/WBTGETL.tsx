import { Box, Typography, Grid } from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import MoreTimeOutlinedIcon from "@mui/icons-material/MoreTimeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

export default function WBTGETL() {
  return (
    <Box
      sx={{
        width: "68.75rem",
        height: "33.422rem",
        marginBottom: "4.498rem",
        mx: "auto",
      }}
    >
      <Typography
        sx={{
          width: "38.096rem",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "1.777rem",
          lineHeight: "2.688rem",
          marginBottom: "4.498rem",
        }}
      >
        We Bring The Good Education To Life
      </Typography>
      <Grid container sx={{ width: "61rem", height: "26.236rem", mx: "auto" }}>
        <Grid item sx={{ width: "23.879rem", height: "25.625rem" }}>
          <Box
            sx={{
              overflow: "hidden",
              width: "21.769rem",
              height: "25.625rem",
              background: "#CECECE",
              borderRadius: "1.607rem 1.607rem 4.016rem 1.607rem",
            }}
          >
            <Box
              data-testid="woman"
              component="img"
              src="../src/assets/images/wbtgetl_woman.png"
              sx={{
                transition: "transform 1s ease",
                ":hover": { transform: "scale(1.1)" },
              }}
            ></Box>
          </Box>
          <Box
            sx={{
              width: "7.164rem",
              height: "8.108rem",
              background: "#FFFFFF",
              paddingTop: "0.666rem",
              boxShadow: "0rem 0rem 4.221rem rgba(112, 112, 112, 0.25)",
              borderRadius: "0.382rem 0.382rem 0.956rem 0.382rem",
              position: "relative",
              top: "-13.801rem",
              left: "17.271rem",
            }}
          >
            <Box
              sx={{
                width: "2.277rem",
                height: "2.277rem",
                mx: "auto",
                background: "#E1FFEE",
                borderRadius: "1.952rem",
                marginBottom: "0.556rem",
              }}
            >
              <WorkOutlineIcon
                sx={{
                  color: "#09B451",
                  width: "1.561rem",
                  height: "1.561rem",
                  margin: "0.358rem",
                }}
              />
            </Box>
            <Typography
              variant="h6"
              sx={{
                width: "6.22rem",
                height: "3.125rem",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "0.889rem",
                lineHeight: "1.313rem",
                textAlign: "center",
                mx: "auto",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "1.333rem",
                  lineHeight: "2rem",
                  color: "#09B451",
                  position: "relative",
                  ":after": {
                    content: "''",
                    position: "absolute",
                    bottom: "-0.625rem",
                    left: "0",
                    height: "0.6rem",
                    width: "100%",
                    border: "solid 0.125rem #09B451",
                    borderColor: "#09B451 transparent transparent transparent",
                    borderRadius: "50%",
                  },
                }}
              >
                Job
              </Typography>{" "}
              Opportunities
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            width: "33.734rem",
            height: "25.768rem",
            marginLeft: "3.332rem",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              marginBottom: "1.33rem",
              width: "29.599rem",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "2.666rem",
              lineHeight: "4rem",
            }}
          >
            Let Your Education Do The Walking
          </Typography>
          <Box sx={{ width: "33.734rem", height: "16.438rem" }}>
            <Grid
              container
              sx={{
                width: "20.1rem",
                height: "2.777rem",
                marginBottom: "1.777rem",
              }}
            >
              <Grid
                item
                sx={{
                  width: "2.777rem",
                  height: "2.777rem",
                  background: "#DDFFFF",
                  borderRadius: "1.666rem",
                }}
              >
                <AutoStoriesOutlinedIcon
                  sx={{
                    width: "1.333rem",
                    height: "1.333rem",
                    color: "#09B451",
                    margin: "0.722rem",
                  }}
                />
              </Grid>
              <Grid
                item
                sx={{
                  marginLeft: "1.333rem",
                  width: "15.98rem",
                  height: "1.688rem",
                  my: "0.544rem",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "1.111rem",
                    lineHeight: "1.688rem",
                    color: "#333333",
                  }}
                >
                  Free E-book, Videos and kits
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{
                width: "17.5rem",
                height: "2.777rem",
                marginBottom: "1.777rem",
              }}
            >
              <Grid
                item
                sx={{
                  width: "2.777rem",
                  height: "2.777rem",
                  background: "#DDFFFF",
                  borderRadius: "1.666rem",
                }}
              >
                <MoreTimeOutlinedIcon
                  sx={{
                    width: "1.333rem",
                    height: "1.333rem",
                    color: "#09B451",
                    margin: "0.722rem",
                  }}
                />
              </Grid>
              <Grid
                item
                sx={{
                  marginLeft: "1.333rem",
                  width: "13.3rem",
                  height: "1.688rem",
                  my: "0.544rem",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "1.111rem",
                    lineHeight: "1.688rem",
                    color: "#333333",
                  }}
                >
                  Learn at your own pace
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{
                width: "33.734rem",
                height: "2.777rem",
                marginBottom: "1.777rem",
              }}
            >
              <Grid
                item
                sx={{
                  width: "2.777rem",
                  height: "2.777rem",
                  background: "#DDFFFF",
                  borderRadius: "1.666rem",
                }}
              >
                <WorkOutlineIcon
                  sx={{
                    width: "1.333rem",
                    height: "1.333rem",
                    color: "#09B451",
                    margin: "0.722rem",
                  }}
                />
              </Grid>
              <Grid
                item
                sx={{
                  marginLeft: "1.333rem",
                  width: "29.6rem",
                  height: "1.688rem",
                  my: "0.544rem",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "1.111rem",
                    lineHeight: "1.688rem",
                    color: "#333333",
                  }}
                >
                  Collaborate with different learners around the globe
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{
                width: "22.72rem",
                height: "2.777rem",
                marginBottom: "1.777rem",
              }}
            >
              <Grid
                item
                sx={{
                  width: "2.777rem",
                  height: "2.777rem",
                  background: "#DDFFFF",
                  borderRadius: "1.666rem",
                }}
              >
                <PeopleAltOutlinedIcon
                  sx={{
                    width: "1.333rem",
                    height: "1.333rem",
                    color: "#09B451",
                    margin: "0.722rem",
                  }}
                />
              </Grid>
              <Grid
                item
                sx={{
                  marginLeft: "1.333rem",
                  width: "18.6rem",
                  height: "1.688rem",
                  my: "0.544rem",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "1.111rem",
                    lineHeight: "1.688rem",
                    color: "#333333",
                  }}
                >
                  Top instructors around the globe
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
