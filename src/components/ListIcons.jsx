import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core'
import { List, ListItem, ListItemIcon, ListItemText, Divider, } from '@material-ui/core'
import { Home, AccountBox, BarChart, AccountBalance, Error, FindInPage, BorderColor, HowToVote } from '@material-ui/icons/'
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
                    <Divider />
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
                    <Divider />
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
                    {/* <Divider />
                    <NavLink
                        className="tags"
                        activeStyle={{ color: "#1e88e5" }}
                        style={{ color: "#424242", textDecoration: 'none' }}
                        to={"/incidentes"}
                    >
                        <ListItem button>
                            <ListItemIcon>
                                <Error />
                            </ListItemIcon>
                            <ListItemText primary='Incidentes Casillas' />
                        </ListItem>
                    </NavLink> */}
                    {/* <Divider />
                    <NavLink
                        className="tags"
                        activeStyle={{ color: "#1e88e5" }}
                        style={{ color: "#424242", textDecoration: 'none' }}
                        to={"/reportesrgs"}
                    >
                        <ListItem button>
                            <ListItemIcon>
                                <FindInPage />
                            </ListItemIcon>
                            <ListItemText primary='ReportesRGS' />
                        </ListItem>
                    </NavLink> */}
                    <Divider />
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
                    <Divider />
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
                    <Divider />
                    <NavLink
                        className="tags"
                        activeStyle={{ color: "#1e88e5" }}
                        style={{ color: "#424242", textDecoration: 'none' }}
                        to={"/graficas"}
                    >
                        <ListItem button>
                            <ListItemIcon>
                                <BarChart />
                            </ListItemIcon>
                            <ListItemText primary='Graficas' />
                        </ListItem>
                    </NavLink>
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
