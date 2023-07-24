import React from "react"
import {useSelector} from "react-redux";
import {Route, Routes, useNavigate} from "react-router-dom";
import ErrorBoundary from "../common/components/errorBoundary"
import Home from "./home"
import UserAuthentication from "./Login";

const Profile = React.lazy(() => import("./profile"))
const Chat = React.lazy(() => import("./chat"))
const ProfileUpdate = React.lazy(() => import ("./updateProfile"))
const Router = () => {
    const navigate = useNavigate()
    const {isAuthenticated} = useSelector(({app}) => app)

    React.useEffect(() => {
        function isLoggedIn() {
            isAuthenticated === false ? navigate("/") : null
        }

        isLoggedIn()
    }, [])
    return (
        <Routes>
            <Route exact path="/" element={isAuthenticated ? <Home/> : <UserAuthentication/>}/>
            <Route
                path="/user/:id"
                element={
                    <ErrorBoundary>
                        <Profile/>
                    </ErrorBoundary>}
            />
            <Route
                path="/user/:id/settings"
                element={
                    <ErrorBoundary>
                        <ProfileUpdate/>
                    </ErrorBoundary>}
            />
            <Route
                path="/chat/:id"
                element={
                    <ErrorBoundary>
                        <Chat/>
                    </ErrorBoundary>}
            />
        </Routes>
    )
}

export default Router