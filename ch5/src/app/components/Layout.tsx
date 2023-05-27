import { useContext, useEffect, useRef, useState } from 'react';
import { Box, Grid, ThemeProvider, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import Announcement from './Announcement';
import { theme } from '../themes';
import SalesSummaryRow from '../SalesSummaryRow/SalesSummaryRow';
import { TopNav } from './TopNav';
import { Context } from '../context/Context';
import { Search } from './Search';
import { announcements } from '../configs/app';
import { DummyDataProps } from '../types/app.types';

const Layout = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const [searchResults, setSearchResults] = useState<DummyDataProps>([]);
  // eslint-disable-next-line
  const [searchValue, setSearchValue] = useState("");
  const { showSearchResults, setShowSearchResults } = useContext(Context);
  const ref = useRef<HTMLInputElement | HTMLTextAreaElement>(null)

  useEffect(() => {
    ref?.current?.focus();
  })

  const handleSearchResultsBox = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string
  ) => {
    switch (id) {
      case "onChange":
        setSearchValue(e.target.value);
        return setSearchResults(
          announcements.filter(announcement => announcement.title.toLowerCase().includes(e.target.value.toLowerCase()))
        )
      case "onBlur":
        return setShowSearchResults(false);
      default:
        return null;
    }
  }

  return (
    <ThemeProvider theme={theme} >
      <Box sx={{ display: 'flex', backgroundColor: '#DBDADE', }}>
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            backgroundColor: '#DBDADE',
            flexGrow: 1,
            padding: '2rem',
            justifyContent: showSearchResults && "center",
            alignItems: showSearchResults && "center",
            pointerEvents: showSearchResults ? "none" : "unset",
          }}
        >
          {
            showSearchResults &&
            <Box
              sx={{
                borderRadius: "8px",
                background: "#F5F5F5",
                padding: "2rem",
                pointerEvents: "all",
                height: "50vh",
                width: "50vw",
                overflow: "auto",
              }}
            >
              <Search
                placeholder='Search' padding="0 0.5rem"
                border="1px solid #DBDADE" borderRadius={4}
                width={"inherit"} maxWidth="56.8125rem"
                onChange={(e) => handleSearchResultsBox(e, "onChange")}
                onBlur={(e) => handleSearchResultsBox(e, "onBlur")}
                inputRef={ref}
              />
              <Box>
                {searchResults.map((result, key) => {
                  return (
                    <Grid container key={key} spacing={2} sx={{ padding: "1rem", borderBottom: "1px solid #DBDADE", alignItems: "center", justifyContent: "space-between", gap: '2rem' }}>
                      <Grid item >
                        <Typography variant="subtitle1" color={"#DBDADE"}>{result.date}</Typography>
                      </Grid>
                      <Grid item sx={{ width: '100%' }} >
                        <Typography variant="h4">{result.title}</Typography>
                        <Typography variant="h4">{result.description}</Typography>
                      </Grid>
                    </Grid>
                  )
                })}
              </Box>
            </Box>
          }
          {
            !showSearchResults && <TopNav />
          }
          {
            !showSearchResults && <SalesSummaryRow />
          }
          {
            !showSearchResults && <Announcement />
          }
        </Box>
        {
          !showSearchResults &&
          <Box
            sx={{
              padding: "2rem",
              backgroundColor: '#DBDADE',
            }}
          >
            {/* The RHS of the dashboard */}
          </Box>
        }
      </Box>
    </ThemeProvider >
  );
};

export default Layout;
