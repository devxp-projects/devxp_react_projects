import { Box, Button, Grid, Typography } from "@mui/material"
import { promotions } from "../configs/app"
import { CardProps } from "../types/components.types"
import { baseStyle } from "./Layout"
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
// import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';

export const Card = (
    {
        title, bgImage, date,
        voucherDiscount, deadline,
        fundedPortion, countDown,
        timeBg, approved, pending, rejected,
    }: CardProps
) => {
    return (
        <Box
            sx={{
                ...baseStyle,
                borderRadius: "8px",
                background: "#FFFFFF",
                justifyContent: "space-between",
            }}
        >
            <Typography variant="h2" fontSize={"0.75rem"} color={"#4A4B53"} >{title}</Typography>
            <Grid container gap={"1rem"} justifyContent={"space-between"} sx={{ flexDirection: { xs: "column", md: "row" } }} >
                <Grid
                    container item spacing={3}
                    gap={"5%"}
                    sx={{
                        background: `url(${bgImage}) center no-repeat`,
                        backgroundSize: "cover",
                        justifyContent: "center", alignItems: "center",
                        padding: "2rem !important",
                        borderRadius: "8px",
                        width: { md: "50%" }
                    }}
                >
                    <Grid container flexDirection={"column"} alignItems={"center"}>
                        <Grid container item>
                            <Typography
                                variant="h2" fontSize={"1.543125rem"} textAlign={"center"} padding={"5%"}
                                borderRadius={"8px"} sx={{ background: timeBg }}
                            >
                                {countDown?.days}
                            </Typography>
                            <Typography variant="h2" fontSize={"1.543125rem"} textAlign={"center"}>:</Typography>
                        </Grid>
                        <Typography variant="subtitle2" fontSize={"0.495rem"}>Days</Typography>
                    </Grid>

                    <Grid container flexDirection={"column"} alignItems={"center"}>
                        <Grid container item>
                            <Typography
                                variant="h2" fontSize="1.543125rem" textAlign={"center"} padding={"5%"} borderRadius={"8px"} sx={{ background: timeBg }}
                            >
                                {countDown?.hours}
                            </Typography>
                            <Typography variant="h2" fontSize={"1.543125rem"} textAlign={"center"}>:</Typography>
                        </Grid>
                        <Typography variant="subtitle2" fontSize={"0.495rem"}>Hours</Typography>
                    </Grid>

                    <Grid container flexDirection={"column"} alignItems={"center"}>
                        <Typography
                            variant="h2" fontSize={"1.543125rem"} textAlign={"center"} padding={"5%"} borderRadius={"8px"} sx={{ background: timeBg }}
                        >
                            {countDown?.minutes}
                        </Typography>
                        <Typography variant="subtitle2" fontSize={"0.495rem"}>Mins</Typography>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        ...baseStyle, padding: "0", gap: "0.5rem",
                        background: "none", width: { md: "50%" },
                    }}
                >
                    <Grid container alignItems="center" gap={"0.5rem"}>
                        <CalendarMonthOutlinedIcon htmlColor="#B5B5B5" />
                        <Typography variant="subtitle2" fontSize={"0.5625rem"} color={"#363740"}>{date}</Typography>
                    </Grid>
                    <Grid container alignItems="center" gap={"0.5rem"}>
                        <DiscountOutlinedIcon htmlColor="#B5B5B5" />
                        <Typography variant="subtitle2" fontSize={"0.5625rem"} color={"#363740"}>
                            Voucher discount: {voucherDiscount}
                        </Typography>
                    </Grid>
                    <Grid container alignItems="center" gap={"0.5rem"}>
                        {/* <ChecklistOutlinedIcon htmlColor="#B5B5B5" /> */}
                        <Typography variant="subtitle2" fontSize={"0.5625rem"} color={"#363740"}>
                            Registration until: {deadline}
                        </Typography>
                    </Grid>
                    <Grid container alignItems="center" gap={"0.5rem"}>
                        <StyleOutlinedIcon htmlColor="#B5B5B5" />
                        <Typography variant="subtitle2" fontSize={"0.5625rem"} color={"#363740"}>
                            Seller funded portion: {fundedPortion} out of the discount
                        </Typography>
                    </Grid>
                    <Grid container alignItems={"center"} gap={"0.5rem"} justifyContent={"space-between"} >
                        <Typography variant="subtitle2" fontSize={"0.5625rem"} color={"#363740"}>
                            Seller: {fundedPortion}
                        </Typography>
                        <Typography variant="subtitle2" fontSize={"0.5625rem"} color={"#363740"}>
                            Products: {fundedPortion}
                        </Typography>
                    </Grid>
                </Box>
            </Grid>
            <Button
                variant="contained" disableElevation
                sx={{
                    fontSize: "0.9375rem", textTransform: "unset"
                }}
                onClick={() => console.log("Be kind, there is nothing we have that we were not given")}
            >
                Join the Promotion
            </Button>
            <Grid
                container justifyContent={"space-between"} gap={"0.5rem"}
                sx={{ flexDirection: { xs: "column", md: "row" } }}
            >
                <Grid container item gap={"0.4rem"} alignItems={"center"} justifyContent={"space-between"}>
                    <Typography variant="h4" fontSize={"0.615625rem"} color={"#37CB79"}>Approved Deals</Typography>
                    <Typography
                        variant="h4" fontSize={"0.615625rem"} padding={"5%"}
                        border={"0.692308px solid #37CB79"} borderRadius={"2.76923px"}
                    >
                        {approved}
                    </Typography>
                </Grid>
                <Grid container item gap={"0.4rem"} alignItems={"center"} justifyContent={"space-between"}>
                    <Typography variant="h4" fontSize={"0.615625rem"} color={"#FF9F43"} >Pending Deals</Typography>
                    <Typography
                        variant="h4" fontSize={"0.615625rem"} padding={"5%"}
                        border={"0.692308px solid #FF9F43"} borderRadius={"2.76923px"}
                    >
                        {pending}
                    </Typography>
                </Grid>
                <Grid container item gap={"0.4rem"} alignItems={"center"} justifyContent={"space-between"}>
                    <Typography variant="h4" fontSize={"0.615625rem"} color={"#EA5455"} >Rejected Deals</Typography>
                    <Typography
                        variant="h4" fontSize={"0.615625rem"} padding={"5%"}
                        border={"0.692308px solid #EA5455"} borderRadius={"2.76923px"}
                    >
                        {rejected}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export const PromotionalCards = () => {
    return (
        <Box sx={{ ...baseStyle, padding:0, paddingLeft: "10px", height: "100vh", overflow: "auto" }} className="scroll-y">
            {
                promotions.map((promotion, key) => {
                    return (
                        <Card
                            key={key}
                            title={promotion.title}
                            bgImage={promotion.bgImage}
                            date={promotion.date}
                            voucherDiscount={promotion.voucherDiscount}
                            deadline={promotion.deadline}
                            fundedPortion={promotion.sellerFundedPortion}
                            countDown={promotion.countDown}
                            timeBg={promotion.timeColor}
                            approved={promotion.approved}
                            pending={promotion.pending}
                            rejected={promotion.rejected}
                        />
                    )
                })
            }
        </Box>
    )
}