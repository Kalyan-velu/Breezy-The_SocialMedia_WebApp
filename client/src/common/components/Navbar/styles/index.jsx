import {Container as AppBarContainer, Toolbar as AppToolbar} from "@mui/material"
import AppBar from '@mui/material/AppBar';
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton";
import {styled} from "@mui/material/styles"
import Typography from "@mui/material/Typography"

export const Container = styled(AppBar)(({theme}) => ({
  backgroundColor: "transparent",
  // color:theme.palette.primary.main,
  maxHeight: "64px"
}))

export const Wrapper = styled(AppBarContainer)(({theme}) => ({
  // backgroundColor: theme.palette.background.default
}))
export const Toolbar = styled(AppToolbar)(() => ({}))

export const Logo = styled("div")(({}) => ({}))

export const MenuContainer = styled(Box)(({theme}) => ({
  flexGrow: 0,
  display: {xs: 'flex', md: 'flex'},
  justifyContent: "space-between",
  // background:theme.palette.background.default,
  // color:"#000"
}))
export const MenuItemTypography = styled(Typography)(({theme}) => ({}))
export const Icon = styled(IconButton)(({theme}) => ({
  color: "inherit"
}))