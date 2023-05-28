import { Avatar, Badge, Grid, Typography } from "@mui/material"
import { Search } from "./Search"
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useContext, useRef } from "react";
import { Context } from "../context/Context";

export const TopNav = () => {

    const ref = useRef<HTMLInputElement | HTMLTextAreaElement>(null)
    const { setShowSearchResults } = useContext(Context);

    const handleSearchResultsBox = () => {
        ref?.current?.blur();
        setShowSearchResults(true);
    }

    return (
        <Grid
            container spacing={2} justifyContent={"space-between"} padding={"1rem"}
            sx={{
                background: "#FFFFFF", borderRadius: "8px", flexDirection: { xs: "column-reverse", md: "row" },
                gap: { xs: "1rem", md: "4rem" }, alignItems: { xs: "stretch", sm: "flex-end", md: "center" }
            }}
        >
            <Grid item width={"100%"}>
                <Search
                    placeholder='Search' padding="0 0.5rem"
                    border="1px solid #DBDADE" borderRadius={4}
                    width={"inherit"} maxWidth="64rem"
                    onFocus={() => handleSearchResultsBox()}
                    inputRef={ref}
                />
            </Grid>
            <Grid container spacing={3} gap={"2rem"} alignItems={"center"}>
                <Grid item>
                    <Badge
                        sx={{ "& .MuiBadge-dot": { background: "#EA5455" } }}
                        variant="dot"
                        overlap="circular"
                    >
                        <NotificationsNoneOutlinedIcon htmlColor="#979797" />
                    </Badge>
                </Grid>
                <Grid direction={"column"} alignItems={"flex-end"} container item>
                    <Grid item>
                        <Typography
                            variant="h2"
                            fontSize={"0.75rem"}
                            color={"primary"}
                            width={"max-content"}
                        >
                            Puma Official Store
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="subtitle1"
                            fontSize={"0.625rem"}
                            color={"#979797"}
                            width={"max-content"}
                        >
                            Change Seller
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Avatar />
                </Grid>
            </Grid>
        </Grid>
    )
}