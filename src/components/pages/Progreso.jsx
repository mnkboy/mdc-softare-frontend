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
import MultiAxisChart from '../charts/MultiAxisChart';
import PolarChart from '../charts/PolarChart';

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


    //============== GRAFICAS ==============
    //============== SECCION ==============
    const getTagsSeccion = () => {
        const tagsSeccion = [];
        progresoseccion.map(item => {
            tagsSeccion.push("Seccion: " + item.seccion)
        });
        return tagsSeccion;
    }

    const getTotalSeccion = () => {
        const total = [];
        progresoseccion.map(item => {
            total.push(item.total)
        });
        return total;
    }

    const getColoresSeccion = () => {
        const colores = [];
        let color = '';
        progresoseccion.map(item => {
            color = "#" + Math.floor(Math.random() * 16777215).toString(16);
            colores.push(color)
        });
        return colores;
    }
    //============== SECCION ==============

    //============== EDAD ==============
    const getTagsEdad = () => {
        const tagsEdad = [];
        progresoedad.map(item => {
            tagsEdad.push("Edad: " + item.edad)
        });
        return tagsEdad;
    }

    const getVotosEdad = () => {
        const total = [];
        progresoedad.map(item => {
            total.push(item.total)
        });
        return total;
    }

    const getColoresEdad = () => {
        const colores = [];
        let color = '';
        progresoedad.map(item => {
            color = "#" + Math.floor(Math.random() * 16777215).toString(16);
            colores.push(color)
        });
        return colores;
    }
    //============== EDAD ==============
    //============== GRAFICAS ==============

    //============== TABLAS ==============    
    //============== PROGRESO ============
    //Columnas
    const columns = [
        // { title: 'VOTADO', field: 'votado', headerStyle: { minWidth: 100 }, cellStyle: { minWidth: 100 }, },
        // { title: 'IDPUESTO', field: 'idpuesto', headerStyle: { minWidth: 100 }, cellStyle: { minWidth: 100 }, },
        // { title: 'IDROL', field: 'idrol', headerStyle: { minWidth: 100 }, cellStyle: { minWidth: 100 }, },
        // { title: 'IDJEFE', field: 'idjefe', headerStyle: { minWidth: 100 }, cellStyle: { minWidth: 100 }, },
        // { title: 'PUESTO', field: 'puesto', headerStyle: { minWidth: 180 }, cellStyle: { minWidth: 180 }, },
        { title: 'NOMBRE', field: 'nombre', headerStyle: { minWidth: 200 }, cellStyle: { minWidth: 50 }, },
        { title: "APELLIDO P", field: "apellidopaterno", headerStyle: { minWidth: 200 }, cellStyle: { minWidth: 50 }, },
        { title: "APELLIDO M", field: "apellidomaterno", headerStyle: { minWidth: 200 }, cellStyle: { minWidth: 50 }, },
        { title: "ALIAS", field: "alias", headerStyle: { minWidth: 200 }, cellStyle: { minWidth: 50 }, },
        { title: 'TELEFONO', field: 'telefono', headerStyle: { minWidth: 140 }, cellStyle: { minWidth: 50 }, },
        // { title: 'DOMICILIO', field: 'domicilio', headerStyle: { minWidth: 280 }, cellStyle: { minWidth: 280 }, },
        // { title: "NUMERO", field: "numero", width: 180, },
        // { title: "CALLE", field: "calle", width: 180, },
        // { title: "CRUZAMIENTOUNO", field: "cruzamientouno", width: 180, },
        // { title: "CRUZAMIENTODOS", field: "cruzamientodos", width: 180, },
        // { title: "COLONIA", field: "colonia", width: 180, },
        // { title: "MANZANA", field: "manzana", width: 180, },
        // { title: 'SECCION', field: 'seccion', headerStyle: { minWidth: 100 }, cellStyle: { minWidth: 100 }, },
        { title: 'OCUPACION', field: 'ocupacion', headerStyle: { minWidth: 180 }, cellStyle: { minWidth: 50 }, },
        { title: 'EDAD', field: 'edad', headerStyle: { minWidth: 100 }, cellStyle: { minWidth: 50 }, },
        { title: 'GENERO', field: 'genero', headerStyle: { minWidth: 100 }, cellStyle: { minWidth: 50 }, },
        // { title: 'CLAVEELECTOR', field: 'claveelector', headerStyle: { minWidth: 180 }, cellStyle: { minWidth: 180 }, },
        { title: 'LOCALIDAD', field: 'localidad', headerStyle: { minWidth: 180 }, cellStyle: { minWidth: 50 }, },
        // { title: 'MUNICIPIO', field: 'municipio', headerStyle: { minWidth: 180 }, cellStyle: { minWidth: 180 }, },
        // { title: 'HORAVOTO', field: 'horavoto', headerStyle: { minWidth: 180 }, cellStyle: { minWidth: 180 }, },
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
                <DataGridCpt columns={columnsprogresolocalidad} actArray={progresolocalidad} height={300} />

            </div>

            <Divider />
            <div className="card col-sm-10 col-md-10 col-lg-10 mb-5">
                <h1 className="centerText">Progreso Seccion: </h1>
                <DataGridCpt columns={columnsprogresoseccion} actArray={progresoseccion} height={400} />

            </div>

            <Divider />
            <div className="card col-sm-10 col-md-10 col-lg-10 mb-5">
                <h1 className="centerText">Gráficas / Sección: </h1>
                <PolarChart data={getTotalSeccion()} tags={getTagsSeccion()} colors={getColoresSeccion()} label={"Votos por seccion"} />
            </div>


            <Divider />
            <div className="card col-sm-10 col-md-10 col-lg-10 mb-5">
                <h1 className="centerText">Progreso Edad: </h1>
                <DataGridCpt columns={columnsprogresoedad} actArray={progresoedad} height={400} />

            </div>
            <Divider />
            <div className="card col-sm-10 col-md-10 col-lg-10 mb-5">
                <h1 className="centerText">Gráficas / Edades: </h1>
                <MultiAxisChart data={getVotosEdad()} tags={getTagsEdad()} colors={getColoresEdad()} label={"Progeso por edad"} />
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
