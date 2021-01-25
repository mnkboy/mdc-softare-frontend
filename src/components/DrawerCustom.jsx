import React, { Fragment } from 'react'
import { makeStyles, Drawer, Divider } from '@material-ui/core'
import ListIcons from './ListIcons';

const drawerWidth = 240;

const styles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    toolbar: theme.mixins.toolbar,

}))

const DrawerCustom = (props) => {
    const classes = styles()
    return (
        <Fragment>
            <Drawer
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper
                }}
                anchor='left'
                variant={props.variant}
                open={props.open}
                onClose={props.onClose ? props.onClose : null}
            >
                <div className={classes.toolbar}></div>
                <Divider />
                <ListIcons />
            </Drawer>
        </Fragment >
    )
}

export default DrawerCustom
