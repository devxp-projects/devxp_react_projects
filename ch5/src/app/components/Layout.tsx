import React, { useState } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import Sidebar from './Sidebar';
import Announcement  from './Announcement';
import { theme } from '../themes';
const Layout = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Sidebar */}
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      {/* Content Area */}
      <Box
        sx={{
          backgroundColor: '#DBDADE',
          height: '100vh',
          flexGrow: 1,
          padding: '10px 20px',
        }}
      >
        {/* Navigation bar */}

        {/* Main */}
        <ThemeProvider theme={theme} >
          <Announcement />
        </ThemeProvider >
      </Box>
    </Box>
  );
};

export default Layout;
