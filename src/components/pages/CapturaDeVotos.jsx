import React, { useEffect, useState } from "react";
import DataGridCpt from "../utils/DataGridCpt";
import { useDispatch, useSelector } from "react-redux";
import DoneAllIcon from '@material-ui/icons/DoneAll';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { retrievePersonaActivistaAccion, updateVotoAccion } from "../../redux/PersonaActivistaDucks";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import MenuButtonListCpt from '../utils/MenuButtonListCpt';
import BarChartDemo from '../charts/HorizontalChart';
import { ResizableBox } from 'react-resizable';
import { Line, Circle } from 'rc-progress';

const CapturaDeVotos = () => {
    const dispatch = useDispatch();
    const activistas = useSelector((store) => store.personasActivistas.array);
    const reload = useSelector((store) => store.personasActivistas.reload);
    const [nombre, setNombre] = useState("")
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
        const token = localStorage.getItem(`${process.env.REACT_APP_TOKEN_NAME}`);
        const base64Url = token.split('.')[1];
        const decodedValue = JSON.parse(window.atob(base64Url));
        persona.id = decodedValue.id_user;
        setNombre(decodedValue.name)
        dispatch(retrievePersonaActivistaAccion(persona));
    }, []);

    //Verificamos si hubo cambios
    if (reload) {
        const token = localStorage.getItem(`${process.env.REACT_APP_TOKEN_NAME}`);
        const base64Url = token.split('.')[1];
        const decodedValue = JSON.parse(window.atob(base64Url));
        persona.id = decodedValue.id_user;
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

    const votados = () => {
        let suma = 0;
        activistas.forEach(item =>
            suma = suma + item.votado,
        );
        return suma;
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
            field: "tipocasilla",
            headerName: "TIPO CASILLA",
            width: 200,
        },
        {
            field: "ordencasilla",
            headerName: "ORDEN CASILLA",
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
            field: "genero",
            headerName: "GENERO",
            width: 180,
        },
        // {
        //     field: "horavoto",
        //     headerName: "HORAVOTO",
        //     width: 180,
        // },

    ];

    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    color="textPrimary"
                    href="/promovidos"
                    onClick={handleClick}
                    aria-current="page"
                >
                    Captura de votos
      			</Link>
            </Breadcrumbs><br />
            <div className="card col-sm-10 col-md-10 col-lg-10 mb-5">
                <h1 className="centerText"> {nombre}</h1>
            </div>

            <div className="card col-sm-10 col-md-10 col-lg-10 mb-5">
                <h3 className="centerText"> Votados: {votados()} | Faltantes: {activistas.length-votados()} | Meta: {activistas.length} | Avance: {((votados() / activistas.length) * 100).toFixed(2)} %</h3>
                <Line percent={(votados() / activistas.length) * 100} strokeWidth="4" strokeColor="#4caf50" trailColor="#D9D9D9" />
            </div>

            <DataGridCpt columns={columns} actArray={activistas} reload={reload} pagesize={100} />
        </div>
    );
};

export default CapturaDeVotos;
