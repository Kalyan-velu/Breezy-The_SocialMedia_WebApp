import styled from "styled-components";

export const Container = styled.div`
			position:fixed;
  			top:0;
  			left:0;
  			right:0;
  			bottom:0;
  			z-index: 999;
  			display:flex;
		  	align-items: center;
		  	justify-content: center;
		  	background-color: rgba(0,0,0,0.75);
		  
		`
export const Wrapper = styled.div`
			display: flex;
			flex-direction: column;
		  	align-items: center;
		  	background-color: white;
		  	z-index: 999;
		  	border-radius:2px;
		  	width:400px;
		`
export const Input = styled.input`
  font-weight: bold;
  font-size: 15px;
  margin: 0 10px;
  flex: 1;
  border: none;
  padding: 10px;
  text-align: center;
  :focus {
    outline: none;
  }
`;
export const Header = styled.div`
			display: grid;
		  	grid-template-columns:repeat(1 minmax(0,1fr)) ;
		  	width:90%;
		  	.container{
			  width:100%;
			  img{
			    height:90%;
			    width:90%;
			  object-fit: contain;
			  cursor:pointer;}
		    }

		`
export const Caption = styled.div`
		margin-top: 15px;
		  display: flex;
		  flex-direction: column;
		`
export const Button = styled.button`
  padding: 10px 0;
  margin: 30px;
  border-radius: 20px;
  border: none;
  background-color: rgba(239, 68, 68, 1);
  color: white;
  cursor: pointer;
`;

export const Cameria = styled.div`
			height: 1.75rem !important;
		  	width: 1.5rem !important;
		  	color:rgba(228,30,28,80);
		   	cursor:pointer;
		  	margin-top: 10px;
		  	text-align: center;
			
		`