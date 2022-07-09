import React, {useEffect, Suspense} from 'react';
import Header from "./components/home/header/Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {loadUser} from "./features/action/userAction";
import Home from "./components/home/homepage/Home";
import Loader from "./components/styledComponents/loader/Loader";
import NotFound from "./components/styledComponents/loader/NotFound";
import {ErrorBoundary} from "react-error-boundary";
import Error from "./components/styledComponents/loader/Error";

const SetProfilePic =React.lazy(()=>
    import ( "./components/profile/account/updateprofile/SetPic"));
const ForgotPassword=React.lazy(()=>
    import ( "./components/home/auth/password/ForgotPassword"));
const ResetPassword =React.lazy(()=>
    import ( "./components/home/auth/password/resetpassword/ResetPassword"));
const NewPost =React.lazy(()=>
    import ( "./components/post/NewPost/NewPost"));
const UpdatePassword =React.lazy(()=>
    import ( "./components/profile/account/updateprofile/UpdatePassword"));
const SearchUser=React.lazy(()=>
    import ("./components/home/homepage/Search"));
const AuthPage=React.lazy(() =>
    import("./components/home/auth/authPage"));
const UserProfile=React.lazy(()=>
    import("./components/profile/account/loggeduser/UserProfile"));
const OtherProfiles =React.lazy(()=>
    import("./components/profile/account/otherusers/OtherProfiles"));
const ChatPage =React.lazy(()=>
    import  ("./components/messaging/allchats/ChatPage"));
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
                    <Route path={'/chat/:id'}
                           element=
                               {isAuthenticated ?
                                   <Suspense fallback={<Loader />}>
                                       <ChatPage/>
                                   </Suspense>
                                   :
                                   <Suspense fallback={<Loader />}>
                                       <AuthPage/>
                                   </Suspense>}
                    />

                    <Route path={`/user/:id`}
                           element={isAuthenticated ?
                               <ErrorBoundary fallback={<Error/>}>
                               <Suspense fallback={<Loader />}>
                                    <OtherProfiles/>
                               </Suspense>
                               </ErrorBoundary>:
                               <Suspense fallback={<Loader />}>
                                      <AuthPage/>
                               </Suspense>}
                    />
                    <Route path={isAuthenticated?`/user/${user._id}/profile`:`/user/profile`}
                           element={isAuthenticated ?
                               <ErrorBoundary fallback={<Error/>}>
                                   <Suspense fallback={<Loader />}>
                               <SetProfilePic/>
                                   </Suspense>
                               </ErrorBoundary>: <AuthPage/>}/>
                    <Route path={isAuthenticated?`/user/${user._id}/forgot-password`:`/user/forgot-password`} element={isAuthenticated ? <UpdatePassword/> : <ForgotPassword/> }/>
                    <Route path={'/reset-password/:token'} element={isAuthenticated ? <UpdatePassword/> : <ResetPassword/> }/>
                    <Route path={'/upload/password'} element={isAuthenticated ? <UpdatePassword/> : <ResetPassword/> }/>
                    <Route path={'/search'}
                           element={isAuthenticated ?
                               <ErrorBoundary fallback={<Error />}>
                               <Suspense fallback={<Loader />}>
                                  <SearchUser/>
                               </Suspense>
                               </ErrorBoundary>:
                               <AuthPage/> }/>
                    <Route path={"*"} element={<NotFound/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;