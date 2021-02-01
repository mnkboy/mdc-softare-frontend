import React, { useState } from 'react'
import { makeStyles, Hidden } from '@material-ui/core'
import Navbar from './Navbar';
import DrawerCustom from './DrawerCustom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './pages/Home';
import Promovidos from './pages/Promovidos';
import Casillas from './pages/Casillas';
import Graficas from './pages/Graficas';
import IncidentesCasillas from './pages/IncidentesCasillas';
import ReportesRgs from './pages/ReportesRgs';
import Elecciones from './pages/Elecciones';
import PromovidoDetalle from './pages/Promovidos/PromovidoDetalle';

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
            <Router>
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
                    <Switch>
                        <Route path="/reportesrgs" >
                            <ReportesRgs />
                        </Route>
                        <Route path="/elecciones" >
                            <Elecciones />
                        </Route>
                        <Route path="/graficas" >
                            <Graficas />
                        </Route>
                        <Route path="/incidentes" >
                            <IncidentesCasillas />
                        </Route>
                        <Route path="/casillas" >
                            <Casillas />
                        </Route>
                        <Route exact path="/promovidos">
                            <Promovidos />
                        </Route>
                        <Route path="/promovidos/promovidodetalle/:id">
                            <PromovidoDetalle />
                        </Route>
                        <Route exact path="/home">
                            <HomePage />
                        </Route>
                    </Switch>
                </div>
            </Router>

        </div>
    )
}

export default Container
