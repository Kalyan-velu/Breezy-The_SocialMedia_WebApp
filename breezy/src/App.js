import React, {useEffect} from 'react';
import Header from "./components/home/header/Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {loadUser} from "./features/action/userAction";
import Home from "./components/home/homepage/Home";
import AuthPage from "./components/home/auth/authPage";
import UserProfile from "./components/profile/UserProfile";
import Search from "./components/search/Search";
import SearchData from "./components/search/package2.json";

function App() {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(loadUser());
    }, [])

    const {isAuthenticated} = useSelector((state) => state.user); //check if the user is authenticated

    return (
        <Router>
            <div className="App">
                {isAuthenticated ? <Header/> : null}
                <Routes>
                    <Route path={'/'} exect element={isAuthenticated ? <Home/> : <AuthPage/>}/>
                    <Route path={'/user/account'} element={isAuthenticated ? <UserProfile/> : <AuthPage/>}/>

                </Routes>
            </div>
        </Router>
    );
}

export default App;