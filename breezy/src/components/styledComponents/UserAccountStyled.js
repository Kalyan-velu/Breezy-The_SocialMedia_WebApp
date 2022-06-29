import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 10px 10px;  
`
export const Containers = styled.div`
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
export const Section = styled.div`
  grid-column: span 2 /span 2;
  margin: 0 auto;
  width: 80%;
`

export const List = styled.div`
display: flex;
align-items: center;
div {
    text-decoration: none;
    font-family: 'Poppins',sans-serif;
    margin-left: 20px;
}
`
export const AccountDetails = styled.div`
  display:inline-block;
  flex-direction: row;
  `