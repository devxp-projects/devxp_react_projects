import { Dummy, Icons } from "../configs/app"
import { Card } from "./Card"
import { Column, Row } from "./Flex"
import { H1, H4, Text } from "./Typography"

export const Announcement = () => {
    return (
        <Card borderRadius={0.5}>
            <Row padding={2} borderBottom="1px solid #DBDADE;">
                <H1>Announcements</H1>
            </Row>
            {Dummy.map((update, i) => {
                return (
                    <Row key={i} justifyContent="space-between" alignItems="center" gap={2} padding={2} borderBottom="1px solid #DBDADE;">
                        <Text color={"#DBDADE"}>{update.date}</Text>
                        <Column>
                            <H4>{update.title}</H4>
                            <H4>{update.description}</H4>
                        </Column>
                        <img src={Icons.unread} alt="unread icon"></img>
                    </Row>
                )
            })}
        </Card>
    )
}