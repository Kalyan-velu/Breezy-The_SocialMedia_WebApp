import {styled} from "@mui/material/styles";

export const Container = styled("div")(({theme}) => ({
  width: "60%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: theme.palette.secondary.main,
  margin: "3rem auto",
  zIndex: "59",
  borderRadius: "0.4rem",
  boxShadow: "2px -2px 8px 8px rgba(190,179,179,0.75)",
  color: theme.palette.text.primary,
  [theme.breakpoints.down("sm")]: {
    width: "100%"
  }
}))


export const PostHeader = styled("div")(({theme}) => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "5px 10px 10px"
}))


export const PostDetails = styled("div")(({theme}) => ({
  textDecoration: "none",
  color: "black",
  margin: "5px 10px 10px",

  '&a': {
    textDecoration: "none",
    color: "black",
    margin: "1max"
  }
}))
export const List = styled("div")(({theme}) => ({
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
  '&a': {
    textDecoration: "none",
    marginLeft: '20px',
  }
}))


export const PostImg = styled("div")(({theme}) => ({
  width: 'inherit',

  '& .img': {
    width: '100%',
    objectFit: 'contain'
  }
}))

export const PostText = styled("div")(({theme}) => ({
  width: "100%",
  margin: "5px 10px 10px",
  textAlign: "center",
  fontSize: "14px",
  lineHeight: "1.5",
  color: "inherit",
}))

export const PostFooterFirst = styled("div")(({theme}) => ({
  display: "flex",
  justifyContent: "space-around",
}))

export const PostSection = styled("div")(({theme}) => ({
  width: "100%"
}))