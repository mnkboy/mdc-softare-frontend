import React, { useEffect, Component } from "react";
import { Divider } from '@material-ui/core'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { useDispatch, useSelector } from "react-redux";
import Link from '@material-ui/core/Link';

import { getGraficasRolAccion } from "../../redux/GraficasPorRolDucks";
import { getGraficasEstructuraAccion } from "../../redux/GraficasEstructuraDucks";
import { getGraficasTotalSeccionAccion } from "../../redux/GraficasTotalSeccionDucks";

import { getGraficasProgresoLocalidadAccion } from "../../redux/GraficasProgresoLocalidadDucks";
import { getGraficasProgresoSeccionAccion } from "../../redux/GraficasProgresoSeccionDucks.js";
import { getGraficasProgresoEdadAccion } from "../../redux/GraficasProgresoEdadDucks.js";

import DataGridCpt from "../utils/DataGridCpt";
import MaterialTableCpt from '../utils/MaterialTableCpt';

//BreadCums
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const Progreso = () => {
    const dispatch = useDispatch();

    const totalrol = useSelector((store) => store.graficasPorRol.array);
    const totalestructura = useSelector((store) => store.graficasEstructura.array);
    const totalseccion = useSelector((store) => store.graficasTotalSeccion.array);
    const progresolocalidad = useSelector((store) => store.graficasProgresoLocalidad.array);
    const progresoseccion = useSelector((store) => store.graficasProgresoSeccion.array);
    const progresoedad = useSelector((store) => store.graficasProgresoEdad.array);

    useEffect(() => {


        dispatch(getGraficasRolAccion());
        dispatch(getGraficasEstructuraAccion());
        dispatch(getGraficasTotalSeccionAccion());
        dispatch(getGraficasProgresoLocalidadAccion());
        dispatch(getGraficasProgresoSeccionAccion());
        dispatch(getGraficasProgresoEdadAccion());

        const id = setInterval(() => {
            dispatch(getGraficasProgresoLocalidadAccion());
        }, 30000);




        return () => clearInterval(id);
    }, []);

    //Reasignamos datos id para mapear tipo arbol
    const preparaDatos = () => {
        //reasignamos id
        totalrol.map(
            item => {
                item.id = item.idpuesto
            }
        )
    }

    //============== TABLAS ==============
    // VOTOS ROL
    const columns = [
        {
            field: "id",
            title: "ID",
            headerStyle: { minWidth: 100 }, cellStyle: { minWidth: 100 },
            hidden: true,
        },
        {
            field: "nombre",
            title: "NOMBRE",
            headerStyle: { minWidth: 100 }, cellStyle: { minWidth: 100 },
        },
        {
            field: "idrol",
            title: "IDROL",
            headerStyle: { minWidth: 100 }, cellStyle: { minWidth: 100 },
            hidden: true,
        },
        {
            field: "idpuesto",
            title: "IDPUESTO",
            headerStyle: { minWidth: 100 }, cellStyle: { minWidth: 100 },
            hidden: true,
        },
        {
            field: "idjefe",
            title: "IDJEFE",
            headerStyle: { minWidth: 100 }, cellStyle: { minWidth: 100 },
            hidden: true,
        },
        {
            field: "votados",
            title: "VOTADOS",
            headerStyle: { minWidth: 100 }, cellStyle: { minWidth: 100 },
        },
        {
            field: "novotados",
            title: "SIN VOTAR",
            headerStyle: { minWidth: 100 }, cellStyle: { minWidth: 100 },
        },
        {
            field: "total",
            title: "TOTAL",
            headerStyle: { minWidth: 100 }, cellStyle: { minWidth: 100 },
        },
        {
            field: "porcentaje",
            title: "PORCENTAJE AVANCE",
            headerStyle: { minWidth: 100 }, cellStyle: { minWidth: 100 },
        },
    ];

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
            {/* <div className="card col-sm-10 col-md-10 col-lg-10 mb-5"> */}

            <MaterialTableCpt title={"Votos Responsable"} columns={columns} data={totalrol} parentChildData={(row, rows) => rows.find(a => a.id === row.idjefe)} />
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
