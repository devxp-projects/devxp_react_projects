import React from "react";
import { AppBar, Box, Button, Link, IconButton, Stack, Toolbar, Tooltip } from "@mui/material"
import { createTheme, styled} from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../public/vectors/logo.jsx';
 


const AnimatedLink = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.main,
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-20px)',
      fontWeight: 'bold',
      '& > span': {
        opacity: 0,
        transform: 'rotate(180deg)',
        transition: 'all 0.3s ease-in-out',
      },
      '& > span:last-child': {
        opacity: 1,
        transform: 'rotate(180deg)',
        transition: 'all 0.3s ease-in-out',
      },
    },
  }));
  

const theme = createTheme({
    palette: {
        primary: {
            main: "#09B451",
        },
        secondary: {
            main: '#6A0000',
        },
    },
    typography: {
        fontSize: 16,
        fontFamily: 'Source Open Sans, Open Sans',
    },
    spacing: [2, 4, 8, 12, 16],
});


const Navbar = () => {
    const navColor = {color: 'rgba(64, 64, 64, 0.8)'}
    return (

            <Box sx={{flexGrow: 1}}>
                <AppBar position="static" color="transparent" >
                    <Toolbar sx={{display: 'flex',
                                justifyContent: 'space-between',
                                margin: '0 0 0 4.8rem',
                                flexWrap: 'wrap' }}>
                        <Stack>
                            <Logo />
                        </Stack>
                        <Stack direction="row" spacing={6} sx={{marginRight: '4rem', 
                                                                fontFamily: 'open sans',
                                                                '& a': navColor 
                                                            }}>
                            <Link href="#" underline="none" >Home</Link>
                            <Link href="#" underline="none" >Courses</Link>
                            <Link href="#" underline="none" >Instructors</Link>
                            <Link href="#" underline="none" >Schedules</Link>
                            <Link href="#" underline="none" >Contact Us</Link>
                        </Stack>
                        <Stack direction="row" spacing={1} sx={{fontFamily: 'Source Sans Pro'}}>
                            <Tooltip title="search">
                                <IconButton aria-label="search">
                                    <SearchIcon sx={{color: '#6A0000'}} />
                                </IconButton>
                            </Tooltip>
                            <Button variant="text" sx={{color: '#09B451'}}>Login</Button>
                            <Button variant="contained" sx={{backgroundColor: '#09B451',
                                                            '&:hover': {
                                                                backgroundColor: 'transparent',
                                                                border: '1px solid #09B451',
                                                                color: '#09B451'
                                                            }}} >Register</Button>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </Box>
    )
}


export default Navbar