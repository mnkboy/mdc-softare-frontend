import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core'
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'
import {
    Home, AccountBox, BarChart, AccountBalance, Error, FindInPage, BorderColor,
    HowToVote, RecentActors, FindReplace, ShoppingBasket, Search, Reorder, ViewList
} from '@material-ui/icons/'

import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

const linkhome = () => {
    const token = localStorage.getItem(`${process.env.REACT_APP_TOKEN_NAME}`);
    const base64Url = token.split('.')[1];
    const decodedValue = JSON.parse(window.atob(base64Url));
    const linkvalue = decodedValue.HOME;

    if (linkvalue) {
        return (
            <div>
                <NavLink
                    className="tags"
                    activeStyle={{ color: "#1e88e5", fontWeight: "bold", }}
                    style={{ color: "#424242", textDecoration: 'none' }}
                    to={"/home"}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItem>
                </NavLink>
            </div>
        )
    } else {
        return (
            <div>
            </div>
        )
    }

};

const linkprogreso = () => {
    const token = localStorage.getItem(`${process.env.REACT_APP_TOKEN_NAME}`);
    const base64Url = token.split('.')[1];
    const decodedValue = JSON.parse(window.atob(base64Url));
    const linkvalue = decodedValue.PROGRESO;

    if (linkvalue) {
        return (
            <div>
                <NavLink
                    className="tags"
                    activeStyle={{ color: "#1e88e5" }}
                    style={{ color: "#424242", textDecoration: 'none' }}
                    to={"/progreso"}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <FindReplace />
                        </ListItemIcon>
                        <ListItemText primary='Progreso' />
                    </ListItem>
                </NavLink>
            </div>
        )
    } else {
        return (
            <div>
            </div>
        )
    }

};

const linkcapturavotos = () => {
    const token = localStorage.getItem(`${process.env.REACT_APP_TOKEN_NAME}`);
    const base64Url = token.split('.')[1];
    const decodedValue = JSON.parse(window.atob(base64Url));
    const linkvalue = decodedValue.CAPTURA_DE_VOTOS;

    if (linkvalue) {
        return (
            <div>
                <NavLink
                    className="tags"
                    activeStyle={{ color: "#1e88e5" }}
                    style={{ color: "#424242", textDecoration: 'none' }}
                    to={"/capturavotos"}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <HowToVote />
                        </ListItemIcon>
                        <ListItemText primary='Captura de votos' />
                    </ListItem>
                </NavLink>
            </div>
        )
    } else {
        return (
            <div>
            </div>
        )
    }

};

const linkcasillas = () => {
    const token = localStorage.getItem(`${process.env.REACT_APP_TOKEN_NAME}`);
    const base64Url = token.split('.')[1];
    const decodedValue = JSON.parse(window.atob(base64Url));
    const linkvalue = decodedValue.CASILLAS;

    if (linkvalue) {
        return (
            <div>
                <NavLink
                    className="tags"
                    activeStyle={{ color: "#1e88e5" }}
                    style={{ color: "#424242", textDecoration: 'none' }}
                    to={"/casillas"}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <AccountBalance />
                        </ListItemIcon>
                        <ListItemText primary='Casillas' />
                    </ListItem>
                </NavLink>
            </div>
        )
    } else {
        return (
            <div>
            </div>
        )
    }

};

const linkelecciones = () => {
    const token = localStorage.getItem(`${process.env.REACT_APP_TOKEN_NAME}`);
    const base64Url = token.split('.')[1];
    const decodedValue = JSON.parse(window.atob(base64Url));
    const linkvalue = decodedValue.ELECCIONES;

    if (linkvalue) {
        return (
            <div>
                <NavLink
                    className="tags"
                    activeStyle={{ color: "#1e88e5" }}
                    style={{ color: "#424242", textDecoration: 'none' }}
                    to={"/elecciones"}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <BorderColor />
                        </ListItemIcon>
                        <ListItemText primary='Elecciones' />
                    </ListItem>
                </NavLink>
            </div>
        )
    } else {
        return (
            <div>
            </div>
        )
    }

};

const linkpromovidos = () => {
    const token = localStorage.getItem(`${process.env.REACT_APP_TOKEN_NAME}`);
    const base64Url = token.split('.')[1];
    const decodedValue = JSON.parse(window.atob(base64Url));
    const linkvalue = decodedValue.TOTAL_PROMOVIDOS;

    if (linkvalue) {
        return (
            <div>
                <NavLink
                    className="tags"
                    activeStyle={{ color: "#1e88e5" }}
                    style={{ color: "#424242", textDecoration: 'none' }}
                    to={"/promovidos"}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <AccountBox />
                        </ListItemIcon>
                        <ListItemText primary='Total promovidos' />
                    </ListItem>
                </NavLink>
            </div>
        )
    } else {
        return (
            <div>
            </div>
        )
    }

};

