import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';




const HeroSection = () => {
  return (

    <Container sx={{overflowX: "hidden", marginBottom: "2rem", marginTop: "4rem"}}>
        <Grid container justifyContent="space-between" sx={{width: "100%", marginBottom: "10px"}}>
        <Grid item>
          <Box>
            <Typography variant="h2" display="inline" sx={{marginRight: "2px", fontWeight: 600}}>Quality</Typography>
            <Typography variant="h2" display="inline" sx={{color: "#09B451", fontweight: 600}}>Education</Typography>
            <Typography variant="h2" sx={{fontWeight: 600}}>By Any Means Necessary.</Typography>
            <Button variant="contained" sx={{marginTop: "5px", borderRadius: "50px", fontSize: "12px", padding: "8px 16px 8px 16px", marginRight: "20px",
            backgroundColor: "#09B451", color: "#FFFFFF"}}>Get Started</Button>
          </Box>
          
        </Grid>
        <Grid item>
          <Box>
            <img src="../src/assets/images/hero_img.PNG"></img>
          </Box>
        
        </Grid>
      </Grid>

      <Box sx={{display: "flex", justifyContent: "space-between"}}>
        
      </Box>
    </Container>
    
      
  );
};
export default HeroSection;
    