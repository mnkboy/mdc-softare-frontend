import React, { useEffect } from "react";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { retrievePersonaActivistaAccion, updateVotoAccion } from "../../../redux/PersonaActivistaDucks";
import MaterialTableCpt from '../../utils/MaterialTableCpt';
import PieChart from '../../charts/PieChart';
import { ResizableBox } from 'react-resizable';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';


const PromovidoDetalle = () => {
	//Store y configuracion REDUX
	const dispatch = useDispatch();
	const activistas = useSelector((store) => store.personasActivistas.array);

	//BreadCums
	function handleClick(event) {
		event.preventDefault();
		console.info('You clicked a breadcrumb.');
	}

	//Recibimos parametros
	const { id } = useParams()

	//Persona
	const persona = {
		id: id,
		votado: 0,
	};

	//Hacemos carga inicial
	useEffect(() => {
		persona.id = id;
		dispatch(retrievePersonaActivistaAccion(persona));
	}, []);

	//Reasignamos datos id para mapear tipo arbol
	const preparaDatos = () => {
		//reasignamos id
		activistas.map(
			item => {
				item.id = item.idpuesto
			}
		)
	}

	const imprimeDatosActivista = () => {
		if (activistas[0] === undefined) {
			return (
				<div>
					< h5 > Cargando... </h5 >
				</div>
			)
		} return (
			<div>
				< h5 > Nombre: {activistas[0].nombre}</h5 >
				< h5 > Telefono: {activistas[0].telefono}</h5 >
				< h5 > Domicilio: {activistas[0].domicilio}</h5 >
			</div>
		)

	}

	const suma = () => {
		let suma = 0;
		activistas.forEach(item =>
			suma = suma + item.votado,
		);
		return suma;
	}

	const getColores = () => {
		const colores = [];
		let color1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
		let color2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
		colores.push(color1)
		colores.push(color2)

		return colores;
	}
	//Columnas
	const columns = [
		{ title: 'VOTADO', field: 'votado', headerStyle: { minWidth: 100 }, cellStyle: { minWidth: 100 }, },
		{ title: 'IDPUESTO', field: 'idpuesto', headerStyle: { minWidth: 100 }, cellStyle: { minWidth: 100 }, },
		{ title: 'IDROL', field: 'idrol', headerStyle: { minWidth: 100 }, cellStyle: { minWidth: 100 }, },
		{ title: 'IDJEFE', field: 'idjefe', headerStyle: { minWidth: 100 }, cellStyle: { minWidth: 100 }, },
		{ title: 'PUESTO', field: 'puesto', headerStyle: { minWidth: 180 }, cellStyle: { minWidth: 180 }, },
		{ title: 'NOMBRE', field: 'nombre', headerStyle: { minWidth: 200 }, cellStyle: { minWidth: 200 }, },
		{ title: "APELLIDO P", field: "apellidopaterno", headerStyle: { minWidth: 200 }, cellStyle: { minWidth: 200 }, },
		{ title: "APELLIDO M", field: "apellidomaterno", headerStyle: { minWidth: 200 }, cellStyle: { minWidth: 200 }, },
		{ title: "alias", field: "alias", headerStyle: { minWidth: 200 }, cellStyle: { minWidth: 200 }, },
		{ title: 'TELEFONO', field: 'telefono', headerStyle: { minWidth: 140 }, cellStyle: { minWidth: 140 }, },
		{ title: 'DOMICILIO', field: 'domicilio', headerStyle: { minWidth: 280 }, cellStyle: { minWidth: 280 }, },

		{ title: "NUMERO", field: "numero", width: 180, },
		{ title: "CALLE", field: "calle", width: 180, },
		{ title: "CRUZAMIENTOUNO", field: "cruzamientouno", width: 180, },
		{ title: "CRUZAMIENTODOS", field: "cruzamientodos", width: 180, },
		{ title: "COLONIA", field: "colonia", width: 180, },
		{ title: "MANZANA", field: "manzana", width: 180, },

		{ title: 'SECCION', field: 'seccion', headerStyle: { minWidth: 100 }, cellStyle: { minWidth: 100 }, },
		{ title: 'OCUPACION', field: 'ocupacion', headerStyle: { minWidth: 180 }, cellStyle: { minWidth: 180 }, },
		{ title: 'EDAD', field: 'edad', headerStyle: { minWidth: 100 }, cellStyle: { minWidth: 100 }, },
		{ title: 'GENERO', field: 'genero', headerStyle: { minWidth: 100 }, cellStyle: { minWidth: 100 }, },
		{ title: 'CLAVEELECTOR', field: 'claveelector', headerStyle: { minWidth: 180 }, cellStyle: { minWidth: 180 }, },
		{ title: 'LOCALIDAD', field: 'localidad', headerStyle: { minWidth: 180 }, cellStyle: { minWidth: 180 }, },
		{ title: 'MUNICIPIO', field: 'municipio', headerStyle: { minWidth: 180 }, cellStyle: { minWidth: 180 }, },
		{ title: 'HORAVOTO', field: 'horavoto', headerStyle: { minWidth: 180 }, cellStyle: { minWidth: 180 }, },
	];

	return (



		<div >
			<Breadcrumbs aria-label="breadcrumb">
				<Link color="inherit" href="/home" >
					Home
      			</Link>
				<Link color="inherit" href="/promovidos" >
					Promovidos
      			</Link>
				<Link
					color="textPrimary"
					href="/promovidos/promovidosdetalle/"
					onClick={handleClick}
					aria-current="page"
				>
					Detalle
      			</Link>

			</Breadcrumbs><br />
			{preparaDatos()}
			{imprimeDatosActivista()}
			<ResizableBox width={600} height={400}
				minConstraints={[100, 100]} maxConstraints={[600, 400]}>
				<h4>Meta: {activistas.length}</h4>
				<PieChart data={[suma(), (activistas.length - suma())]} tags={["Votados", "No Votados"]} colors={getColores()} />
			</ResizableBox>

			<MaterialTableCpt title={"Detalles promovido"} columns={columns} data={activistas} parentChildData={(row, rows) => rows.find(a => a.id === row.idjefe)} />

		</div>

	)
}

export default PromovidoDetalle


