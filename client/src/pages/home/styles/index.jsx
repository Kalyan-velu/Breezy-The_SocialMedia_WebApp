import Container from "@mui/material/Container";
import {styled} from '@mui/material/styles'

export const HomeContainer = styled(Container)(({theme, posts = false}) => ({
  width: "xs",
  ...(posts && {
    marginTop: "6rem",
  })
}))