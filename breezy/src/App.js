import React, {useEffect,Suspense} from 'react';
import Header from "./components/home/header/Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {loadUser} from "./features/action/userAction";
import Home from "./components/home/homepage/Home";
import Loader from "./components/styledComponents/loader/Loader";
import SetProfilePic from "./components/profile/account/updateprofile/SetPic";

import ForgotPassword from "./components/home/auth/password/ForgotPassword";
import ResetPassword from "./components/home/auth/password/resetpassword/ResetPassword";
import NewPost from "./components/post/NewPost/NewPost";
import UpdatePassword from "./components/profile/account/updateprofile/UpdatePassword";
import OtherProfiles from "./components/profile/account/otherusers/OtherProfiles";

const AuthPage=React.lazy(() =>
import("./components/home/auth/authPage"));
const UserProfile=React.lazy(()=>
import("./components/profile/account/loggeduser/UserProfile"));

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUser());
    }, [])

    const {isAuthenticated,user} = useSelector((state) => state.user); //check if the user is authenticated

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
                                             <AuthPage/>
                                     </Suspense>}
                      />

                    <Route path={isAuthenticated?`/user/${user._id}`:'/user/account'}
                           element=
                               {isAuthenticated ?
                                   <Suspense fallback={<Loader />}>
                                      <UserProfile/>
                                   </Suspense> :
                                   <Suspense fallback={<Loader />}>
                                        <AuthPage/>}/>
                                   </Suspense>}
                       />
                    <Route path={'/NewPost'}
                           element=
                               {isAuthenticated ?
                                   <Suspense fallback={<Loader />}>
                                        <NewPost/>
                                   </Suspense>
                                   :
                                   <Suspense fallback={<Loader />}>
                                         <AuthPage/>
                                   </Suspense>}
                    />
                    <Route path={`/user/:id`} element={isAuthenticated ?<OtherProfiles/>: <AuthPage/>}/>
                    <Route path={isAuthenticated?`/user/${user._id}/profile`:`/user/profile`} element={isAuthenticated ?<SetProfilePic/>: <AuthPage/>}/>
                    <Route path={isAuthenticated?`/user/${user._id}/forgot-password`:`/user/forgot-password`} element={isAuthenticated ? <UpdatePassword/> : <ForgotPassword/> }/>
                    <Route path={'/reset-password/:token'} element={isAuthenticated ? <UpdatePassword/> : <ResetPassword/> }/>
                    <Route path={'/upload/password'} element={isAuthenticated ? <UpdatePassword/> : <ResetPassword/> }/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;