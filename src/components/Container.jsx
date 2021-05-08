import React, { useState } from 'react'
import { makeStyles, Hidden } from '@material-ui/core'
import Navbar from './Navbar';
import DrawerCustom from './DrawerCustom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './pages/Home';
import Promovidos from './pages/Promovidos';
import CapturaDeVotos from './pages/CapturaDeVotos';
import Casillas from './pages/Casillas';
import Graficas from './pages/Graficas';
import IncidentesCasillas from './pages/IncidentesCasillas';
import ReportesRgs from './pages/ReportesRgs';
import GestionarPromovidos from './pages/GestionarPromovidos';
import Elecciones from './pages/Elecciones';
import PromovidoDetalle from './pages/Promovidos/PromovidoDetalle';
import CreateCasilla from './pages/Casillas/CreateCasilla';
import UpdateCasilla from './pages/Casillas/UpdateCasilla';
import CreateEleccion from './pages/Elecciones/CreateEleccion';
import UpdateEleccion from './pages/Elecciones/UpdateEleccion';
import SignIn from './pages/SignIn';
import Progreso from './pages/Progreso';
import ConsultaDePromovidos from './pages/ConsultaPromovidos';
import ApoyoDePromovidos from './pages/ApoyoDePromovidos';

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

    const imprimeRutas = () => {
        if (localStorage.getItem("token-centinela") === null) {
            return (
                <div>
                    <Switch>
                        <Route exact path="/">
                            <SignIn />
                        </Route>
                    </Switch>
                </div>
            )
        }
        return (
            <div>
                <Switch>
                    <Route exact path="/gestionarpromovidos" >
                        <GestionarPromovidos />
                    </Route>
                    <Route exact path="/elecciones" >
                        <Elecciones />
                    </Route>
                    <Route exact path="/elecciones/create" >
                        <CreateEleccion />
                    </Route>
                    <Route exact path="/elecciones/update/:id" >
                        <UpdateEleccion />
                    </Route>
                    <Route exact path="/casillas" >
                        <Casillas />
                    </Route>
                    <Route exact path="/casillas/create" >
                        <CreateCasilla />
                    </Route>
                    <Route exact path="/casillas/update/:id" >
                        <UpdateCasilla />
                    </Route>
                    <Route exact path="/capturavotos">
                        <CapturaDeVotos />
                    </Route>
                    <Route exact path="/promovidos">
                        <Promovidos />
                    </Route>
                    <Route exact path="/consultapromovidos">
                        <ConsultaDePromovidos />
                    </Route>
                    <Route exact path="/apoyodepromovidos">
                        <ApoyoDePromovidos />
                    </Route>

                    <Route path="/promovidos/get/:id">
                        <PromovidoDetalle />
                    </Route>
                    <Route exact path="/home">
                        <HomePage />
                    </Route>
                    <Route exact path="/progreso">
                        <Progreso />
                    </Route>
                </Switch>
            </div>
        )
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
                    {imprimeRutas()}
                </div>
            </Router>

        </div>
    )
}

export default Container
