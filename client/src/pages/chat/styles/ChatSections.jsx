import Box from "@mui/material/Box";
import {styled as muiStyled} from "@mui/material/styles";

export const ChatPageContainer = muiStyled("div")(({theme}) => ({
  display: "grid",
  backgroundColor: theme.palette.secondary.main,
  boxShadow: "2px -2px 8px 8px rgba(190,179,179,0.75)",
  color: theme.palette.text.primary,
  borderRadius: "5px",
  zIndex: "99",
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "430px auto",
    maxWidth: "72rem",
  },
  margin: "0 auto",
}))

export const ChatSections = muiStyled("div")(({theme}) => ({
  margin: "0 auto",
  width: "100%",
}))

export const ChatContainer = muiStyled("div")(({theme}) => ({
  width: "100%",
  height: "82vh",

  "&a": {
    textDecoration: "none"
  }

}))

export const ChatSection = muiStyled("div")(({theme}) => ({
  margin: "0 auto",
  width: "100%"
}))

export const ChatHeader = muiStyled("div")(({theme}) => ({
  width: "100%",
  height: "63px",
  display: "flex",
  backgroundColor: theme.palette.secondary.main,
  justifyContent: "space-around",
  alignItems: "center",
  borderBottom: "1px solid #E0E0E0",
  zIndex: "19",
}))

export const ChatsContainer = muiStyled(Box)({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'top',
  overflowY: 'auto',
  overflowX: 'hidden',
  '@media(max-width: 480px)': {
    width: '100%'
  }
})
export const ChatsUserContainer = muiStyled(Box)({
  width: '100%',
  height: '60px',
  display: 'flex',
  alignItems: "center",
  '&:hover': {
    zIndex: '99',
    cursor: 'pointer',
    backgroundColor: '#aea7c3',
    fontSize: "26px"
  },
})

export const ChatUserList = muiStyled("div")(({theme}) => ({
  display: "flex",
  alignItems: "center",
  margin: "10px",
  width: "100%",

  "&a": {
    textDecoration: "none",
    fontFamily: "'Poppins', sans-serif",
    marginLeft: "10px",
  }
}))


export const ChatUserDetails = muiStyled("div")(({theme}) => ({
  display: "flex",
  alignItems: "center",
  margin: "inherit",
  width: "100%",
}))


export const ChatContent = muiStyled("div")(({theme}) => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  justifyContent: "left",
  paddingLeft: "10px"
}))

export const ChatBoxScroll = muiStyled("div")(({theme}) => ({
  width: "100%",
  overflowY: "auto",
  overflowX: "hidden",
}))