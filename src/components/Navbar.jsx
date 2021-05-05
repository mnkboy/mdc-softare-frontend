import React from 'react'
import { AppBar, IconButton, makeStyles, Toolbar, Typography, Button } from '@material-ui/core'
import { Menu } from '@material-ui/icons';
import { useHistory } from "react-router-dom";

const drawerWidth = 240;

const styles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    title: {
        flexGrow: 1
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            margiLeft: drawerWidth
        }
    }

}))

const Navbar = (props) => {

    const classes = styles()

    const history = useHistory();

    //Login
    const handleLogin = (path) => {
        history.push("/");
    };

    //Logout
    const handleLogout = (path) => {
        localStorage.removeItem(`${process.env.REACT_APP_TOKEN_NAME}`);
        history.push("/");
        window.location.reload();
    };

    const imprimeLoginLogout = () => {
        if (localStorage.getItem("token-centinela") === null) {
            return (
                <div>
                    <Button color='inherit' onClick={handleLogin}>Entrar</Button>
                </div>
            )
        }
        return (
            <div>
                <Button color='inherit' onClick={handleLogout}>Salir</Button>
            </div>
        )
    }

    const imprimeNombreBienvenido = () => {
        if (localStorage.getItem("token-centinela") != null && localStorage.getItem("token-centinela") != "undefined") {
            const token = localStorage.getItem(`${process.env.REACT_APP_TOKEN_NAME}`);
            const base64Url = token.split('.')[1];
            const decodedValue = JSON.parse(window.atob(base64Url));

            return (
                <div>
                    <Typography variant='h6' className={classes.title}>
                        {decodedValue.name.toLowerCase()}
                    </Typography>
                </div>
            )
        }
    }


    return (
        <div>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color='inherit'
                        onClick={() => props.openAction()}
                    >
                        <Menu />
                    </IconButton>
                    <img src={"https://res.cloudinary.com/dti7elyha/image/upload/v1617369536/simbolo-centinela_tx0rms.png"} alt="centinel logo" width="35" height="35" />
                    <Typography variant='h6' className={classes.title}>
                        CENTINELA {`${process.env.REACT_APP_CLIENT_NAME}`}
                    </Typography>
                    {imprimeNombreBienvenido()}
                    {imprimeLoginLogout()}
                </Toolbar>

            </AppBar>
        </div >
    )
}

export default Navbar
