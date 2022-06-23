import * as React from 'react';
import Typography from '@mui/material/Typography';
import User from "./User";
import {useSelector} from "react-redux";

export default function BasicTabs() {
    const {user} = useSelector(state => state.user)
    return (
        <div>
            <Typography
                fontWeight={600}
            >
                Followings {user.following.length}
            </Typography>
            <div>
                {user.following && user.following.length > 0 ? (
                    user.following.map((following) => (
                        <User
                            key={following._id}
                            userId={following._id}
                            name={following.name}
                            avatar={following.avatar}
                        />))) : (
                    <Typography variant="h6" color="textSecondary" align="center">
                        No users to show
                    </Typography>
                )}
            </div>
            <Typography
                fontWeight={600}
            >
                Followers {user.followers.length}
            </Typography>
            <div>
                {user.followers && user.followers.length > 0 ? (
                    user.followers.map((followers) => (
                        <User
                            key={followers._id}
                            userId={followers._id}
                            name={followers.name}
                            avatar={followers.avatar}
                        />))) : (
                    <Typography variant="h6" color="textSecondary" align="center">
                        No users to show
                    </Typography>
                )}
            </div>
        </div>

    );
}