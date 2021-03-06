import React from 'react'
import { AppBar, IconButton, makeStyles, Toolbar, Typography, Button } from '@material-ui/core'
import { Menu } from '@material-ui/icons';
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
                    <img src={"images/simbolo-centinela.png"} alt="centinel logo" width="35" height="35" />
                    <Typography variant='h6' className={classes.title}>
                        CENTINELA
                    </Typography>
                    <Button color='inherit'>Login</Button>
                    <Button color='inherit'>Logout</Button>
                </Toolbar>

            </AppBar>
        </div >
    )
}

export default Navbar
