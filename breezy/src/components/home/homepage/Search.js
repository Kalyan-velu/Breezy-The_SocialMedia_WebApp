import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {searchUsers} from "../../../features/action/userAction";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import {
    Container, StyledButton,
} from "../../styledComponents/PostModalStyled";
import {CircularProgress, IconButton, Typography} from "@mui/material";
import {
    SearchIconWrapper,
    Search,
    StyledInputBase,
    SearchWrapper,
    SearchHeader,
    SearchContent, SearchButton, SearchResults, SearchResultsContents
} from "../../styledComponents/Search";
import SearchIcon from '@mui/icons-material/Search';
import DialogTitle from "@mui/material/DialogTitle";
import User from "../../profile/User";

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    )}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};
export default function SearchUser(){
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [search, setSearch] = React.useState('');
    const [searchNow, setSearchNow] = React.useState(false);
    const[show,setShow]=React.useState(false)
    const{users,loading, error}=useSelector(state=>state.search)

    const handleClose = () => {
        dispatch({
            type:'clearUsers'
        })
        navigate(-1)
    };
    const submitHandler=()=>{
        setSearchNow(true)
        setShow(true)
    }

    useEffect(()=>{
        dispatch(searchUsers(search))
        setSearchNow(false)
    },[dispatch,search,searchNow])
    return(
        <Container>
            <SearchWrapper>
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}/>
                <SearchHeader>
                    <Typography
                        sx={{
                            fontFamily: ['Dongle', 'sans-serif'],
                            fontWeight:'bold',
                            fontSize:'24px'
                    }}
                        gutterBottom >
                       Search
                    </Typography>
                </SearchHeader>

                <SearchContent>
                    <Search>
                        <SearchIconWrapper>
                            {loading?<CircularProgress/>:
                            <SearchIcon />}
                        </SearchIconWrapper>
                        <StyledInputBase
                            value={search}
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </Search>
                </SearchContent>
                <SearchButton>
                    <StyledButton
                        disabled={loading}
                        onClick={submitHandler}
                        type={"submit"}
                        fullWidth
                        endIcon={<SearchIcon />}
                    >
                        {loading?"Searching..":"Search"}
                    </StyledButton>
                </SearchButton>
                {show?(
                <SearchResults>
                    {loading?(<CircularProgress/>) :null}
                    {error?<Typography
                        sx={{
                            fontFamily: ['Dongle', 'sans-serif'],
                            fontWeight:'bold',
                            fontSize:'24px'
                        }}
                        gutterBottom >
                        {error}
                    </Typography>:null}
                    <SearchResultsContents>
                    {users && users.slice(0, 3).map((user)=>{
                        return(
                            <User
                                key={user._id}
                                userId={user._id}
                                avatar={user.avatar.url}
                                name={user.name}
                            />
                        )
                    })}
                    </SearchResultsContents>
                </SearchResults>):null}
            </SearchWrapper>
        </Container>
    )
}