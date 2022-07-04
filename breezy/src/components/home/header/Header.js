import React, {useState} from 'react'
import AddIcon from '@mui/icons-material/Add';
import {HomeIcon, SearchIcon} from "@heroicons/react/solid"
import {Link} from "react-router-dom";
import {
    AccountCircle,
    AccountCircleOutlined,
    HomeOutlined,
    Notifications,
    NotificationsOutlined, SearchOutlined
} from "@mui/icons-material";
import {
    Container,
    ImageContainer,
    Logo,
    NavMenu,
    RightContainer,
    Wrapper
} from "../../styledComponents/HeaderStyled";
import {useSelector} from "react-redux";

const Header = () => {
    const [tab, setTab] = useState("/")
    const{user}=useSelector((state)=>state.user)

    return (
        <Container>
            <Wrapper>

                <ImageContainer>
                    <Logo>
                        <span>Breezy</span>
                    </Logo>
                </ImageContainer>
                <RightContainer>

                    <NavMenu>

                        <Link to={'/NewPost'} onClick={() => setTab('/NewPost')}>
                            <AddIcon/>
                        </Link>

                        <Link to={'/'} onClick={() => setTab('/')}>
                            {
                                tab === "/" ? <HomeIcon/> : <HomeOutlined/>
                            }
                        </Link>
                        <Link to={'/search'} onClick={() => setTab('/search')}>
                            {
                                tab === "/search" ? <SearchIcon/> : <SearchOutlined/>
                            }
                        </Link>

                        <Link to={'/notifications'} onClick={() => setTab('/notifications')}>
                            {
                                tab === "/notifications" ? <Notifications/> : <NotificationsOutlined/>
                            }
                        </Link>

                        <Link to={`/user/${user._id}`} onClick={() => setTab('/account')}>
                            {
                                tab === `/user/${user._id}` ? <AccountCircle/> : <AccountCircleOutlined/>
                            }
                        </Link>

                    </NavMenu>
                </RightContainer>
            </Wrapper>
        </Container>
    )
}

export default Header