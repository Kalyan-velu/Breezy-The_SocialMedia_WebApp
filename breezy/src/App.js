import React, {useEffect, Suspense} from 'react';
import Header from "./components/home/header/Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {loadUser} from "./features/action/userAction";
import Home from "./components/home/homepage/Home";
import Loader from "./components/styledComponents/error-handlers/Loader";
import NotFound from "./components/styledComponents/error-handlers/NotFound";
import {ErrorBoundary} from "react-error-boundary";
import Error from "./components/styledComponents/error-handlers/Error";
import ErrorSnackbar from "./components/styledComponents/error-message/ErrorMessage";

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
    const {isAuthenticated,user} = useSelector((state) => state.user); //check if the user is authenticated
    const{error:loadUserError} = useSelector((state)=>state.user);
    const[openE,setOpenE]=React.useState(false);
    const[openS,setOpenS]=React.useState(false);
    const[error,setError]=React.useState(null);

    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch])
    useEffect(() => {
        if(loadUserError){
            setOpenE(true);
            setError(loadUserError)
        }
    }, [loadUserError])


    return (
        <Router>
            <div className="App"
                style={{
                    scrollbarWidth:'none'
                }}
            >
                {isAuthenticated ? <Header/> : null}
                <Routes>
                      <Route path={'/'}
                             exect
                             element=
                                 {isAuthenticated ?
                                        <Suspense fallback={<Loader/>}>
                                             <Home />
                                        </Suspense>
                     :
                                     <Suspense fallback={<Loader />}>
                                             <AuthPage/>
                                     </Suspense>}
                      />

                    {user &&
                    <Route path={isAuthenticated?`/user/${user._id}`:'/user/account'}
                           element=
                               {isAuthenticated ?
                                   <Suspense fallback={<Loader />}>
                                      <UserProfile/>
                                   </Suspense> :
                                   <Suspense fallback={<Loader />}>
                                        <AuthPage/>}/>
                                   </Suspense>}
                       />}
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


                    {user && <Route path={`/user/${user._id}/profile`}
                           element={isAuthenticated ?
                               <ErrorBoundary fallback={<Error/>}>
                                   <Suspense fallback={<Loader />}>
                                        <SetProfilePic/>
                                   </Suspense>
                               </ErrorBoundary> : <AuthPage/>}
                    />}


                    {user &&  <Route path={`/user/${user._id}/forgot-password`}
                           element={isAuthenticated ?
                               <ErrorBoundary fallback={<Error/>}>
                               <Suspense fallback={<Loader />}>
                                 <UpdatePassword/>
                               </Suspense>
                               </ErrorBoundary>
                                   :
                               <Suspense fallback={<Loader />}>
                                     <ForgotPassword/>
                               </Suspense>}
                    />}

                    <Route path={'/reset-password/:token'}
                           element={isAuthenticated ?
                               <UpdatePassword/> : <ResetPassword/> }
                    />
                    <Route path={'/search'}
                           element={isAuthenticated ?
                               <ErrorBoundary fallback={<Error />}>
                               <Suspense fallback={<Loader />}>
                                  <SearchUser/>
                               </Suspense>
                               </ErrorBoundary>:
                               <AuthPage/> }
                        />
                    <Route path={"*"} element={<NotFound/>}/>
                </Routes>
                <ErrorSnackbar
                    openE={openE}
                    openS={openS}
                    error={error}

                    setOpenE={setOpenE}
                    setOpenS={setOpenS}
                />
            </div>
        </Router>
    );
}

export default App;