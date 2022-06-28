import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Avatar, Typography} from "@mui/material";
import './user.css'
import styled from "styled-components";
import {getMyPosts, logOutUser} from "../../features/action/userAction";

const UserProfile = () => {
    const {user} = useSelector(state => state.user)
    const dispatch=useDispatch()
    const handleClick = () => {
        dispatch(logOutUser())
    }
   useEffect(() => {
        dispatch(getMyPosts())
    }, [dispatch])
    return (
        <Containers>
            <Section>
                <Header>
                    <List>
                        <Avatar
                            src={`https://images.unsplash.com/photo-1655940646108-ff6d32631c2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60`}
                            alt={user.name}
                            title={user.name}
                            style={{
                                width: '150px',
                                height: '150px',
                                borderRadius: '50%',
                                margin: '0 auto',
                                marginTop: '10px',
                                marginBottom: '10px',
                            }}
                        />

                        <div>
                            <Typography
                                fontWeight={700}
                                sx={{
                                    fontSize: '1.8rem'
                                }}
                            >
                                {user.name}
                            </Typography>
                            <Typography
                                fontWeight={100}
                                sx={{
                                    color: '#111',
                                    fontSize: '1.6rem',
                                }}
                            >
                                {user.email}
                            </Typography>
                            <Typography
                                fontWeight={100}
                                sx={{
                                    color: '#111',
                                    fontSize: '1.2rem',
                                }}
                            >
                                {user.posts.length} Posts {user.following.length} Following {user.followers.length} Followers
                            </Typography>
                        </div>
                    </List>
                </Header>
            </Section>
        </Containers>


    )
}
export default UserProfile
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 10px 10px;  
`
const Containers = styled.div`
  display:grid;
  justify-content: center;
  grid-template-columns: repeat(1,minmax(0,1fr));
  @media(min-width: 760px){
    grid-template-columns: repeat(3,minmax(0,1fr));
    max-width: 72rem;
  }
  @media(min-width: 640px){
    max-width: 48rem;
  }
  @media(min-width: 1290px){
    max-width: 80rem;
  }
`
const Section = styled.div`
  grid-column: span 2 /span 2;
  margin: 0 auto;
  width: 80%;
`

const List = styled.div`
display: flex;
align-items: center;
div {
    text-decoration: none;
    font-family: 'Poppins',sans-serif;
    margin-left: 20px;
}
`