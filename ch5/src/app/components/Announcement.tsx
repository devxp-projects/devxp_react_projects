import React, { useState } from "react";
import { Icons, announcements } from "../configs/app";
import { Search } from "./Search";
import { Container, Grid, Typography } from "@mui/material";

const Announcement = () => {
    const tabSize = 4;
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(tabSize);
    const [showingAnnouncements, setShowingAnnouncements] = useState(
        announcements.slice(start, end)
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [searchValue, setSearchValue] = useState("");

    const handleNext = () => {
        if (end >= announcements.length) {
            return;
        }
        setStart(start + tabSize);
        setEnd(end + tabSize);
        setShowingAnnouncements(
            announcements.slice(start + tabSize, end + tabSize)
        );
    };

    const handlePrev = () => {
        if (start === 0) {
            return;
        }
        setStart(start - tabSize);
        setEnd(end - tabSize)
        setShowingAnnouncements(
            announcements.slice(start - tabSize, end - tabSize)
        );
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchValue(e.target.value);
        const filteredAnnouncements = announcements.filter((announcement) =>
            announcement.title.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setShowingAnnouncements(filteredAnnouncements.slice(0, tabSize));
    };

    return (
        <Container maxWidth={false} disableGutters sx={{ borderRadius: "0.5rem", background: "#FFFFFF"}}>
            <Grid container spacing={2} sx={{ padding: '1rem', gap: { xs: "1rem", sm: '2rem' }, borderBottom: "1px solid #DBDADE", alignItems: { xs: "stretch", sm: "center" }, justifyContent: "space-between", flexDirection: { xs: "column", sm: "row" } }} >
                <Grid>
                    <Typography variant="h1">Announcements</Typography>
                </Grid>
                <Grid container spacing={2} sx={{ width: { xs: '100%', sm: '50%' }, alignItems: "center", flexDirection: "row !important;" }} >
                    <Grid item sx={{ width: '100%', }}>
                        <Search onChange={handleInputChange} placeholder="Search" padding="0 0.5rem" border="1px solid #DBDADE" borderRadius={4} width={"inherit"} />
                    </Grid>
                    <Grid item>
                        <img src={Icons.hamburger} alt="hamburger-menu"></img>
                    </Grid>
                </Grid>
            </Grid>
            {
                showingAnnouncements.map((update, i) => {
                    return (
                        <Grid container key={i} spacing={3} sx={{ padding: "1rem", borderBottom: "1px solid #DBDADE", alignItems: "center", justifyContent: "space-between", gap: '2rem' }}>
                            <Grid item >
                                <Typography variant="subtitle1" color={"#DBDADE"}>{update.date}</Typography>
                            </Grid>
                            <Grid item sx={{ width: '100%' }} >
                                <Typography variant="h4">{update.title}</Typography>
                                <Typography variant="h4">{update.description}</Typography>
                            </Grid>
                            <Grid item >
                                <img src={Icons.unread} alt="unread icon"></img>
                            </Grid>
                        </Grid>
                    )
                })
            }
            <Grid container spacing={2} sx={{ alignItems: "center", justifyContent: "space-between", padding: '1rem', borderBottom: "1px solid #DBDADE" }} >
                <Grid item>
                    <Typography variant="subtitle2" color={"#979797"} >Showing {start + 1} to {(showingAnnouncements.length < tabSize) ? start + showingAnnouncements.length : end} of {announcements.length} </Typography>
                </Grid>
                <Grid container item sx={{ alignItems: "center", gap: "0.75rem" }} >
                    <img src={Icons.previous} alt="previous icon" onClick={handlePrev} style={{ width: "fit-content" }} ></img>
                    <img src={Icons.next} alt="next icon" onClick={handleNext} style={{ width: "fit-content" }}></img>
                </Grid>
            </Grid>
        </Container >
    );
};

export default Announcement;
