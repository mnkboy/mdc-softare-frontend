import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerEleccionesAccion } from "../../redux/EleccionesDucks";
import DataGridCpt from "../utils/DataGridCpt";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

const Elecciones = () => {
    //Datos iniciales
    const dispatch = useDispatch();
    const elecciones = useSelector((store) => store.elecciones.array);

    //Carga iniciales
    useEffect(() => {
        dispatch(obtenerEleccionesAccion());
    }, []);

    //BreadCums
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    // Columnas
    const columns = [
        {
            field: "id",
            headerName: "IDTABLAELECCIONES",
            width: 180,
        },
        {
            field: "idcasilla",
            headerName: "IDCASILLA",
            width: 180,
        },
        {
            field: "idrepcasilla",
            headerName: "IDREPCASILLA",
            width: 180,
        },
        {
            field: "seccion",
            headerName: "SECCION",
            width: 180,
        },
        {
            field: "tipocasilla",
            headerName: "TIPOCASILLA",
            width: 180,
        },
        {
            field: "pan",
            headerName: "PAN",
            width: 180,
        },
        {
            field: "pri",
            headerName: "PRI",
            width: 180,
        },
        {
            field: "prd",
            headerName: "PRD",
            width: 180,
        },
        {
            field: "pvem",
            headerName: "PVEM",
            width: 180,
        },
        {
            field: "pt",
            headerName: "PT",
            width: 180,
        },
        {
            field: "movciudadano",
            headerName: "MOVCIUDADANO",
            width: 180,
        },
        {
            field: "nuevaalianza",
            headerName: "NUEVAALIANZA",
            width: 180,
        },
        {
            field: "morena",
            headerName: "MORENA",
            width: 180,
        },
        {
            field: "encuentrosocial",
            headerName: "ENCUENTROSOCIAL",
            width: 180,
        },
        {
            field: "panprdmovciudadano",
            headerName: "PANPRDMOVCIUDADANO",
            width: 180,
        },
        {
            field: "panprd",
            headerName: "PANPRD",
            width: 180,
        },
        {
            field: "panmovciudadano",
            headerName: "PANMOVCIUDADANO",
            width: 180,
        },
        {
            field: "prdmovciudadano",
            headerName: "PRDMOVCIUDADANO",
            width: 180,
        },
        {
            field: "pripvemnuevaalianza",
            headerName: "PRIPVEMNUEVAALIANZA",
            width: 180,
        },
        {
            field: "pripvem",
            headerName: "PRIPVEM",
            width: 180,
        },
        {
            field: "prinuevaalianza",
            headerName: "PRINUEVAALIANZA",
            width: 180,
        },
        {
            field: "pvemnuevaalianza",
            headerName: "PVEMNUEVAALIANZA",
            width: 180,
        },
        {
            field: "ptmorenaencuentrosocial",
            headerName: "PTMORENAENCUENTROSOCIAL",
            width: 180,
        },
        {
            field: "ptmorena",
            headerName: "PTMORENA",
            width: 180,
        },
        {
            field: "ptencuentrosocial",
            headerName: "PTENCUENTROSOCIAL",
            width: 180,
        },
        {
            field: "morenaencuentrosocial",
            headerName: "MORENAENCUENTROSOCIAL",
            width: 180,
        },
        {
            field: "candidatoindependiente",
            headerName: "CANDIDATOINDEPENDIENTE",
            width: 180,
        },
        {
            field: "noregistrados",
            headerName: "NOREGISTRADOS",
            width: 180,
        },
        {
            field: "candidatosnoregistrados",
            headerName: "CANDIDATOSNOREGISTRADOS",
            width: 180,
        },
        {
            field: "nulos",
            headerName: "NULOS",
            width: 180,
        },
        {
            field: "total",
            headerName: "TOTAL",
            width: 180,
        },
        {
            field: "listanominal",
            headerName: "LISTANOMINAL",
            width: 180,
        },
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
                    Elecciones
      			</Link>
            </Breadcrumbs><br />
            <DataGridCpt columns={columns} actArray={elecciones} />
        </div>
    )
}

export default Elecciones    