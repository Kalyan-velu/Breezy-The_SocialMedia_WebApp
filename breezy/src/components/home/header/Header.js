import React, {useState} from 'react'
import {IconButton} from "@mui/material";
import styled from "styled-components";
import AddIcon from '@mui/icons-material/Add';
import {HomeIcon, SearchIcon} from "@heroicons/react/solid"
import {Link} from "react-router-dom";
import {
    AccountCircle,
    AccountCircleOutlined,
    HomeOutlined,
    Notifications,
    NotificationsOutlined
} from "@mui/icons-material";

const Header = () => {
    const [tab, setTab] = useState("/")


    console.log(tab)
    return (
        <Container>
            <Wrapper>
                <ImageContainer>
                    <Logo>
                        <span>Breezy</span>
                    </Logo>
                </ImageContainer>
                <InputContainer>
                    <Searchs/>
                    <input type="text" placeholder="Search Friends"/>
                </InputContainer>
                <IconButtons>
                    <SearchIcons/>
                </IconButtons>
                <RightContainer>
                    <NavMenu>
                        <Link to={'/newpost'} onClick={() => setTab('/newpost')}>
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
                        <Link to={'/account'} onClick={() => setTab('/account')}>
                            {
                                tab === "/account" ? <AccountCircle/> : <AccountCircleOutlined/>
                            }
                        </Link>
                    </NavMenu>

                </RightContainer>
            </Wrapper>
        </Container>
    )
}

export default Header

const Container = styled.div`
	border-radius: 0 0 10px 10px;
	padding: 10px 10px 0.5rem;
	position:sticky;
	z-index: 9999;
	top: 0;
	background: #151e35;
	width: 100%;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 1), 0 2px 4px -1px rgba(0, 0, 0, 6);
`
const Wrapper = styled.div`
 display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
  @media(
    min-width: 1024px ) 
  {
    max-width: 72rem ;
    margin:0 auto;
  }
)`
const Logo = styled.div`
  	color: antiquewhite;
	span{
	font-family:'Mochiy Pop P One', 'sans-serif'
}`
const RightContainer = styled.div`
display: flex;
  align-items: center;
`

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.75rem;
  img {
    cursor: pointer;
    height: 2.25rem;
  }
`;

const InputContainer = styled.div`
  display: none;
  margin-left: 0.75rem;
  @media (min-width: 768px) {
    display: inline-flex;
  }
  align-items: center;
  padding: 0.75rem 1.75rem;
  background-color: rgba(209, 213, 219, 1);
  border-radius: 9999px;
  input {
    border: none;
    :focus {
      outline: none;
    }
    outline: none;
    background-color: transparent;
    color: rgba(107, 114, 128, 1);
  }
`;

const Searchs = styled(SearchIcon)`
  height: 1.20rem;
  color: rgba(107, 114, 128, 1);
  margin-right: 0.5rem;
  pointer-events: none;
`;

const IconButtons = styled(IconButton)`
  @media (min-width: 768px) {
    opacity: 1;
    display: none;
    pointer-events: none;
  }
  margin-right: 0.5rem;
`;

const SearchIcons = styled(SearchIcon)`
  height: 1.20rem;
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
  color: rgba(107, 114, 128, 1);
`;

const NavMenu = styled.div`
	display: none;
	@media (min-width: 768px) {
		display: flex;
		align-items: center;
	}

	a {
		width: 2vmax;
		height: 1vmax;
		margin: 1vmax 2vmax;
	}

	a > svg {
		font-size: 2vmax;
		transition: all 0.5s;
		color: rgba(225, 204, 204, 0.44);
	}

	a > svg:hover {
		color: #55749e;
		transform: scale(1.2);
	}

	@media screen and (max-width: 600px) {
	a{
		width:8vw;
		height:8vw;
		margin:2vw 8vw;
	}
		a >svg {
			font-size:8vw;
		}
	}
`;