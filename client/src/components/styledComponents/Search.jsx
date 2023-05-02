import {InputBase} from "@mui/material";
import { styled as muiStyled, alpha } from '@mui/material/styles';
import styled  from 'styled-components';
import {Box} from "@mui/system";

export const Search = muiStyled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    border:'1px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

export const SearchIconWrapper = muiStyled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    borderRadius:'20px',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledInputBase = muiStyled(InputBase)(({ theme }) => ({
    color: 'inherit',
    border:'2px solid #ced4da',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e1d7d7;
  z-index: 999;
  transition: all 300ms ease-out;
  border-radius: 5px;
  height:inherit;
  width: 500px;
  @media(max-width: 480px){
    max-width: 90%;
  }
`;
export const SearchContent=muiStyled('div')({
    height:"inherit",
    width:'100%',
    padding:'20px',
})
export const SearchHeader=styled.div`
  @media(max-width: 480px){
    max-width: 100%;
    font-size: 24px;
  }
`
export const SearchButton=styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SearchResults=styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    @media(max-width: 480px){
        max-width: 100%;
    }
`
export const SearchResultsContents=muiStyled(Box)({
    width:'90%',
    overflowY:'auto',
    overflowX:'hidden'
})