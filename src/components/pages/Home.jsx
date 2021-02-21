import React from 'react'
import ContextMenu from '../utils/ContextMenuCpt';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { Divider } from '@material-ui/core';
//BreadCums
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const Home = () => {
    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    color="textPrimary"
                    href="/home"
                    onClick={handleClick}
                    aria-current="page"
                >
                    Home
      			</Link>
            </Breadcrumbs><br />

            <ContextMenu />
        </div>
    )
}

export default Home
