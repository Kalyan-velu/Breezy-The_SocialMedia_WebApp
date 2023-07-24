import Breezy from "/assets/Logo.svg"
import AccountCircle from '@mui/icons-material/AccountCircle';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import MoreIcon from '@mui/icons-material/MoreVert';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from "@mui/material/Avatar";
import Badge from '@mui/material/Badge';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {alpha, styled, useTheme} from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import ColorModeContext from "../../../app/theme/context";
import {logoutUser} from "../../../features/action/userAction.js"
import {Link, NavLink} from '../link';
import NewPostModal from "../NewPost/NewPostModal.jsx";
import {Container, Icon, Logo, MenuContainer} from "./styles/index.jsx";


const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
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

const StyledBadge = styled(Badge)(({theme}) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));
export default function PrimarySearchAppBar() {
    const theme = useTheme()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector(({app}) => app)
    const colorMode = React.useContext(ColorModeContext);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const logOut = () => {
        handleMenuClose()
        dispatch(logoutUser(navigate))
    }
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>
                <Link sx={{textDecoration: "none"}}
                      to={`/user/${user?._id}`}>
                    Profile
                </Link>
            </MenuItem>
            <MenuItem onClick={logOut}>Log Out</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >

            <NavLink to={"/chat/:id"} className={"na"}>
                <MenuItem>
                    <Icon size="large" aria-label="show 4 new mails" color="inherit">
                        {/*<Badge badgeContent={4} color="error">*/}
                        <MailIcon/>
                        {/*</Badge>*/}
                    </Icon>
                    <p>Messages</p>
                </MenuItem>
            </NavLink>


            <NavLink to={"/chat/:id"} className={"na"}>
                <MenuItem>
                    <Icon size="large" aria-label="show 4 new mails" color="inherit">
                        {/*<Badge badgeContent={4} color="error">*/}
                        <NotificationsIcon/>
                        {/*</Badge>*/}
                    </Icon>
                    <p>Notifications</p>
                </MenuItem>
            </NavLink>
            <MenuItem onClick={handleProfileMenuOpen}>
                <Icon
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle/>
                </Icon>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <MenuContainer sx={{flexGrow: 1, position: "fixed", top: "0", width: "100%", zIndex: 999}}>
            <Container position="static">
                <Toolbar>
                    <Icon
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{mr: 2}}
                        onClick={colorMode.toggleColorMode}
                    >
                        {theme.palette.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
                        {/*<MenuIcon/>*/}
                    </Icon>
                    <Link to={"/"}>
                        <Logo
                            component="div"
                            // sx={{display: {xs: 'none', sm: 'block'}}}
                        >
                            <img height={"50%"} width={"50%"} src={Breezy} alt={"Breezy"}/>
                        </Logo>
                    </Link>
                    <Search sx={{display: {xs: 'none', sm: 'block'}}}>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{'aria-label': 'search'}}
                        />
                    </Search>
                    <MenuContainer sx={{flexGrow: 1}}/>
                    <MenuContainer
                        sx={{display: {xs: 'none', md: 'flex'}, justifyContent: "center", alignItems: "center"}}>
                        <NewPostModal/>

                        <NavLink to={"/"} className={"na"}>
                            <Icon
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <HomeIcon/>
                            </Icon>
                        </NavLink>
                        <NavLink to={"/chat/:id"} className={"na"}>
                            <Icon size="large" aria-label="show 4 new mails" color="inherit">
                                {/*<Badge badgeContent={4} color="error">*/}
                                <MailIcon/>
                                {/*</Badge>*/}
                            </Icon>
                        </NavLink>
                        <NavLink to={"/notification"} className={"na"}>
                            <Icon
                                size="large"
                                aria-label="notifications"
                                color="inherit"
                            >
                                {/*<Badge badgeContent={17} color="error">*/}
                                <NotificationsIcon/>

                                {/*</Badge>*/}
                            </Icon>
                        </NavLink>
                        <Icon
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >

                            <Avatar
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                                src={user.avatar.url}
                                title={"Profile"}
                                alt={user.name}
                            />
                        </Icon>
                    </MenuContainer>
                    <MenuContainer sx={{display: {xs: 'flex', md: 'none'}}}>
                        <NewPostModal/>
                        <Icon
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon/>
                        </Icon>
                    </MenuContainer>
                </Toolbar>
            </Container>
            {renderMobileMenu}
            {renderMenu}
        </MenuContainer>
    );
}