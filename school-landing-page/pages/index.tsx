import Footer from "./Footer";
import MeetOurInstructors from "./MeetOurInstructors";
import { Box } from "@mui/material";
import Reviews from "./Reviews";
import WBTGETL from "./WBTGETL";

export default function Index() {
  return (
    <Box sx={{ width: "80rem" }}>
      <WBTGETL />

      <Reviews />

      <MeetOurInstructors />

      <Footer />
    </Box>
  );
}