const linkconsultadepromovidos = () => {
    const token = localStorage.getItem(`${process.env.REACT_APP_TOKEN_NAME}`);
    const base64Url = token.split('.')[1];
    const decodedValue = JSON.parse(window.atob(base64Url));
    const linkvalue = decodedValue.CONSULTA_DE_PROMOVIDOS;

    if (linkvalue) {
        return (
            <div>
                <NavLink
                    className="tags"
                    activeStyle={{ color: "#1e88e5" }}
                    style={{ color: "#424242", textDecoration: 'none' }}
                    to={"/consultapromovidos"}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <Search />
                        </ListItemIcon>
                        <ListItemText primary='Consulta de promovidos' />
                    </ListItem>
                </NavLink>
            </div>
        )
    } else {
        return (
            <div>
            </div>
        )
    }

};


const linkapoyodepromovidos = () => {
    const token = localStorage.getItem(`${process.env.REACT_APP_TOKEN_NAME}`);
    const base64Url = token.split('.')[1];
    const decodedValue = JSON.parse(window.atob(base64Url));
    const linkvalue = decodedValue.APOYO_DE_PROMOVIDOS;

    if (linkvalue) {
        return (
            <div>
                <NavLink
                    className="tags"
                    activeStyle={{ color: "#1e88e5" }}
                    style={{ color: "#424242", textDecoration: 'none' }}
                    to={"/apoyodepromovidos"}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <ShoppingBasket />
                        </ListItemIcon>
                        <ListItemText primary='Apoyo de promovidos' />
                    </ListItem>
                </NavLink>
            </div>
        )
    } else {
        return (
            <div>
            </div>
        )
    }

};

const linkgestionarpromovidos = () => {
    const token = localStorage.getItem(`${process.env.REACT_APP_TOKEN_NAME}`);
    const base64Url = token.split('.')[1];
    const decodedValue = JSON.parse(window.atob(base64Url));
    const linkvalue = decodedValue.GESTIONAR_PROMOVIDOS;

    if (linkvalue) {
        return (
            <div>
                <NavLink
                    className="tags"
                    activeStyle={{ color: "#1e88e5" }}
                    style={{ color: "#424242", textDecoration: 'none' }}
                    to={"/gestionarpromovidos"}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <RecentActors />
                        </ListItemIcon>
                        <ListItemText primary='Gestionar promovidos' />
                    </ListItem>
                </NavLink>
            </div>
        )
    } else {
        return (
            <div>
            </div>
        )
    }

};

const linkavanceestructura = () => {
    const token = localStorage.getItem(`${process.env.REACT_APP_TOKEN_NAME}`);
    const base64Url = token.split('.')[1];
    const decodedValue = JSON.parse(window.atob(base64Url));
    const linkvalue = decodedValue.AVANCE_ESTRUCTURA;

    if (linkvalue) {
        return (
            <div>
                <NavLink
                    className="tags"
                    activeStyle={{ color: "#1e88e5" }}
                    style={{ color: "#424242", textDecoration: 'none' }}
                    to={"/avanceestructura"}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <Reorder />
                        </ListItemIcon>
                        <ListItemText primary='Avance estructura' />
                    </ListItem>
                </NavLink>
            </div>
        )
    } else {
        return (
            <div>
            </div>
        )
    }
};

const linkavanceestructuradetallado = () => {
    const token = localStorage.getItem(`${process.env.REACT_APP_TOKEN_NAME}`);
    const base64Url = token.split('.')[1];
    const decodedValue = JSON.parse(window.atob(base64Url));
    const linkvalue = decodedValue.AVANCE_ESTRUCTURA_DETALLADO;

    if (linkvalue) {
        return (
            <div>
                <NavLink
                    className="tags"
                    activeStyle={{ color: "#1e88e5" }}
                    style={{ color: "#424242", textDecoration: 'none' }}
                    to={"/avanceestructuradetallado"}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <ViewList />
                        </ListItemIcon>
                        <ListItemText primary='Avance estructura detallado' />
                    </ListItem>
                </NavLink>
            </div>
        )
    } else {
        return (
            <div>
            </div>
        )
    }
};

const ListIcons = () => {
    const classes = useStyles();

    //Imprime Iconos
    const imprimeIconos = () => {
        if (localStorage.getItem("token-centinela") === null) {
            return (
                <div>
                </div>
            )
        }
        return (
            <div>
                <List component="nav" className={classes.root}>
                    {linkhome()}
                    <Divider />
                    {linkprogreso()}
                    <Divider />
                    {linkcapturavotos()}
                    <Divider />
                    {linkcasillas()}
                    <Divider />
                    {linkelecciones()}
                    <Divider />
                    {linkpromovidos()}
                    <Divider />
                    {linkconsultadepromovidos()}
                    <Divider />
                    {linkgestionarpromovidos()}
                    <Divider />
                    {linkapoyodepromovidos()}
                    <Divider />
                    {linkavanceestructura()}
                    <Divider />
                    {linkavanceestructuradetallado()}
                </List>
            </div>
        )
    }

    return (
        <Fragment>
            {imprimeIconos()}
        </Fragment>
    )
}

export default ListIcons
