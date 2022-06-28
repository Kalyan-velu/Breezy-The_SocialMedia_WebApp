import styled from "styled-components";

export const Container = styled.div`
display:grid;
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
  margin: 0 auto;
`
export const Sections = styled.div`
grid-column: span 2 /span 2;
  margin: 0 auto;
	width: 80%;
`
export const Section = styled.div`
  margin: 0 auto;
  @media (min-width: 1280px) {

  }
  @media (min-width: 760px) {

  }
`