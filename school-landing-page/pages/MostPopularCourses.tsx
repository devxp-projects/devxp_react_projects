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
    <Container sx={{overflowX: "hidden", marginBottom: "2rem", marginTop: "4rem"}}>
      <Grid container justifyContent="space-between" sx={{width: "100%", marginBottom: "10px"}}>
        <Grid item>
          <Typography variant="h4" component="h2">Most Popular Courses</Typography>
        </Grid>
        <Grid item>
        <Button variant="contained" startIcon={ <img
              src={`../src/assets/images/arrow.png`} width="12px" height="12px"
              alt="menu"
            />} size="small" sx={{borderRadius: "50px", fontSize: "12px", padding: "8px 16px 8px 16px", marginRight: "20px",
            backgroundColor: "#09B451"}}>Sort by</Button>
        </Grid>
      </Grid>
      
<Grid 
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  sx={{
    width: "100%",
    
    paddingBottom: "20px"
  }}
>
  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{maxWidth: "391px", maxHeight: "391px", objectFit: "contain"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="215px"
        image="../src/assets/images/frame1.png"
      />
      <CardContent>
        <Box sx={{display: "flex", justifyContent: "space-between"}}>
        <Typography gutterBottom variant="subtitle2" component="h6" sx={{fontWeight: "bold"}}>
          
          
        Learn Marketing from Top Instructors. 
        </Typography>
        <Box sx={{display: "flex"}}>
        <Box  sx={{alignSelf: "baseline", marginTop: "1.2px",marginRight: "2px"}}>
          <img src={`../src/assets/images/star.png`} alt="Rating" width="14.89px" height="14.22px"></img>
          </Box>
        <Typography>4.5</Typography>
        </Box>
        </Box>
        <Box sx={{width: "100%", marginTop: "15px", display: "grid", gridTemplateColumns: "1fr 2fr 1fr"}}>
        <Typography variant="body2" color="text.secondary" sx={{marginRight: "1rem"}}>6 weeks</Typography>
        <Box sx={{display: "flex"}}>
        <Box sx={{marginRight: "0.1rem", alignSelf: "baseline"}}>
        <img src={`../src/assets/images/people.png`} alt="People" width={`13.33px`} height="12px"></img>
        </Box>
        <Typography variant="body2">1.5k Students</Typography>
        </Box>
        
        <Box sx={{textAlign: "right"}}>
        <Typography variant="body1" component="p" sx={{color: "#09B451", fontWeight: 600}}>30.5 $</Typography>
        </Box>
        </Box>
      </CardContent>
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
        <Box sx={{display: "flex", justifyContent: "space-between"}}>
        <Typography gutterBottom variant="subtitle2" component="h6" sx={{fontWeight: "bold"}}>
          
          
        Front-end development is not hard as you think 
        </Typography>
        <Box sx={{display: "flex"}}>
        <Box  sx={{alignSelf: "baseline", marginTop: "1.2px",marginRight: "2px"}}>
          <img src={`../src/assets/images/star.png`} alt="Rating" width="14.89px" height="14.22px"></img>
          </Box>
        <Typography>4.5</Typography>
        </Box>
        </Box>
        <Box sx={{width: "100%", marginTop: "15px", display: "grid", gridTemplateColumns: "1fr 2fr 1fr"}}>
        <Typography variant="body2" color="text.secondary" sx={{marginRight: "1rem"}}>6 weeks</Typography>
        <Box sx={{display: "flex"}}>
        <Box sx={{marginRight: "0.1rem", alignSelf: "baseline"}}>
        <img src={`../src/assets/images/people.png`} alt="People" width={`13.33px`} height="12px"></img>
        </Box>
        <Typography variant="body2">1.5k Students</Typography>
        </Box>
        
        <Box sx={{textAlign: "right"}}>
        <Typography variant="body1" component="p" sx={{color: "#09B451", fontWeight: 600}}>30.5 $</Typography>
        </Box>
        </Box>
      </CardContent>
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
        <Box sx={{display: "flex", justifyContent: "space-between"}}>
        <Typography gutterBottom variant="subtitle2" component="h6" sx={{fontWeight: "bold"}}>
          
          
        Everything you need to know in UX 
        </Typography>
        <Box sx={{display: "flex"}}>
        <Box  sx={{alignSelf: "baseline", marginTop: "1.2px",marginRight: "2px"}}>
          <img src={`../src/assets/images/star.png`} alt="Rating" width="14.89px" height="14.22px"></img>
          </Box>
        <Typography>4.5</Typography>
        </Box>
        </Box>
        <Box sx={{width: "100%", marginTop: "15px", display: "grid", gridTemplateColumns: "1fr 2fr 1fr"}}>
        <Typography variant="body2" color="text.secondary" sx={{marginRight: "1rem"}}>6 weeks</Typography>
        <Box sx={{display: "flex"}}>
        <Box sx={{marginRight: "0.1rem", alignSelf: "baseline"}}>
        <img src={`../src/assets/images/people.png`} alt="People" width={`13.33px`} height="12px"></img>
        </Box>
        <Typography variant="body2">1.5k Students</Typography>
        </Box>
        
        <Box sx={{textAlign: "right"}}>
        <Typography variant="body1" component="p" sx={{color: "#09B451", fontWeight: 600}}>30.5 $</Typography>
        </Box>
        </Box>
      </CardContent>
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
        <Box sx={{display: "flex", justifyContent: "space-between"}}>
        <Typography gutterBottom variant="subtitle2" component="h6" sx={{fontWeight: "bold"}}>
          
          
        Learn photography with ease 
        </Typography>
        <Box sx={{display: "flex"}}>
        <Box  sx={{alignSelf: "baseline", marginTop: "1.2px",marginRight: "2px"}}>
          <img src={`../src/assets/images/star.png`} alt="Rating" width="14.89px" height="14.22px"></img>
          </Box>
        <Typography>4.5</Typography>
        </Box>
        </Box>
        <Box sx={{width: "100%", marginTop: "15px", display: "grid", gridTemplateColumns: "1fr 2fr 1fr"}}>
        <Typography variant="body2" color="text.secondary" sx={{marginRight: "1rem"}}>6 weeks</Typography>
        <Box sx={{display: "flex"}}>
        <Box sx={{marginRight: "0.1rem", alignSelf: "baseline"}}>
        <img src={`../src/assets/images/people.png`} alt="People" width={`13.33px`} height="12px"></img>
        </Box>
        <Typography variant="body2">1.5k Students</Typography>
        </Box>
        
        <Box sx={{textAlign: "right"}}>
        <Typography variant="body1" component="p" sx={{color: "#09B451", fontWeight: 600}}>30.5 $</Typography>
        </Box>
        </Box>
      </CardContent>
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
        <Box sx={{display: "flex", justifyContent: "space-between"}}>
        <Typography gutterBottom variant="subtitle2" component="h6" sx={{fontWeight: "bold"}}>
          
          
        Be a pro in data analysis 
        </Typography>
        <Box sx={{display: "flex"}}>
        <Box  sx={{alignSelf: "baseline", marginTop: "1.2px",marginRight: "2px"}}>
          <img src={`../src/assets/images/star.png`} alt="Rating" width="14.89px" height="14.22px"></img>
          </Box>
        <Typography>4.5</Typography>
        </Box>
        </Box>
        <Box sx={{width: "100%", marginTop: "15px", display: "grid", gridTemplateColumns: "1fr 2fr 1fr"}}>
        <Typography variant="body2" color="text.secondary" sx={{marginRight: "1rem"}}>6 weeks</Typography>
        <Box sx={{display: "flex"}}>
        <Box sx={{marginRight: "0.1rem", alignSelf: "baseline"}}>
        <img src={`../src/assets/images/people.png`} alt="People" width={`13.33px`} height="12px"></img>
        </Box>
        <Typography variant="body2">1.5k Students</Typography>
        </Box>
        
        <Box sx={{textAlign: "right"}}>
        <Typography variant="body1" component="p" sx={{color: "#09B451", fontWeight: 600}}>30.5 $</Typography>
        </Box>
        </Box>
      </CardContent>
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
        <Box sx={{display: "flex", justifyContent: "space-between"}}>
        <Typography gutterBottom variant="subtitle2" component="h6" sx={{fontWeight: "bold"}}>
          
          
        Ethical Harking is not hard as you think 
        </Typography>
        <Box sx={{display: "flex"}}>
        <Box  sx={{alignSelf: "baseline", marginTop: "1.2px",marginRight: "2px"}}>
          <img src={`../src/assets/images/star.png`} alt="Rating" width="14.89px" height="14.22px"></img>
          </Box>
        <Typography>4.5</Typography>
        </Box>
        </Box>
        <Box sx={{width: "100%", marginTop: "15px", display: "grid", gridTemplateColumns: "1fr 2fr 1fr"}}>
        <Typography variant="body2" color="text.secondary" sx={{marginRight: "1rem"}}>6 weeks</Typography>
        <Box sx={{display: "flex"}}>
        <Box sx={{marginRight: "0.1rem", alignSelf: "baseline"}}>
        <img src={`../src/assets/images/people.png`} alt="People" width={`13.33px`} height="12px"></img>
        </Box>
        <Typography variant="body2">1.5k Students</Typography>
        </Box>
        
        <Box sx={{textAlign: "right"}}>
        <Typography variant="body1" component="p" sx={{color: "#09B451", fontWeight: 600}}>30.5 $</Typography>
        </Box>
        </Box>
      </CardContent>
      
    </Card>
    
  </Grid>
  </Grid>




    </Container>
      
  );
};
export default MostPopularCourses;
    