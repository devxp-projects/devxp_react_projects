import Navbar from "../components/Navbar"
import Footer from "./Footer";
import MeetOurInstructors from "./MeetOurInstructors";
import { Box } from "@mui/material";
import Reviews from "./Reviews";
import WBTGETL from "./WBTGETL";
import LANSITH from "./LANSITH";
import MostPopularCourses from "./MostPopularCourses";
import TopCategories from "./TopCategories";

export default function Index() {
  return (

    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      <Navbar />

      <TopCategories />
    
      <MostPopularCourses />
      
      <LANSITH />
      
      <WBTGETL />

      <Reviews />

      <MeetOurInstructors />

      <Footer />
    </Box>
  );
}
