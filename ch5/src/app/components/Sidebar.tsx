import { Box } from '@mui/material';
import React from 'react';
import Logo from '../assets/logo.png';
import sideNavToggle from '../assets/icons/sideNavToggle.svg';
const Sidebar = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: 255,
        backgroundColor: '#363740',
        display: 'flex',
        flexDirection: 'column',
        padding: '12px 0px 43px',
        alignItems: 'flex-end',
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0px 20px',
          gap: '16px',
        }}
      >
        <Box
          component="img"
          sx={{
            width: '24px',
          }}
          alt="Logo"
          src={sideNavToggle}
        />
        <Box
          component="img"
          sx={{
            width: '100%',
          }}
          alt="Logo"
          src={Logo}
        />
      </Box>
    </Box>
  );
};

export default Sidebar;
