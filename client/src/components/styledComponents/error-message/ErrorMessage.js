import React from 'react'
import Snackbar from "@mui/material/Snackbar";
import {Grid} from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef( function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
} );

const ErrorSnackbar=({openS,openE,setOpenE,setOpenS,error,success})=>{
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenS( false )
        setOpenE( false );
    };
    return(
        <Grid align='center'>
            <Snackbar open={openS} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                    {success}
                </Alert>
            </Snackbar>
            {error ? <Snackbar open={openE} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                        {error}
                    </Alert>
                </Snackbar>
                : null}
        </Grid>
    )
}
export default ErrorSnackbar