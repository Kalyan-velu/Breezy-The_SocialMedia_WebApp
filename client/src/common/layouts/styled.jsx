import Container from "@mui/material/Container"
import {styled} from "@mui/material/styles";

export const MainContainer = styled(Container)(({theme, isAuthenticated}) => ({
  width: "xs",
  color: theme.palette.text.primary,
  height: "100vh",
  ...(isAuthenticated && {
    height: "calc(100vh - 64px)",
    marginTop: "64px"
  })
}))