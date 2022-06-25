import * as React from 'react';
import Typography from '@mui/material/Typography';
import User from "./User";
import {useSelector} from "react-redux";

import PropTypes from 'prop-types';

import {useTheme} from '@mui/material/styles';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const {user} = useSelector(state => state.user)
    const [value, setValue] = React.useState(2);
    const theme = useTheme();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{bgcolor: 'background.paper', width: 500}}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
            >
                <Tab label="Followings" {...a11yProps(0)} />
                <Tab label="Followers" {...a11yProps(1)} />

            </Tabs>

            <TabPanel value={value} index={0} dir={theme.direction}>
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
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
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
            </TabPanel>
        </Box>
    );
}