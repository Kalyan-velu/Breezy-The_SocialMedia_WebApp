import React from 'react'
import {Link} from "react-router-dom";
import {Avatar, Typography} from "@mui/material";
import styled from 'styled-components'

const User = ({userId, name, avatar}) => {
    return (
        <Users>
            <Link to={`/user/${userId}`}>
                <Avatar src={avatar} alt={name}/>
                <Typography>{name}</Typography>
                <div/>
                <div/>
            </Link>
        </Users>
    )
}
export default User;

const Users = styled.div`
  width: 100%;
  a {
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    color: rgba(0,0,0,0.87);
    transition:all 0.3s;
    margin:0.5vmax 0.5vmax 0.5vmax 0.5vmax;
    :hover{transform:scale(1.1);
   cursor:pointer
  }
  }
							`