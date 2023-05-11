import React, { useState } from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
const Layout = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Sidebar */}
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      {/* Content Area */}
      <Box>
        {/* Navigation bar */}

        {/* Maain */}
      </Box>
    </Box>
  );
};

export default Layout;
