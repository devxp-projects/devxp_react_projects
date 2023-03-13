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
    <Container>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography>Most Popular Courses</Typography>
        </Grid>
        <Grid item>
          <button>Sort by</button>
        </Grid>
      </Grid>
      
<Grid 
  container
  direction="row"
  justifyContent="space-between"
  alignItems="center"
  spacing={2}
>
  <Grid item xs={4} sm={6} md={4}>
    <Card>
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
  <Grid item xs={4} sm={6} md={4}>
    <Card>
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
  <Grid item xs={4} sm={6} md={4}>
    <Card>
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
  <Grid item xs={4} sm={6} md={4}>
    <Card>
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
  <Grid item xs={4} sm={6} md={4}>
    <Card>
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
  <Grid item xs={4} sm={6} md={4}>
    <Card>
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
  </Grid>




    </Container>
      
  );
};
export default MostPopularCourses;
    