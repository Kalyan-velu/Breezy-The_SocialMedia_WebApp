import CameraAltOutlined from "@mui/icons-material/CameraAltOutlined";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Input from "@mui/material/Input";
import InputBase from "@mui/material/InputBase";
import {alpha, styled} from '@mui/material/styles'


export const Container = styled("div")(({theme}) => ({
  fontFamily: "'Monoton', cursive",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0, 0, 0, 0.75)",
  transition: "transform 150ms ease-out",
}))


export const Wrapper = styled("div")(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
  zIndex: "999",
  transition: "all 300ms ease-out",
  borderRadius: "5px",
  width: "400px",
}))


export const Camera = styled(CameraAltOutlined)(({theme}) => ({
  height: "1.75rem !important",
  width: "1.5rem !important",
  color: theme.palette.text.primary,
  cursor: "pointer",
  marginTop: "10px",
  textAlign: "center"
}))

export const Header = styled("div")(({theme}) => ({
  margin: "10px",
  display: "grid",
  gridTemplateColumns: "repeat(1 minmax(0, 1fr))",

  "&.div ": {
    marginTop: "10px",
    borderRadius: "99999px",
    backgroundColor: "rgba(220, 98, 80, 1)",
    cursor: "pointer"
  },

  "&.div img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  "&.container": {
    width: "100%",

    "&img": {
      width: " 100%",
      objectFit: " contain",
      cursor: "pointer",
    },
  }
}))


export const Caption = styled("form")(({theme}) => ({
  marginTop: "15px",
  display: "flex",
  flexDirection: "column"
}))


export const StyledInput = styled(Input)(({theme}) => ({
  fontWeight: 'bold',
  fontSize: '15px',
  flex: 1,
  variant: 'Standard',
  padding: '10px',
  width: '100%',
  textAlign: 'center',
  ':focus':
    {
      transition: 'all 0.3s ease-out',
    }
}))


export const StyledButton = styled(Button)(({theme}) => ({
  padding: '10px 0',
  margin: '30px',
  borderRadius: '20px',
  border: 'none',
  backgroundColor: 'rgb(55,93,130)',
  color: 'white',
  pointer: 'pointer',
  '.MuiButton-label': {
    fontSize: '15px',
    fontWeight: 'bold'
  },
  ':hover': {
    transform: 'scale(1.1)',
    transition: 'all 0.3s ease-in-out',
    backgroundColor: 'rgb(55,93,130)',
    color: 'white',
    endIcon: {
      color: 'white'
    }
  }

}))


export const StyledPicButton = styled(Button)(({theme}) => ({
  padding: '10px 0',
  margin: '30px',
  width: '30%',
  borderRadius: '20px',
  border: 'none',
  backgroundColor: 'rgb(55,93,130)',
  color: 'white',
  pointer: 'pointer',
  '.MuiButton-label': {
    fontSize: '15px',
    fontWeight: 'bold'
  },
  ':hover': {
    transform: 'scale(1.1)',
    transition: 'all 0.3s ease-in-out',
    backgroundColor: 'rgb(55,93,130)',
    color: 'white',
    endIcon: {
      color: 'white'
    }
  }

}))

export const BootstrapDialog = styled(Dialog)(({theme}) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
export const BootstrapInput = styled(InputBase)(({theme}) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '100%',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
    '&:hover': {
      borderColor: theme.palette.primary.main,
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
    }
  },
}));