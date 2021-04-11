import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

function AlertMessagesCpt() {
    const [message, setMessage] = useState("Hola tarolas como estas");
    const [severity, setSeverity] = useState("")
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleSuccessMessage = () => {
        setMessage("Success")
        setSeverity("success")
        handleClick();
    }

    const handleErrorMessage = () => {
        setMessage("Error")
        setSeverity("error")
        handleClick();
    }

    const handleWarningMessage = () => {
        setMessage("Warning")
        setSeverity("warning")
        handleClick();
    }
    const handleInfoMessage = () => {
        setMessage("Info")
        setSeverity("info")
        handleClick();
    }



    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Button variant="outlined" onClick={handleSuccessMessage}>
                Open success snackbar :) !
            </Button>
            <Button variant="outlined" onClick={handleErrorMessage}>
                Open error snackbar :) !
            </Button>
            <Button variant="outlined" onClick={handleWarningMessage}>
                Open warning snackbar :) !
            </Button>
            <Button variant="outlined" onClick={handleInfoMessage}>
                Open info snackbar :) !
            </Button>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
            <Alert severity="success">This is an error message!</Alert>
            <Alert severity="error">This is a warning message!</Alert>
            <Alert severity="warning">This is an information message!</Alert>
            <Alert severity="info">This is a success message!</Alert>
        </div>
    );
}

export default AlertMessagesCpt