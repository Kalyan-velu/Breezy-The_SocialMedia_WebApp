import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	border-radius: 5px;
	box-shadow: #7e879a;
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 714px;
	background-color: white;
	margin: 0 auto;
	padding: 15px 0;

	@media (min-width:1024px){
		margin-top: 20px;
		
	}
`

export const PostHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 5px 10px 10px;
`
export const PostDetails = styled.div`
	text-decoration: none;
	color: black;
	margin: 5px 10px 10px;
	a{
		text-decoration: none;
		color: black;
		margin: 1vmax;
	}
`
export const List = styled.div`
display: flex;
align-items: center;
a {
	text-decoration: none;
  font-family: 'Poppins',sans-serif;
  margin-left: 20px;
}
`
export const PostImg = styled.div`
  width: 100%;

  img {
    width: 100%;
    object-fit: contain;
  }
`
export const PostText = styled.div`
    width: 100%;
    margin: 5px 10px 10px;
    text-align: center;
    font-family: 'Poppins',sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: #7e879a;
`
export const PostFooterFirst = styled.div`
	display: flex;
	justify-content: space-around;
`