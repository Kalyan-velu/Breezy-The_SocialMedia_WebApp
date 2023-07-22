import Box from "@mui/material/Box"
import {styled} from "@mui/material/styles"
import Typography from "@mui/material/Typography"

export const AuthWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  width: '100%',
  height: '100%',
  m: '15px 0 15px 0',
  borderRadius: '10px',
  borderWidth: '1px'
}))

export const AuthGrid = styled("div")(({theme}) => ({
  background: "rgba(155, 133, 209, 0.2)",
  height: 'fit-content',
  margin: "auto 20%",
  backdropFilter: "blur(5px)",
  borderRadius: "0.4rem",
  boXShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  border: "1px solid rgba(155, 133, 209, 0.3);",

}))
export const AuthHeader = styled(Typography)(({theme}) => ({
  fontFamily: theme.typography.fontFamily[0],
  textAlign: "center",
  fontWeight: "800"
}))