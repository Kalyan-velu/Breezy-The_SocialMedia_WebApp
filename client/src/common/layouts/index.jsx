import {MainContainer} from "./styled.jsx";

const Index = ({children, isAuthenticated}) => {
  return (
    <MainContainer isAuthenticated={isAuthenticated}>
      {children}
    </MainContainer>
  )
}

export default Index