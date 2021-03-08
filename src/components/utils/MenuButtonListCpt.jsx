import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from "react-router-dom";

const MenuButtonListCpt = (props) => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const history = useHistory();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleAction = (path) => {
		history.push(path);
		handleClose();
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
				Abrir Menu
			</Button>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				{
					props.acciones.map(function (item, index) {
						if (item.action === "get") {
							return <MenuItem key={index} onClick={() => handleAction(item.path)} > {item.title}</MenuItem>;
						}
						if (item.action === "create") {
							return <MenuItem key={index} onClick={() => handleAction(item.path)} > {item.title}</MenuItem>;
						}
						if (item.action === "update") {
							return <MenuItem key={index} onClick={() => handleAction(item.path)} > {item.title}</MenuItem>;
						}
						if (item.action === "delete") {
							return <MenuItem key={index} onClick={() => item.handle(item.rowdata)}>{item.title}</MenuItem>;
						}


					})
				}

				<MenuItem key="id-close" onClick={handleClose}>cerrar</MenuItem>
			</Menu>
		</div >
	);
}

export default MenuButtonListCpt
