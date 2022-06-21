import React from 'react'
import styled from "styled-components";
import {Avatar} from "@mui/material";


const Posts = () => {
    return (
        <Container>
            <Header>
                <List>
                    <Avatar/>
                    <span>Kalyan</span>
                </List>
            </Header>
            <Post>
                <img
                    src={`https://images.unsplash.com/photo-1655284847835-1684a56f80d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60`}
                    alt={"post"}/>
            </Post>
            <Caption>
				<span>
					Kl
				</span> :
                <p>Hell of a day in here!!@!! </p>
            </Caption>
        </Container>
    )
}
export default Posts

const Container = styled
    .div`
  		display: flex;
  		flex-direction: column;
  		justify-content: center;
  		max-width: 714px;
		background-color: white;
  		margin: 0 auto;
  border-radius: 5px;
  padding: 15px 0;
  
  @media (min-width:1024px){
    margin-top: 20px;
  }
	`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 10px 10px;
`
const List = styled.div`
display: flex;
align-items: center;
span {
  font-family: 'Poppins',sans-serif;
  margin-left: 10px;
}
`
const RightContainer = styled
    .div`
	display:flex;
  	align-items: center;
	
`
const Post = styled.div`
	width: 100%;
  	img{
	  width: 100%;
	  object-fit:contain;
    }
`
const Caption = styled.div`
		display: flex;
  		align-items: center;
  		margin-left: 10px;
  		margin-top: 5px;
  		span{
		  margin-left: 5px;
		  font-family: 'Poppins',sans-serif;
		  margin-right: 3px;
			font-weight: 600;
	    }
  
  		p{
		  margin-left: 5px;
		  font-weight: 600;
		  font-size:small;
		  color:grey;
	    }
`