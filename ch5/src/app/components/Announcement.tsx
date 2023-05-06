import { useState } from "react"
import { Dummy, Icons } from "../configs/app"
import { Card } from "./Card"
import { Column, Row } from "./Flex"
import { H1, H4, Text } from "./Typography"

export const Announcement = () => {
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(4);
    const data = Dummy.slice(start, end);

    const handleNext = () => {
        if (end >= Dummy.length) {
            return;
        }
        setStart(start + data.length);
        setEnd(end + data.length);
    };

    const handlePrevious = () => {
        if (start === 0) {
            return;
        }
        setStart(start - 4);
        setEnd(end - 4);
    };

    return (
        <Card borderRadius={0.5}>
            <Row padding={2} borderBottom="1px solid #DBDADE;">
                <H1>Announcements</H1>
            </Row>
            {data.map((update, i) => {
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
                <Text fontWeight={400} color="#979797" >Showing {start + 1} to {(data.length < 4) ? start + data.length : end} of {Dummy.length} </Text>
                <Row alignItems="center" gap={0.75} >
                    <img src={Icons.previous} alt="previous icon" onClick={handlePrevious} ></img>
                    <img src={Icons.next} alt="next icon" onClick={handleNext}></img>
                </Row>
            </Row>
        </Card>
    )
}