import Footer from "./Footer";
import MeetOurInstructors from "./MeetOurInstructors";
import { Box } from "@mui/material";
import Reviews from "./Reviews";

export default function Index() {
  return (
    <Box sx={{ width: "80rem" }}>
      <Reviews />

      <MeetOurInstructors />

      <Footer />
    </Box>
  );
}
