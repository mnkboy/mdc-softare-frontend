import React, { useState } from 'react'
import { makeStyles, Hidden } from '@material-ui/core'
import Navbar from './Navbar';
import DrawerCustom from './DrawerCustom';

const styles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3)
    }

}))

const Container = () => {
    const classes = styles()
    //open y cerrar menu
    const [open, setOpen] = useState(false)
    const openAction = () => {
        setOpen(!open)
    }

    return (
        <div className={classes.root}>
            <Navbar openAction={openAction} />
            <Hidden xsDown>
                <DrawerCustom variant='permanent' open={true} />
            </Hidden>
            <Hidden smUp>
                <DrawerCustom variant='temporary'
                    open={open}
                    onClose={openAction}
                />
            </Hidden>
            <div className={classes.content}>
                <div className={classes.toolbar}>

                </div>
            </div>

        </div>
    )
}

export default Container
