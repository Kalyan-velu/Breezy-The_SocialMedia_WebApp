import styled from "styled-components";
import {SearchIcon} from "@heroicons/react/solid";
import {IconButton} from "@mui/material";

export const Container = styled.div`
	border-radius: 0 0 10px 10px;
	padding: 10px 10px 0.5rem;
	position:sticky;
	top: 0;
	width: 100%; 
	
`
export const Wrapper = styled.div`
 display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
  @media(min-width: 1024px ) 
  {
    max-width: 72rem ;
    margin:0 auto;
  }
)`
export const Logo = styled.div`
  color: #0a1217;

  span {
    font-family: 'Mochiy Pop P One', 'sans-serif';
    font-size: 1.5rem;
  }`
export const RightContainer = styled.div`
display: flex;
  align-items: center;
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.75rem;
  img {
    cursor: pointer;
    height: 2.25rem;
  }
`;

export const InputContainer = styled.div`
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

export const Searchs = styled(SearchIcon)`
  height: 1.20rem;
  color: rgb(6, 8, 12);
  margin-right: 0.5rem;
  pointer-events: none;
`;

export const IconButtons = styled(IconButton)`
  @media (min-width: 768px) {
    opacity: 1;
    display: none;
    pointer-events: none;
  }
  margin-right: 0.5rem;
`;

export const SearchIcons = styled(SearchIcon)`
  height: 1.20rem;
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
  color: rgba(107, 114, 128, 1);
`;

export const NavMenu = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  a {
    width: 2vmax;
    height: 1vmax;
    margin: 1vmax 2vmax;
    @media (max-width: 480px) {
      width: 2vmax;
      height: 1vmax;
      margin: 0.3vmax 0.3vmax;
    }
  }

  a > svg {
    font-size: 2vmax;
    transition: all 0.5s;
    color: rgba(80, 84, 190, 0.44);
    @media (max-width: 480px) {
        font-size: 1.5vmax;
        transition: all 0.5s;
        color: rgba(80, 84, 190, 0.44);
    }
  }

  a > svg:hover {
    color: #55749e;
    transform: scale(1.2);
  }
`;