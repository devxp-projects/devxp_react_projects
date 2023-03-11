import { Grid, Typography, Box, InputBase, Button } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  let body2Style1 = {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "0.778rem",
    lineHeight: "1.388rem",
    color: "#FFFFFF",
    textTransform: "capitalize",
    marginBottom: "0.444rem",
    width: "auto",
    display: "block",
  };
  let body2Style2 = body2Style1;
  body2Style2.fontFamily = "Poppins";
  let icons = {
    color: "#0AC75ACC",
    marginRight: "1.33rem",
    width: "1.333rem",
    height: "1.333rem",
  };
  return (
    <Box
      data-testid={"mainBox"}
      sx={{
        height: "32.598rem",
        width: "80rem",
        backgroundColor: "#000000",
      }}
    >
      <Grid
        container
        sx={{
          position: "relative",
          top: "6.668rem",
          width: "65.9rem",
          marginLeft: "5.553rem",
          marginRight: "0",
        }}
      >
        <Grid
          item
          sx={{
            padding: "0 !important",
            width: "16.438rem",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "1.821rem",
              lineHeight: "2.289rem",
              margin: "0",
              color: "#FFFFFF",
              marginBottom: "1.682rem",
            }}
          >
            WiSchool
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "0.889rem",
              lineHeight: "1.333rem",
              letterSpacing: "0.056rem",
              textTransform: "lowercase",
              width: "16.438rem",
              height: "3.938rem",
              color: "#FFFFFF",
              marginBottom: "1.783rem",
            }}
          >
            We are not here to sell you products, we sell value through our
            expertise.
          </Typography>
          <Box sx={{ width: "10rem", height: "1.333rem" }}>
            <FacebookRoundedIcon sx={icons} />
            <TwitterIcon sx={icons} />
            <InstagramIcon sx={icons} />
            <LinkedInIcon sx={{ ...icons, marginRight: "0" }} />
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            padding: "0 !important",
            marginLeft: "calc((91/1440) * 100vw) !important",
            width: "4.387rem",
            height: "8.719rem",
          }}
        >
          <Typography variant="body2" sx={body2Style1}>
            Home
          </Typography>
          <Typography variant="body2" sx={body2Style1}>
            Services
          </Typography>
          <Typography variant="body2" sx={body2Style1}>
            Training
          </Typography>
          <Typography variant="body2" sx={body2Style1}>
            Resources
          </Typography>
          <Typography variant="body2" sx={body2Style2}>
            About Us
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            padding: "0 !important",
            marginLeft: "3.999rem",
            width: "4.387rem",
            height: "6.886rem",
          }}
        >
          <Typography variant="body2" sx={body2Style1}>
            SME
          </Typography>
          <Typography variant="body2" sx={body2Style1}>
            Solution
          </Typography>
          <Typography variant="body2" sx={body2Style1}>
            Reviews
          </Typography>
          <Typography variant="body2" sx={body2Style1}>
            Blog
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            padding: "0 !important",
            marginLeft: "3.054rem",
            width: "9.219rem",
            height: "9.552rem",
          }}
        >
          <Typography variant="body2" sx={body2Style1}>
            Contact Us
          </Typography>
          <Typography variant="body2" sx={body2Style1}>
            Place a Call
          </Typography>
          <Typography variant="body2" sx={body2Style1}>
            Email
          </Typography>
          <Typography variant="body2" sx={body2Style1}>
            Wischool@gmail.com
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            padding: "0 !important",
            marginLeft: "3.054rem",
            width: "5.5rem",
            height: "5.054rem",
          }}
        >
          <Typography variant="body2" sx={body2Style2}>
            Job Opening
          </Typography>
          <Typography variant="body2" sx={body2Style1}>
            News
          </Typography>
          <Typography variant="body2" sx={body2Style1}>
            Research
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            padding: "0 !important",
            marginLeft: "3.813rem",
            width: "6.938rem",
            height: "3.221rem",
          }}
        >
          <Typography variant="body2" sx={body2Style2}>
            Uk Privacy Policy
          </Typography>
          <Typography variant="body2" sx={body2Style1}>
            Terms of Use
          </Typography>
        </Grid>
      </Grid>
      <Box
        data-testid={"signupBox"}
        sx={{
          position: "relative",
          top: "12.833rem",
          left: "auto",
          right: "auto",
          margin: "auto",
          width: "30.266rem",
          height: "5.831rem",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            marginRight: "auto",
            marginLeft: "auto",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "1.333rem",
            lineHeight: "2rem",
            color: "#FFFFFF",
            width: "21.188rem",
            marginBottom: "0.943rem",
          }}
        >
          Subscribe to get latest updates
        </Typography>
        <Grid
          container
          spacing={0}
          sx={{
            width: "30.267rem",
            height: "2.888rem",
            margin: "0",
          }}
        >
          <Grid
            item
            sx={{
              padding: "0 !important",
              backgroundColor: "#FFFFFF",
              width: "23.269rem",
              height: "2.888rem",
            }}
          >
            <InputBase
              sx={{
                width: "100%",
                height: "100%",
                paddingLeft: "0.999rem",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "0.777rem",
                lineHeight: "1.188rem",
                color: "#3BD27B",
                opacity: "1",
              }}
              id="e-mail"
              placeholder="Your Email Address"
            />
          </Grid>
          <Grid
            item
            sx={{
              padding: "0 !important",
              width: "6.998rem",
              height: "2.888rem",
            }}
          >
            <Button
              variant="contained"
              disableElevation
              sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "0.777rem",
                lineHeight: "1.188rem",
                width: "100%",
                height: "100%",
                backgroundColor: "#0AC75ACC",
                borderRadius: "0",
                textTransform: "none",
                "&:hover": { backgroundColor: "#0AC75ACC" },
              }}
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
