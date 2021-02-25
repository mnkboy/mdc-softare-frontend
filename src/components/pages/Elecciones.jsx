import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getEleccionesAccion, createEleccionesAccion,
    updateEleccionesAccion, deleteEleccionesAccion
} from "../../redux/EleccionesDucks";
import DataGridCpt from "../utils/DataGridCpt";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import MenuButtonListCpt from '../utils/MenuButtonListCpt';

const Elecciones = () => {
    //Datos iniciales
    const dispatch = useDispatch();
    const elecciones = useSelector((store) => store.elecciones.array);
    const reload = useSelector((store) => store.elecciones.reload);

    //Nombre modelo
    const modelo = "elecciones";

    //Acciones repository    
    const handleCreate = (eleccion) => {
        dispatch(createEleccionesAccion(eleccion));
    };

    const handleUpdate = (eleccion) => {
        dispatch(updateEleccionesAccion(eleccion));
    };

    const handleDelete = (eleccion) => {
        dispatch(deleteEleccionesAccion(eleccion));
    };

    //eleccion
    const eleccion = {
        id: "",
    };

    //Carga iniciales
    useEffect(() => {
        dispatch(getEleccionesAccion(eleccion));
    }, []);

    //Verificamos si hubo cambios
    if (reload) {
        dispatch(getEleccionesAccion(eleccion));
    }

    //BreadCums
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

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
            headerName: "ACCIONES",
            width: 140,
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
                    // {
                    //     id: thisRow.id,
                    //     action: "get",
                    //     title: "ver",
                    //     handle: null,
                    //     rowdata: thisRow,
                    //     path: `/${modelo}/get/${thisRow.id}`,
                    // },
                    {
                        id: "00e64e87-ac11-4465-9556-5a5a28fbc7b5",
                        action: "create",
                        title: "crear",
                        handle: handleCreate,
                        rowdata: thisRow,
                        path: `${modelo}/create`
                    },
                    {
                        id: "00e64e87-ac11-4465-9556-5a5a28fbc7b5",
                        action: "update",
                        title: "actualizar",
                        handle: handleUpdate,
                        rowdata: thisRow,
                        path: `${modelo}/update/${thisRow.id}`
                    },
                    {
                        id: "00e64e87-ac11-4465-9556-5a5a28fbc7b5",
                        action: "delete",
                        title: "eliminar",
                        handle: handleDelete,
                        rowdata: thisRow,
                        path: `${modelo}`
                    },

                ]
                return <MenuButtonListCpt acciones={acciones} create={handleCreate} actualizar={handleUpdate} delete={handleDelete} />
            },
        },
        {
            field: "seccion",
            headerName: "SECCION",
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
            field: "panprd",
            headerName: "PANPRD",
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
            <DataGridCpt columns={columns} actArray={elecciones} reload={reload} />
        </div>
    )
}

export default Elecciones    