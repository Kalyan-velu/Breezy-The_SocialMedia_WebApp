import {Avatar, Box, Button, styled as muiStyled} from "@mui/material";

export const List = muiStyled("div")(({theme}) => ({
    display: "flex",
    flexDirection: "column",

    alignItems: "center",

    "&div": {
        textDecoration: "none",
        fontFamily: "'Poppins', sans-serif",
        marginLeft: "20px",
    },
}))

export const Component = muiStyled("div")(({theme}) => ({
    display: "flex",
    flexDirection: "row",
    "&a": {
        textDecoration: "none"
    }
}))
export const StyledButtons = muiStyled(Button)({
    
    color: '#111',
})

export const AccountDetails = muiStyled("div")(({theme}) => ({
    display: "inline-block",
    flexDirection: "row",
    textAlign: "center",
}))

export const StyledBox = muiStyled(Box)(({theme}) => ({
    gridColumn: "span 2 /span 2",
    margin: "6rem auto",
    width: "80%",
    backgroundColor: theme.palette.secondary.main,
    padding: "10px",
    display: "grid",
    gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
    zIndex: "59",
    borderRadius: "0.4rem",
    boxShadow: "2px -2px 8px 8px rgba(190,179,179,0.75)",
    color: theme.palette.text.primary,

}))

export const StyledAvatar = muiStyled(Avatar)({
    width: '130px',
    height: '130px',
    borderRadius: '50%',
    margin: '0 auto',
    marginTop: '10px',
    marginBottom: '10px',
})


export const UserContainer = muiStyled(Button)(({theme}) => ({
    width: '95%',
    height: 'auto',
    margin: '10px',
    borderRadius: '10px',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.primary,
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
        transform: 'scale(1.05)',
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer',
    }
}))