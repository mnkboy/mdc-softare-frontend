import React, { Fragment } from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'
import { Home, AccountBox, BarChart, AccountBalance, Error, FindInPage, BorderColor } from '@material-ui/icons/'

import { NavLink } from "react-router-dom";
const ListIcons = () => {
    return (
        <Fragment>
            <List>
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
                    to={"/promovidos"}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <AccountBox />
                        </ListItemIcon>
                        <ListItemText primary='Promovidos' />
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
                <Divider />
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
                </NavLink>
                <Divider />
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
                </NavLink>
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
        </Fragment>
    )
}

export default ListIcons
