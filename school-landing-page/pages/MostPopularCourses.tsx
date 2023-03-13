import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';




const MostPopularCourses = () => {
  return (
    <Container sx={{overflowX: "hidden"}}>
      <Grid container justifyContent="space-between" sx={{width: "100%", marginBottom: "10px"}}>
        <Grid item>
          <Typography>Most Popular Courses</Typography>
        </Grid>
        <Grid item>
        <Button variant="contained" color="success" startIcon={ <img
              src={`../src/assets/images/arrow.png`}
              alt="menu"
            />} size="small">Sort by</Button>
        </Grid>
      </Grid>
      
<Grid 
  container
  direction="row"
  justifyContent="space-between"
  alignItems="center"
  spacing={2}
  sx={{
    width: "100%",
    overflowX: "hidden"
  }}
>
  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{maxWidth: "391px"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="215px"
        image="../src/assets/images/frame1.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{fontFamily: "Poppins"}}>
        Learn Marketing from Top Instructors.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{maxWidth: "391px"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        
        height="215px"
        

        image="../src/assets/images/frame2.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{fontFamily: "Poppins"}}>
        Front-end development is not hard as you think
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{maxWidth: "391px"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="215px"
        image="../src/assets/images/frame3.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{fontFamily: "Poppins"}}>
        Everrything you need to know in UX
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{maxWidth: "391px"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="215px"
        image="../src/assets/images/frame4.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{fontFamily: "Poppins"}}>
        Learn photography with ease
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{maxWidth: "391px"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="215px"
        
        image="../src/assets/images/frame5.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{fontFamily: "Poppins"}}>
        Be a pro in data analysis
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{maxWidth: "391px"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="215px"
              
        image="../src/assets/images/frame6.png"
      />
      <CardContent>
        <Box sx={{display: "flex"}}>
        <Typography gutterBottom variant="body2" component="h6" sx={{fontFamily: "Poppins", fontWeight: 600}}>
        Ethical Harking is not hard as you think 
        </Typography>
        <Box  sx={{marginRight: "5px"}}><img src={`../src/assets/images/star.png`} alt="Rating"></img></Box>
        <Typography>4.5</Typography>
        </Box>
        <Box sx={{display: "flex"}}>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
        </Box>
      </CardContent>
      
    </Card>
    
  </Grid>
  </Grid>




    </Container>
      
  );
};
export default MostPopularCourses;
    