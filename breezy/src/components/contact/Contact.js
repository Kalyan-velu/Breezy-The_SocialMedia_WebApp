import React from 'react'
import styled from "styled-components";
import {Avatar, IconButton} from "@mui/material";
import {Logout} from "@mui/icons-material";


function Contact() {


    return (
        <Container>
            <Header>
                <Avatar/>
                <span>
					m
				</span>
                <IconButton>
                    <Logout/>
                </IconButton>


            </Header>
        </Container>
    )
}

export default Contact
const Container = styled.div`
	width:382px;
  	height:231px;
  	margin-right:10px;
 	 margin-top: 10px;
  background-color: white;
  margin-left: 10px;
  border-radius: 20px;
  display: flex;
  align-items:center ;
  
`
const Header = styled.div`
	display: flex;
  align-items: center;
  margin: 20px 5px;
  padding-top:20px;
  
  span{
    font-family: 'poppins',sans-serif;
    margin-left: 0.5rem;
    flex:1;
  }
  p{
    padding:0 5px;
    color:#60a5fa;
    font-weight:bold;
    cursor:pointer;
    :hover{
      text-decoration: underline;
    }
  }
`