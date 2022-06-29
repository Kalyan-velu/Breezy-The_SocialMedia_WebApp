import React, {useState} from 'react'
import AddIcon from '@mui/icons-material/Add';
import {HomeIcon} from "@heroicons/react/solid"
import {Link} from "react-router-dom";
import {
    AccountCircle,
    AccountCircleOutlined,
    HomeOutlined,
    Notifications,
    NotificationsOutlined
} from "@mui/icons-material";
import {Container, ImageContainer, Logo, NavMenu, RightContainer, Wrapper} from "../../styledComponents/HeaderStyled";

const Header = () => {
    const [tab, setTab] = useState("/")


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

                        <Link to={'/notifications'} onClick={() => setTab('/notifications')}>
                            {
                                tab === "/notifications" ? <Notifications/> : <NotificationsOutlined/>
                            }
                        </Link>

                        <Link to={'/user/account'} onClick={() => setTab('/account')}>
                            {
                                tab === "/user/account" ? <AccountCircle/> : <AccountCircleOutlined/>
                            }
                        </Link>

                    </NavMenu>
                </RightContainer>
            </Wrapper>
        </Container>
    )
}

export default Header