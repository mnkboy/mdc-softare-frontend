import React, { useEffect, useState } from "react";
import DataGridCpt from "../utils/DataGridCpt";
import { useDispatch, useSelector } from "react-redux";
import { Button, IconButton } from '@material-ui/core'
import DoneAllIcon from '@material-ui/icons/DoneAll';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { obtenerPersonaActivistaAccion, actualizarPersonaActivistaVotadaAccion } from "../../redux/PersonaActivistaDucks";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { Input } from '@material-ui/icons/'

const Promovidos = () => {
	const dispatch = useDispatch();
	const activistas = useSelector((store) => store.personasActivistas.array);
	const reload = useSelector((store) => store.personasActivistas.reload);
	const history = useHistory();

	//States
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	//Persona
	const persona = {
		id: "",
		votado: 0,
	};

	//Hacemos carga inicial
	useEffect(() => {
		dispatch(obtenerPersonaActivistaAccion(persona));
	}, []);

	//Verificamos si hubo cambios
	if (reload) {
		persona.id = "";
		dispatch(obtenerPersonaActivistaAccion(persona));
	}

	//Realizamos
	const performAction = (id) => {
		console.log("vota");
		handleVotado(id);
	};

	//Handle votado
	const handleVotado = (id) => {
		persona.id = id;
		persona.votado = 1;
		dispatch(actualizarPersonaActivistaVotadaAccion(persona));
	};



	// Columnas
	const columns = [
		{
			field: "id",
			headerName: "ID",
			width: 180,
			hide: true,
		},		
		{
			field: "acciones",
			headerName: "Ir",
			width: 120,
			disableClickEventBubbling: true,
			renderCell: (params: CellParams) => {
				const routeChange = (id) =>{ 
					let path = `/promovidos/promovidodetalle/${id}`; 
					history.push(path);
				  }
				  
				const onClick = () => {
					const api: GridApi = params.api;
					const fields = api
						.getAllColumns()
						.map((c) => c.field)
						.filter((c) => c !== "__check__" && !!c);
					const thisRow = {};

					fields.forEach((f) => {
						thisRow[f] = params.getValue(f);
					});

					routeChange(thisRow.id);
				};				
					return <IconButton color="primary" aria-label="upload picture" component="span" onClick={onClick}>
					<Input />
				  </IconButton>
					
					
			},
		},
		{
			field: "idcasilla",
			headerName: "IDCASILLA",
			width: 180,
		},
		{
			field: "votado",
			headerName: "VOTADO",
			width: 120,
			renderCell: (params: CellParams) => {
				if (params.value == 1) {
					return <DoneAllIcon
						style={{ color: '#03a9f4' }}
					/>;
				} else {
					const onClick = () => {
						const api: GridApi = params.api;
						const fields = api
							.getAllColumns()
							.map((c) => c.field)
							.filter((c) => c !== "__check__" && !!c);
						const thisRow = {};

						fields.forEach((f) => {
							thisRow[f] = params.getValue(f);
						});

						performAction(thisRow.id);
					};
					return <RadioButtonUncheckedIcon
						onClick={onClick}
					/>;
				}

			},
		},
		{
			field: "seccion",
			headerName: "SECCION",
			width: 180,
		},
		{
			field: "idlistanom",
			headerName: "IDLISTANOM",
			width: 180,
		},
		{
			field: "puesto",
			headerName: "PUESTO",
			width: 180,
		},
		{
			field: "nombre",
			headerName: "NOMBRE",
			width: 180,
		},
		{
			field: "claveelector",
			headerName: "CLAVEELECTOR",
			width: 180,
		},
		{
			field: "idjefe",
			headerName: "IDJEFE",
			width: 180,
		},

	];

	return (
		<div>
			<h3>Lista</h3>
			<DataGridCpt columns={columns} actArray={activistas} reload={reload} />
		</div>
	);
};

export default Promovidos;
