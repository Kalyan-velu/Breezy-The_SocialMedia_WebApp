import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 714px;
  background-color: white;
  margin: 0 auto;
  padding: 15px 0;
  z-index: 59;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 480px) {
    width: 100%;
    margin-top: 20px;
    border-radius: 0;
  }
  @media (min-width: 1024px) {
    margin-top: 20px;
  }
`

export const PostSection = styled.div`
  width: 100%;
`