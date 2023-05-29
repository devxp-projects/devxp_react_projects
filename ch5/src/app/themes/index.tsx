import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: 'Roboto',
        h1: {
            fontWeight: 700,
            fontSize: '1.25rem',
            '@media (max-width:240px)': {
                wordBreak: "break-all"
            },
        },
        h2: {
            fontWeight: 700,
            '@media (max-width:240px)': {
                wordBreak: "break-all"
            },
        },
        h4: {
            fontWeight: 500,
            fontSize: '0.75rem',
            '@media (max-width:240px)': {
                wordBreak: "break-all"
            },
        },
        subtitle1: {
            fontWeight: 600,
            fontSize: '0.8125rem',
            '@media (max-width:240px)': {
                wordBreak: "break-all"
            },
        },
        subtitle2: {
            fontWeight: 400,
            fontSize: '0.8125rem',
            '@media (max-width:240px)': {
                wordBreak: "break-all"
            },
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 429,
            md: 1024,
            lg: 1200,
            xl: 1536,
        },
    },
    components: {
        MuiInput: {
            styleOverrides: {
                root: {
                    '&::before, &::after, :hover:not(.Mui-disabled, .Mui-error):before': {
                        borderBottom: '0',
                    },
                },
            },
        },
        MuiGrid: {
            styleOverrides: {
                root: {
                    flexWrap: 'nowrap',
                    margin: 0,
                    width: 'auto',
                    ">.MuiGrid-item": {
                        padding: 0
                    },
                    '@media (max-width:240px)': {
                        flexDirection: "column",
                        alignItems: "stretch"
                    },
                }
            }
        },
    },
    palette: {
        primary: {
            main: "#4B465C",
        }
    }
})
