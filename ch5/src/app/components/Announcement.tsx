import React, { useState } from "react";
import { Icons, announcements } from "../configs/app";
import { Card } from "./Card";
import { Column, Row } from "./Flex";
import { H1, H4, Text } from "./Typography";
import { Search } from "./Search";

const Announcements = () => {
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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        const filteredAnnouncements = announcements.filter((announcement) =>
            announcement.title.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setShowingAnnouncements(filteredAnnouncements.slice(0, tabSize));
    };

    return (
        <Card borderRadius={0.5}>
            <Row padding={2} borderBottom="1px solid #DBDADE;" alignItems="center" justifyContent="space-between" >
                <H1>Announcements</H1>
                <Row>
                    <Search placeholder="Search" onChange={handleInputChange} />
                    <img src={Icons.hamburger} alt="hamburger-menu"></img>
                </Row>
            </Row>
            {showingAnnouncements.map((update, i) => {
                return (
                    <Row key={i} justifyContent="space-between" alignItems="center" gap={2} padding={2} borderBottom="1px solid #DBDADE">
                        <Text color={"#DBDADE"}>{update.date}</Text>
                        <Column width={"100%"}>
                            <H4>{update.title}</H4>
                            <H4>{update.description}</H4>
                        </Column>
                        <img src={Icons.unread} alt="unread icon"></img>
                    </Row>
                )
            })}
            <Row alignItems="center" justifyContent="space-between" padding={2} borderBottom="1px solid #DBDADE" >
                <Text fontWeight={400} color="#979797" >Showing {start + 1} to {(showingAnnouncements.length < tabSize) ? start + showingAnnouncements.length : end} of {announcements.length} </Text>
                <Row alignItems="center" gap={0.75} >
                    <img src={Icons.previous} alt="previous icon" onClick={handlePrev} ></img>
                    <img src={Icons.next} alt="next icon" onClick={handleNext}></img>
                </Row>
            </Row>
        </Card >
    );
};

export default Announcements;
