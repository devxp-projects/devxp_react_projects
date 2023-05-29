import { useContext, useState } from "react";
import { Box, Container, Grid, ThemeProvider, useMediaQuery } from "@mui/material";
import Sidebar from "./Sidebar";
import Announcement from "./Announcement";
import { theme } from "../themes";
import SalesSummaryRow from "../SalesSummaryRow/SalesSummaryRow";
import { TopNav } from "./TopNav";
import { Context } from "../context/Context";
import { SearchResults } from "./SearchResults";
import { PromotionalCards } from "./PromotionalCards";
import FirstRowCards from "../FirstRowCards/FirstRowCards";
import { use } from "chai";

export const baseStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    background: "#DBDADE",
    flexGrow: 1,
    padding: "2rem",
};

const Layout = () => {
    const isDesktop = useMediaQuery("(min-width: 850px)");
    const [openSidebar, setOpenSidebar] = useState(true);
    const { showSearchResults } = useContext(Context);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: "flex", backgroundColor: "#DBDADE" }}>
                <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

                <Box
                    sx={{
                        ...baseStyle,
                        justifyContent: showSearchResults && "center",
                        alignItems: showSearchResults && "center",
                        pointerEvents: showSearchResults ? "none" : "unset",
                    }}>
                    {showSearchResults && <SearchResults />}
                    {!showSearchResults && <TopNav />}
                    <Box
                        sx={{
                            ...baseStyle,
                            padding: "0",
                            flexDirection: "row",

                            "@media (max-width: 850px)": { flexDirection: "column-reverse" },
                        }}>
                        <Box sx={{ ...baseStyle, padding: "0" }}>
                            <Grid container flexDirection={isDesktop ? "row" : "column"}>
                                <Grid item sm={12} md={9} lg={9} xl={9} flexDirection="column" sx={{ gap: "2rem" }}>
                                    <FirstRowCards />
                                    <Box sx={{ paddingBlock: "1.2rem" }}>
                                        {!showSearchResults && <SalesSummaryRow />}
                                    </Box>
                                    {!showSearchResults && <Announcement />}
                                </Grid>
                                <Grid item sm={12} md={4} lg={4} xl={4}>
                                    {!showSearchResults && <PromotionalCards />}
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Layout;
