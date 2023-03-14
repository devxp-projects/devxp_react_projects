import Footer from "./Footer";
import MeetOurInstructors from "./MeetOurInstructors";
import { Box } from "@mui/material";
import Reviews from "./Reviews";
import WBTGETL from "./WBTGETL";

import MostPopularCourses from "./MostPopularCourses"

export default function Index() {
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      <WBTGETL />
      <MostPopularCourses />
  
      <Reviews />

      <MeetOurInstructors />

      <Footer />
    </Box>
  );
}
