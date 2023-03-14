import { Box, Grid, MobileStepper, Paper, Typography } from "@mui/material";

const reviews = [
  {
    src: "../src/assets/images/Mohh.jpeg",
    name: "Mohh Jumah",
    title: "Senior Developer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis",
  },
  {
    src: "../src/assets/images/John.jpeg",
    name: "John Mark",
    title: "Data Analyst",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis",
  },
  {
    src: "../src/assets/images/Rabiu.jpeg",
    name: "Rabiu Hassan",
    title: "Marketer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis",
  },
  {
    src: "../src/assets/images/Mheyah.jpeg",
    name: "Mheyah Khalifa",
    title: "Ux Lead",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis",
  },
  {
    src: "../src/assets/images/Elon.jpeg",
    name: "Elon Musk",
    title: "Content Writer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis",
  },
];

export default function Reviews() {
  return (
    <Box
      sx={{
        width: "68.75rem",
        height: "27.989rem",
        marginBottom: "4.498rem",
        mx: "auto",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          width: "7.375rem",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "1.777rem",
          lineHeight: "2.688rem",
          textTransform: "capitalize",
          color: "#242243",
          marginBottom: "0.7rem",
        }}
      >
        Reviews
      </Typography>
      <Grid container sx={{ width: "68.862rem", height: "24.601rem" }}>
        <Grid
          item
          sx={{
            width: "21.214rem",
            height: "10.875rem",
            my: "auto",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              width: "21.214rem",
              height: "10.875rem",
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "2.666rem",
              lineHeight: "3.625rem",
              textTransform: "capitalize",
              color: "#000000",
            }}
          >
            What Our{" "}
            <Typography
              component={"span"}
              sx={{
                position: "relative",
                fontFamily: "Open Sans",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "2.666rem",
                lineHeight: "3.625rem",
                textTransform: "capitalize",
                color: "#09B451",
                marginBottom: "3.286rem",
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
              Students
            </Typography>{" "}
            Say About Us
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            width: "45.76rem",
            height: "24.601rem",
            paddingLeft: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "1.777rem",
              py: 0,
              overflow: "auto",
              width: "100%",
              height: "100%",
              px: "0.888rem",
              scrollSnapType: "x mandatory",
              "& > *": {
                scrollSnapAlign: "center",
              },
              "::-webkit-scrollbar": { display: "none" },
            }}
          >
            {reviews.map((item) => (
              <Paper
                key={item.title}
                elevation={1}
                sx={{
                  width: "24.325rem",
                  height: "19.548rem",
                  my: "auto",
                  paddingTop: "3.276rem",
                  paddingLeft: "2.666rem",
                }}
              >
                <Grid container sx={{ width: "13.713rem", height: "3.888rem" }}>
                  <Grid item sx={{ width: "3.888rem", height: "3.888rem" }}>
                    <Box
                      component={"img"}
                      src={item.src}
                      sx={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "2.221rem",
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    sx={{
                      width: "9.775rem",
                      height: "3.208rem",
                      my: "auto",
                      paddingLeft: "0.889rem",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "Open Sans",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "1.111rem",
                        lineHeight: "1.5rem",
                        color: "#000000",
                        marginBottom: "0.333rem",
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "Open Sans",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "1rem",
                        lineHeight: "1.375rem",
                        color: "#09B451",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Grid>
                </Grid>
                <Typography
                  variant="body1"
                  sx={{
                    width: "21.325rem",
                    fontFamily: "Open Sans",
                    fontWeight: "400",
                    fontSize: "1rem",
                    lineHeight: "1.688rem",
                    color: "#333333",
                    marginTop: "1.333rem",
                    marginRight: "3rem",
                  }}
                >
                  {item.desc}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
