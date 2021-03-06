import React, { useEffect } from "react";
import {
    getCasillaAccion, createCasillaAccion,
    updateCasillaAccion, deleteCasillaAccion
} from "../../redux/CasillasDucks";

import { useDispatch, useSelector } from "react-redux";
import DataGridCpt from "../utils/DataGridCpt";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import MenuButtonListCpt from '../utils/MenuButtonListCpt';

const Casillas = () => {
    //Store y redux
    const dispatch = useDispatch();
    const casillas = useSelector((store) => store.casillas.array);
    const reload = useSelector((store) => store.casillas.reload);

    //Nombre modelo
    const modelo = "casillas";

    //Acciones repository    
    const handleCreate = (casilla) => {
        dispatch(createCasillaAccion(casilla));
    };

    const handleUpdate = (casilla) => {
        dispatch(updateCasillaAccion(casilla));
    };

    const handleDelete = (casilla) => {
        dispatch(deleteCasillaAccion(casilla));
    };

    //BreadCums
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    //Casilla
    const casilla = {
        id: "",
    };

    //Hacemos carga inicial
    useEffect(() => {
        dispatch(getCasillaAccion(casilla));
    }, []);

    //Verificamos si hubo cambios
    if (reload) {
        dispatch(getCasillaAccion(casilla));
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
                    // {
                    //     id: "00e64e87-ac11-4465-9556-5a5a28fbc7b5",
                    //     action: "delete",
                    //     title: "eliminar",
                    //     handle: handleDelete,
                    //     rowdata: thisRow,
                    //     path: `${modelo}`
                    // },

                ]
                return <MenuButtonListCpt acciones={acciones} create={handleCreate} actualizar={handleUpdate} delete={handleDelete} />
            },
        },
        {
            field: "idrepresentantecasilla",
            headerName: "IDREPRESENTANTECASILLA",
            width: 180,
        },
        {
            field: "seccionasignada",
            headerName: "SECCIONASIGNADA",
            width: 180,
        },
        {
            field: "cargo",
            headerName: "CARGO",
            width: 180,
        },
        {
            field: "apertura",
            headerName: "APERTURA",
            width: 180,
        },
        {
            field: "horaapertura",
            headerName: "HORAAPERTURA",
            width: 180,
        },
        {
            field: "flujo1230pm",
            headerName: "FLUJO1230PM",
            width: 180,
        },
        {
            field: "promovidos1230pm",
            headerName: "PROMOVIDOS1230PM",
            width: 180,
        },
        {
            field: "flujo430pm",
            headerName: "FLUJO430PM",
            width: 180,
        },
        {
            field: "promovidos430pm",
            headerName: "PROMOVIDOS430PM",
            width: 180,
        },
        {
            field: "flujo6pm",
            headerName: "FLUJO6PM",
            width: 180,
        },
        {
            field: "promovidos6pm",
            headerName: "PROMOVIDOS6PM",
            width: 180,
        },
        {
            field: "cierre6pm",
            headerName: "CIERRE6PM",
            width: 180,
        },
        {
            field: "horacierre",
            headerName: "HORACIERRE",
            width: 180,
        },
        {
            field: "rpp1",
            headerName: "RPP1",
            width: 180,
        },
        {
            field: "rpp2",
            headerName: "RPP2",
            width: 180,
        },
        {
            field: "rps1",
            headerName: "RPS1",
            width: 180,
        },
        {
            field: "incidente",
            headerName: "INCIDENTE",
            width: 180,
        },
        {
            field: "nombre",
            headerName: "NOMBRE",
            width: 180,
        },
        {
            field: "municipio",
            headerName: "MUNICIPIO",
            width: 180,
        },
        {
            field: "localidad",
            headerName: "LOCALIDAD",
            width: 180,
        },
        {
            field: "distrito ",
            headerName: "DISTRITO",
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
                    href="/casillas"
                    onClick={handleClick}
                    aria-current="page"
                >
                    Casillas
      			</Link>
            </Breadcrumbs><br />
            <DataGridCpt columns={columns} actArray={casillas} reload={reload} />
        </div>
    )
}

export default Casillas
