import React from "react";
import { AppBar, Box, Button, Link, IconButton, Stack, Toolbar, Tooltip } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../public/vectors/logo.jsx';
import AnimatedLink from "../components/AnimatedComponent";
 



const Navbar = () => {
    const navColor = {color: 'rgba(64, 64, 64, 0.8)'}
    return (

            <Box sx={{flexGrow: 1}}>
                <AppBar position="static" color="transparent" sx={{boxShadow: 'none'}} >
                    <Toolbar sx={{display: 'flex',
                                justifyContent: 'space-between',
                                margin: '0 0 0 4.8rem',
                                flexWrap: 'wrap'
                             }}>
                        <Stack>
                            <Logo />
                        </Stack>
                        <Stack direction="row" spacing={6} sx={{marginRight: '4rem', 
                                                                fontFamily: 'open sans',
                                                                '& a': navColor 
                                                            }}>
                            <AnimatedLink href="#" name="Home" />
                            <AnimatedLink href="#" name="Courses" />
                            <AnimatedLink href="#" name="Instructors" />
                            <AnimatedLink href="#" name="Schedules" />
                            <AnimatedLink href="#" name="Contact Us" />
                                
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