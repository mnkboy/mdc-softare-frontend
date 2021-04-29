import React, { useEffect, Component } from "react";
import { Divider } from '@material-ui/core'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { useDispatch, useSelector } from "react-redux";
import Link from '@material-ui/core/Link';

import { getGraficasProgresoLocalidadAccion } from "../../redux/GraficasProgresoLocalidadDucks";
import { getGraficasProgresoSeccionAccion } from "../../redux/GraficasProgresoSeccionDucks.js";
import { getGraficasProgresoEdadAccion } from "../../redux/GraficasProgresoEdadDucks.js";
import { retrievePersonaActivistaAccion } from "../../redux/PersonaActivistaDucks";
import { getGraficasEstructuraAccion, } from "../../redux/GraficasEstructuraDucks";


import DataGridCpt from "../utils/DataGridCpt";
import MaterialTableCpt from '../utils/MaterialTableCpt';

//BreadCums
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const Progreso = () => {
    const dispatch = useDispatch();

    const progresolocalidad = useSelector((store) => store.graficasProgresoLocalidad.array);
    const progresoseccion = useSelector((store) => store.graficasProgresoSeccion.array);
    const progresoedad = useSelector((store) => store.graficasProgresoEdad.array);    
    const activistas = useSelector((store) => store.personasActivistas.array);
    const totalestructura = useSelector((store) => store.graficasEstructura.array);

    //Persona
	const persona = {
		id: "",
		votado: 0,
	};

    useEffect(() => {


        dispatch(getGraficasProgresoLocalidadAccion());
        dispatch(getGraficasProgresoSeccionAccion());
        dispatch(getGraficasProgresoEdadAccion());
        dispatch(retrievePersonaActivistaAccion(persona));
        dispatch(getGraficasEstructuraAccion());

        const id = setInterval(() => {
            dispatch(getGraficasProgresoLocalidadAccion());
        }, 30000);




        return () => clearInterval(id);
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




    //============== TABLAS ==============    

    const columnsestructura = [
        {
            field: "id",
            headerName: "Coordinadores",
            width: 180,
        },
        {
            field: "activista",
            headerName: "Activistas",
            width: 180,
        },
        {
            field: "promovido",
            headerName: "Promovidos",
            width: 180,
        },
        {
            field: "total",
            headerName: "Total de personas",
            width: 180,
        },

    ];

    const columnstotalseccion = [
        {
            field: "id",
            headerName: "Seccion",
            width: 180,
        },
        {
            field: "votados",
            headerName: "Votados",
            width: 180,
        },
        {
            field: "novotados",
            headerName: "No votados",
            width: 180,
        },
        {
            field: "total",
            headerName: "Total",
            width: 180,
        },
    ];


    //============== PROGRESO ============
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

    const columnsprogresolocalidad = [
        {
            field: "id",
            headerName: "ID",
            width: 180,
            hide: true,
        },
        {
            field: "localidad",
            headerName: "Localidad",
            width: 180,
        },
        {
            field: "total",
            headerName: "Total",
            width: 180,
        },
    ];

    const columnsprogresoseccion = [
        {
            field: "id",
            headerName: "ID",
            width: 180,
            hide: true,
        },
        {
            field: "seccion",
            headerName: "Seccion",
            width: 180,
        },
        {
            field: "total",
            headerName: "Total",
            width: 180,
        },
    ];

    const columnsprogresoedad = [
        {
            field: "id",
            headerName: "ID",
            width: 180,
            hide: true,
        },
        {
            field: "edad",
            headerName: "Edad",
            width: 180,
        },
        {
            field: "total",
            headerName: "Total",
            width: 180,
        },
    ];

    //============== TABLAS ==============

    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    color="textPrimary"
                    href="/home"
                    onClick={handleClick}
                    aria-current="page"
                >
                    Progreso
      			</Link>
            </Breadcrumbs><br />

            {preparaDatos()}
            <Divider />
            <div className="card col-sm-10 col-md-10 col-lg-10 mb-5">
                <h1 className="centerText">Progreso Localidad: </h1>
                <DataGridCpt columns={columnsprogresolocalidad} actArray={progresolocalidad} height={200} />

            </div>

            <Divider />
            <div className="card col-sm-10 col-md-10 col-lg-10 mb-5">
                <h1 className="centerText">Progreso Seccion: </h1>
                <DataGridCpt columns={columnsprogresoseccion} actArray={progresoseccion} height={200} />

            </div>

            <Divider />
            <div className="card col-sm-10 col-md-10 col-lg-10 mb-5">
                <h1 className="centerText">Progreso Edad: </h1>
                <DataGridCpt columns={columnsprogresoedad} actArray={progresoedad} height={400} />

            </div>


            <Divider />            
            <MaterialTableCpt title={"Detalles promovido"} columns={columns} data={activistas} parentChildData={(row, rows) => rows.find(a => a.id === row.idjefe)} />
            {/* <div className="card col-sm-10 col-md-10 col-lg-10 mb-5"> */}


            {/* </div> */}

            {/* <Divider />
            <div className="card col-sm-10 col-md-10 col-lg-10 mb-5">
                <h1 className="centerText">Total de votos: </h1>
                <Thermometer width="10%" height="10%" steps={5} minValue={0} maxValue={100} currentValue={15} />
            </div> */}
        </div>
    )
}

export default Progreso
