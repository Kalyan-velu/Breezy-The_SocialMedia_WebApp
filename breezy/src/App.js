import React, {useEffect,Suspense} from 'react';
import Header from "./components/home/header/Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {loadUser} from "./features/action/userAction";
import Home from "./components/home/homepage/Home";
import UpdatePassword from "./components/profile/updateprofile/UpdatePassword";
import ForgotPassword from "./components/home/auth/forgetpassword/ForgotPassword";
import ResetPassword from "./components/home/auth/resetpassword/ResetPassword";
import Loader from "./components/styledComponents/loader/Loader";
import {Login} from "@mui/icons-material";
import NewPost from "./components/post/NewPost/NewPost";

const AuthPage=React.lazy(() =>
import("./components/home/auth/authPage"));
const UserProfile=React.lazy(()=>
import("./components/profile/account/UserProfile"));

function App() {
    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(loadUser());
    }, [])

    const {isAuthenticated} = useSelector((state) => state.user); //check if the user is authenticated

    return (
        <Router>
            <div className="App">
                {isAuthenticated ? <Header/> : null}
                <Routes>

                      <Route path={'/'}
                             exect
                             element=
                                 {isAuthenticated ?
                                     <Suspense fallback={<Loader/>}>
                                             <Home />
                                     </Suspense>    :
                                     <Suspense fallback={<Loader />}>
                                             <AuthPage/>}/>
                                     </Suspense>}
                      />
                    <Route path={'/user/account'}
                           element=
                               {isAuthenticated ?
                                   <Suspense fallback={<Loader />}>
                                      <UserProfile/>
                                   </Suspense> :
                                   <Suspense fallback={<Loader />}>
                                        <AuthPage/>}/>
                                   </Suspense>}
                       />
                    <Route path={'/user/forgot-password'} element={isAuthenticated ? <UpdatePassword/> : <ForgotPassword/> }/>
                    <Route path={'/reset-password/:token'} element={isAuthenticated ? <UpdatePassword/> : <ResetPassword/> }/>
                    <Route path={'/NewPost'} element={isAuthenticated ? <NewPost/> : <Login/> }/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;