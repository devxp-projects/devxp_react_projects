import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";

export default function Footer() {
  let body2Style1 = {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "25px",
    color: "#FFFFFF",
    textTransform: "capitalize",
    marginBottom: "8px",
    width: "auto",
    display: "block",
  };
  let body2Style2 = body2Style1;
  body2Style2.fontFamily = "Poppins";
  let icons = {
    color: "#0AC75ACC",
    marginRight: "24px",
    width: "calc((24/1440) * 100vw)",
    height: "calc((24/1440) * 100vw)",
  };
  return (
    <Box
      sx={{
        height: "587px",
        width: "calc((1440/1440) * 100vw)",
        backgroundColor: "#000000",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          position: "relative",
          top: "120px",
          width: "100%",
          margin: "0",
        }}
      >
        <Grid
          item
          sx={{
            paddingTop: "0 !important",
            paddingLeft: "calc((100/1440) * 100vw) !important",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "32.8px",
              lineHeight: "41px",
              margin: "0",
              color: "#FFFFFF",
              marginBottom: "31px",
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
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "1px",
              textTransform: "lowercase",
              width: "calc((296/1440) * 100vw)",
              height: "72px",
              color: "#FFFFFF",
              marginBottom: "31px",
            }}
          >
            We are not here to sell you products, we sell value through our
            expertise.
          </Typography>
          <FacebookRoundedIcon sx={icons} />
          <TwitterIcon sx={icons} />
          <InstagramIcon sx={icons} />
          <LinkedInIcon sx={icons} />
        </Grid>
        <Grid
          item
          sx={{
            paddingTop: "0 !important",
            paddingLeft: "calc((91/1440) * 100vw) !important",
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
            paddingTop: "0 !important",
            paddingLeft: "calc((83/1440) * 100vw) !important",
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
            paddingTop: "0 !important",
            paddingLeft: "calc((81/1440) * 100vw) !important",
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
            paddingTop: "0 !important",
            paddingLeft: "calc((74/1440) * 100vw) !important",
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
            paddingTop: "0 !important",
            paddingLeft: "calc((77/1440) * 100vw) !important",
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
        sx={{
          position: "relative",
          top: "238px",
          left: "auto",
          right: "auto",
          margin: "auto",
          width: "calc((545/1440) * 100vw)",
          height: "105px",
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
            fontSize: "24px",
            lineHeight: "36px",
            color: "#FFFFFF",
            width: "calc((425/1440) * 100vw)",
          }}
        >
          Subscribe to get latest updates
        </Typography>
        <Grid
          container
          spacing={0}
          sx={{
            position: "relative",
            top: "16px",
            width: "100%",
            margin: "0",
          }}
        >
          <Grid
            item
            sx={{
              padding: "0 !important",
              backgroundColor: "#FFFFFF",
              width: "calc((419/1440) * 100vw)",
              height: "52px",
            }}
          >
            <InputBase
              sx={{
                width: "100%",
                height: "100%",
                paddingLeft: "calc((18/1440) * 100vw)",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "21px",
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
              width: "calc((126/1440) * 100vw)",
              height: "52px",
            }}
          >
            <Button
              variant="contained"
              disableElevation
              sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "21px",
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
