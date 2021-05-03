import React, { useEffect } from "react";
import DataGridCpt from "../utils/DataGridCpt";
import { useDispatch, useSelector } from "react-redux";
import DoneAllIcon from '@material-ui/icons/DoneAll';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { retrievePersonaActivistaAccion, updateVotoAccion } from "../../redux/PersonaActivistaDucks";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import MenuButtonListCpt from '../utils/MenuButtonListCpt';

const Promovidos = () => {
	const dispatch = useDispatch();
	const activistas = useSelector((store) => store.personasActivistas.array);
	const reload = useSelector((store) => store.personasActivistas.reload);


	//Nombre modelo
	const modelo = "promovidos";

	//BreadCums
	function handleClick(event) {
		event.preventDefault();
		console.info('You clicked a breadcrumb.');
	}

	//Persona
	const persona = {
		id: "",
		votado: 0,
	};

	//Hacemos carga inicial
	useEffect(() => {
		dispatch(retrievePersonaActivistaAccion(persona));
	}, []);

	//Verificamos si hubo cambios
	if (reload) {
		persona.id = "";
		dispatch(retrievePersonaActivistaAccion(persona));
	}

	//Realizamos
	const performAction = (id) => {
		handleVotado(id);
	};

	//Handle votado
	const handleVotado = (thisRow) => {
		persona.id = thisRow.id;
		persona.votado = thisRow.votado === 1 ? 0 : 1;
		dispatch(updateVotoAccion(persona));
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
			field: "actions",
			headerName: "ACCION",
			width: 120,
			disableClickEventBubbling: true,
			renderCell: (params: CellParams) => {

				const api: GridApi = params.api;
				const fields = api
					.getAllColumns()
					.map((c) => c.field)
					.filter((c) => c !== "__check__" && !!c);
				const thisRow = {};

				fields.forEach((f) => {
					thisRow[f] = params.getValue(f);
				});

				const acciones = [
					{
						id: thisRow.id,
						action: "get",
						title: "ver",
						handle: null,
						rowdata: thisRow,
						path: `/${modelo}/get/${thisRow.id}`,
					},
				]
				return <MenuButtonListCpt acciones={acciones} />
			},
		},
		{
			field: "votado",
			headerName: "VOTADO",
			width: 120,
			renderCell: (params: CellParams) => {
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

					performAction(thisRow);
				};
				if (params.value === 1) {
					return <DoneAllIcon
						style={{ color: '#03a9f4' }}
						onClick={onClick}
					/>;
				} else {
					return <RadioButtonUncheckedIcon
						onClick={onClick}
					/>;
				}

			},
		},
		{
			field: "seccion",
			headerName: "SECCION",
			width: 150,
		},
		{
			field: "idpuesto",
			headerName: "IDPUESTO",
			width: 120,
		},
		{
			field: "nombre",
			headerName: "NOMBRE",
			width: 200,
		},
		{
			field: "apellidopaterno",
			headerName: "APELLIDO P",
			width: 200,
		},
		{
			field: "apellidomaterno",
			headerName: "APELLIDO M",
			width: 200,
		},
		{
			field: "alias",
			headerName: "ALIAS",
			width: 200,
		},
		{
			field: "telefono",
			headerName: "TELEFONO",
			width: 180,
		},
		{ field: "numero", headerName: "NUMERO", width: 180, },
		{ field: "calle", headerName: "CALLE", width: 180, },
		{ field: "cruzamientouno", headerName: "CRUZAMIENTOUNO", width: 180, },
		{ field: "cruzamientodos", headerName: "CRUZAMIENTODOS", width: 180, },
		{ field: "colonia", headerName: "COLONIA", width: 180, },
		{ field: "manzana", headerName: "MANZANA", width: 180, },

		{
			field: "ocupacion",
			headerName: "OCUPACION",
			width: 200,
		},
		{
			field: "edad",
			headerName: "EDAD",
			width: 100,
		},
		{
			field: "genero",
			headerName: "GENERO",
			width: 120,
		},
		{
			field: "claveelector",
			headerName: "CLAVEELECTOR",
			width: 180,
		},
		{
			field: "localidad",
			headerName: "LOCALIDAD",
			width: 180,
		},
		{
			field: "municipio",
			headerName: "MUNICIPIO",
			width: 180,
		},
		{
			field: "idrol",
			headerName: "IDROL",
			width: 100,
		},
		{
			field: "idjefe",
			headerName: "IDJEFE",
			width: 100,
		},
		{
			field: "puesto",
			headerName: "PUESTO",
			width: 150,
		},
		// {
		// 	field: "horavoto",
		// 	headerName: "HORAVOTO",
		// 	width: 180,
		// },

	];

	return (
		<div>
			<Breadcrumbs aria-label="breadcrumb">
				<Link color="inherit" href="/home" >
					Home
      			</Link>
				<Link
					color="textPrimary"
					href="/promovidos"
					onClick={handleClick}
					aria-current="page"
				>
					Promovidos
      			</Link>
			</Breadcrumbs><br />
			<DataGridCpt columns={columns} actArray={activistas} reload={reload} />
		</div>
	);
};

export default Promovidos;
