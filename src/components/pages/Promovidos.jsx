import React, { useEffect } from "react";
import DataGridCpt from "../utils/DataGridCpt";
import { useDispatch, useSelector } from "react-redux";
import { Button } from '@material-ui/core'
import { obtenerPersonaActivistaAccion,actualizarPersonaActivistaVotadaAccion } from "../../redux/PersonaActivistaDucks";
const Promovidos = () => {
	const dispatch = useDispatch();
    const activistas = useSelector((store) => store.personasActivistas.array);
    const reload = useSelector((store) => store.personasActivistas.reload);

    if (reload){
        dispatch(obtenerPersonaActivistaAccion());
        console.log(reload);
    }
	//PersonasActivistasList
	const persona = {
		id: "",
		votado: 0,
	};

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

	useEffect(() => {
		dispatch(obtenerPersonaActivistaAccion());
	}, []);

	// Columnas
	const columns = [
		{
			field: "id",
			headerName: "ID",
			width: "100%",
			hide: true,
		},
		{
			field: "idcasilla",
			headerName: "IDCASILLA",
			width: 180,
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
		{
			field: "votado",
			headerName: "VOTADO",
			width: 120,
		},
		{
			field: "",
			headerName: "VOTAR",
			disableClickEventBubbling: true,
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

					performAction(thisRow.id);
				};

				return <Button onClick={onClick}>Click</Button>;
			},
		},
	];

	return (
		<div>
			<h3>Lista</h3>
			<DataGridCpt columns={columns} actArray={activistas} />
		</div>
	);
};

export default Promovidos;
