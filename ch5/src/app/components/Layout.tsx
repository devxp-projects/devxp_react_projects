import { useContext, useState } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import Sidebar from './Sidebar';
import Announcement from './Announcement';
import { theme } from '../themes';
import SalesSummaryRow from '../SalesSummaryRow/SalesSummaryRow';
import { TopNav } from './TopNav';
import { Context } from '../context/Context';
import { SearchResults } from './SearchResults';
import { PromotionalCards } from './PromotionalCards';

export const baseStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  background: '#DBDADE',
  flexGrow: 1,
  padding: '2rem',
}

const Layout = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const { showSearchResults } = useContext(Context);

  return (
    <ThemeProvider theme={theme} >
      <Box sx={{ display: 'flex', backgroundColor: '#DBDADE', }}>
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        <Box
          sx={{
            ...baseStyle,
            justifyContent: showSearchResults && "center",
            alignItems: showSearchResults && "center",
            pointerEvents: showSearchResults ? "none" : "unset",
          }}
        >
          {showSearchResults && <SearchResults />}
          {!showSearchResults && <TopNav />}
          <Box sx={{ ...baseStyle, padding: "0", flexDirection: "row", "@media (max-width: 850px)": {flexDirection: "column-reverse"} }}>
            <Box sx={{ ...baseStyle, padding: "0" }}>
              {!showSearchResults && <SalesSummaryRow />}
              {!showSearchResults && <Announcement />}
            </Box>
            {!showSearchResults && <PromotionalCards />}
          </Box>

        </Box>
      </Box>
    </ThemeProvider >
  );
};

export default Layout;
