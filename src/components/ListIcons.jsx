import React, { Fragment } from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { AccountBox, BarChart, AccountBalance, Error } from '@material-ui/icons/'

const ListIcons = () => {
    return (

        <Fragment>
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <AccountBox />
                    </ListItemIcon>
                    <ListItemText primary='Promovidos' />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <AccountBalance />
                    </ListItemIcon>
                    <ListItemText primary='Casillas' />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Error />
                    </ListItemIcon>
                    <ListItemText primary='Incidentes Casillas' />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <BarChart />
                    </ListItemIcon>
                    <ListItemText primary='Graficas' />
                </ListItem>
            </List>
        </Fragment>
    )
}

export default ListIcons
