import React from 'react'
import {useNavigate} from "react-router-dom";
import LoginComponent from "./components/loginComponent";
import RegisterComponent from "./components/Register"
import {AuthGrid, AuthHeader, AuthWrapper} from "./styles";

const UserAuthentication = () => {
  const navigate = useNavigate()
  const [mode, setMode] = React.useState("login")
  const toggleMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
    const newLocation = mode === 'login' ? '/register' : '/login';
    navigate(newLocation);
  };
  return (
    <AuthWrapper>
      <AuthGrid>
        <AuthHeader variant="h4" gutterBottom>
          {mode === 'login' ? 'Login' : 'Register'}
        </AuthHeader>
        {mode === 'login' ? <LoginComponent setSetr={setMode}/> : <RegisterComponent setSetr={setMode}/>}
      </AuthGrid>
    </AuthWrapper>
  )
}

export default UserAuthentication