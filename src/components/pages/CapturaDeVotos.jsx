import React, { useEffect } from "react";
import DataGridCpt from "../utils/DataGridCpt";
import { useDispatch, useSelector } from "react-redux";
import DoneAllIcon from '@material-ui/icons/DoneAll';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { obtenerPersonaActivistaAccion, actualizarPersonaActivistaVotadaAccion } from "../../redux/PersonaActivistaDucks";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import MenuButtonListCpt from '../utils/MenuButtonListCpt';
import BarChartDemo from '../charts/HorizontalChart';
import { ResizableBox } from 'react-resizable';

const CapturaDeVotos = () => {
    const dispatch = useDispatch();
    const activistas = useSelector((store) => store.personasActivistas.array);
    const reload = useSelector((store) => store.personasActivistas.reload);


    console.log(activistas)
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
        console.log(persona.id)
        dispatch(obtenerPersonaActivistaAccion(persona));
    }, []);

    //Verificamos si hubo cambios
    if (reload) {
        const token = localStorage.getItem(`${process.env.REACT_APP_TOKEN_NAME}`);
        const base64Url = token.split('.')[1];
        const decodedValue = JSON.parse(window.atob(base64Url));
        persona.id = decodedValue.id_user;
        dispatch(obtenerPersonaActivistaAccion(persona));
    }

    //Realizamos
    const performAction = (id) => {
        handleVotado(id);
    };

    //Handle votado
    const handleVotado = (thisRow) => {
        persona.id = thisRow.id;
        persona.votado = thisRow.votado === 1 ? 0 : 1;
        console.log(thisRow)
        dispatch(actualizarPersonaActivistaVotadaAccion(persona));
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
        // {
        //     field: "actions",
        //     headerName: "ACCION",
        //     width: 120,
        //     disableClickEventBubbling: true,
        //     renderCell: (params: CellParams) => {

        //         const api: GridApi = params.api;
        //         const fields = api
        //             .getAllColumns()
        //             .map((c) => c.field)
        //             .filter((c) => c !== "__check__" && !!c);
        //         const thisRow = {};

        //         fields.forEach((f) => {
        //             thisRow[f] = params.getValue(f);
        //         });

        //         const acciones = [
        //             {
        //                 id: thisRow.id,
        //                 action: "get",
        //                 title: "ver",
        //                 handle: null,
        //                 rowdata: thisRow,
        //                 path: `/${modelo}/get/${thisRow.id}`,
        //             },
        //         ]
        //         return <MenuButtonListCpt acciones={acciones} />
        //     },
        // },
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

        // {
        //     field: "idpuesto",
        //     headerName: "IDPUESTO",
        //     width: 180,
        // },
        // {
        //     field: "idrol",
        //     headerName: "IDROL",
        //     width: 180,
        // },
        // {
        //     field: "idjefe",
        //     headerName: "IDJEFE",
        //     width: 180,
        // },
        // {
        //     field: "zona",
        //     headerName: "ZONA",
        //     width: 180,
        // },
        // {
        //     field: "puesto",
        //     headerName: "PUESTO",
        //     width: 180,
        // },
        {
            field: "nombre",
            headerName: "NOMBRE",
            width: 360,
        },
        {
            field: "telefono",
            headerName: "TELEFONO",
            width: 180,
        },
        {
            field: "domicilio",
            headerName: "DOMICILIO",
            width: 512,
        },
        // {
        //     field: "claveelector",
        //     headerName: "CLAVEELECTOR",
        //     width: 180,
        // },

        // {
        //     field: "municipio",
        //     headerName: "MUNICIPIO",
        //     width: 180,
        // },
        // {
        //     field: "localidad",
        //     headerName: "LOCALIDAD",
        //     width: 180,
        // },
        // {
        //     field: "distrito",
        //     headerName: "DISTRITO",
        //     width: 180,
        // },
        {
            field: "horavoto",
            headerName: "HORAVOTO",
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
                    Captura de votos
      			</Link>
            </Breadcrumbs><br />
            <ResizableBox width={600} height={400}
                minConstraints={[100, 100]} maxConstraints={[600, 500]}>
                <BarChartDemo tag={"Meta de votos: "} meta={activistas.length} votados={votados()} />
            </ResizableBox>
            <DataGridCpt columns={columns} actArray={activistas} reload={reload} />
        </div>
    );
};

export default CapturaDeVotos;
