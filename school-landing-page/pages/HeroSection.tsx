import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';




const HeroSection = () => {
  return (

    <Container sx={{overflowX: "hidden", marginBottom: "2rem", marginTop: "4rem", marginLeft: "auto"}}>
        <Grid container justifyContent="center" alignItems="center" sx={{width: "100%", marginBottom: "10px"}}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h3" display="inline" sx={{marginRight: "4px", fontWeight: 600}}>Quality</Typography>
            <Typography variant="h3" display="inline" sx={{color: "#09B451", fontWeight: 600}}>Education</Typography>
            <Typography variant="h3" sx={{fontWeight: 600}}>By Any Means</Typography>
            <Typography variant="h3" sx={{fontWeight: 600}}>Necessary.</Typography>
            <Button variant="contained" sx={{marginTop: "10px", borderRadius: "5px", fontSize: "12px", padding: "20px 42px 20px 42px", marginRight: "20px",
            backgroundColor: "#09B451", color: "#FFFFFF"}}>Get Started</Button>
          </Box>
          
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{width: "100%"}}>
            <img src="../src/assets/images/hero_img.PNG" width= "100%"></img>
          </Box>
        
        </Grid>
      </Grid>

      

      
        <Grid container justifyContent="space-between">
          <Grid item>
            <img src="../src/assets/images/one.png"></img>
          </Grid>
          <Grid item>
            <img src="../src/assets/images/two.png"></img>
          </Grid>
          <Grid item>
            <img src="../src/assets/images/three.png"></img>
          </Grid>
          <Grid item>
            <img src="../src/assets/images/four.png"></img>
          </Grid>
          <Grid item>
            <img src="../src/assets/images/five.png"></img>
          </Grid>
        </Grid>
      
    
    </Container>
    
      
  );
};
export default HeroSection;
    