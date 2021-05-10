import React, { useEffect } from "react";
import DataGridCpt from "../utils/DataGridCpt";
import { useDispatch, useSelector } from "react-redux";
import DoneAllIcon from '@material-ui/icons/DoneAll';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { retrievePersonaActivistaAccion } from "../../redux/PersonaActivistaDucks";
import { retrieveApoyoDePromovidosAccion, updateApoyoDePromovidosAccion } from "../../redux/ApoyoDePromovidosDucks";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

const ApoyoDePromovidos = () => {
    const dispatch = useDispatch();
    const apoyopromovidos = useSelector((store) => store.apoyoDePromovidos.array);
    const reloadapoyo = useSelector((store) => store.apoyoDePromovidos.reload);

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
        dispatch(retrievePersonaActivistaAccion(persona));
        dispatch(retrieveApoyoDePromovidosAccion(persona));
    }, []);

    //Verificamos si hubo cambios
    if (reloadapoyo) {
        const token = localStorage.getItem(`${process.env.REACT_APP_TOKEN_NAME}`);
        const base64Url = token.split('.')[1];
        const decodedValue = JSON.parse(window.atob(base64Url));
        persona.id = decodedValue.id_user;
        dispatch(retrieveApoyoDePromovidosAccion(persona));
    }

    //Realizamos
    const handleIne = (thisRow) => {
        persona.id = thisRow.id;
        persona.ine = thisRow.ine ? false : true;
        persona.apoyo = null;
        persona.lider = null;
        persona.candidato = null;
        persona.r1 = null;

        dispatch(updateApoyoDePromovidosAccion(persona));
    };

    const handleApoyo = (thisRow) => {
        persona.id = thisRow.id;
        persona.ine = null;
        persona.apoyo = thisRow.apoyo ? false : true;
        persona.lider = null;
        persona.candidato = null;
        persona.r1 = null;
        dispatch(updateApoyoDePromovidosAccion(persona));
    };

    const handleLider = (thisRow) => {
        persona.id = thisRow.id;
        persona.ine = null;
        persona.apoyo = null;
        persona.lider = thisRow.lider ? false : true;
        persona.candidato = null;
        persona.r1 = null;
        dispatch(updateApoyoDePromovidosAccion(persona));
    };

    const handleCandidato = (thisRow) => {
        persona.id = thisRow.id;
        persona.ine = null;
        persona.apoyo = null;
        persona.lider = null;
        persona.candidato = thisRow.candidato ? false : true;
        persona.r1 = null;

        dispatch(updateApoyoDePromovidosAccion(persona));
    };

    const handleR1 = (thisRow) => {
        persona.id = thisRow.id;
        persona.ine = null;
        persona.apoyo = null;
        persona.lider = null;
        persona.candidato = null;
        persona.r1 = thisRow.r1 ? false : true;
        dispatch(updateApoyoDePromovidosAccion(persona));
    };


    // Columnas
    const columnsapoyo = [
        {
            field: "id",
            headerName: "ID",
            width: 180,
            hide: true,
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
            field: "ine",
            headerName: "INE",
            width: 80,
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

                    handleIne(thisRow);
                };
                if (params.value) {
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
            field: "apoyo",
            headerName: "APOYO",
            width: 100,
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

                    handleApoyo(thisRow);
                };
                if (params.value) {
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
            field: "lider",
            headerName: "LIDER",
            width: 100,
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

                    handleLider(thisRow);
                };
                if (params.value) {
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
            field: "candidato",
            headerName: "CANDIDATO",
            width: 140,
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

                    handleCandidato(thisRow);
                };
                if (params.value) {
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
            field: "r1",
            headerName: "R1",
            width: 80,
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

                    handleR1(thisRow);
                };
                if (params.value) {
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
            <DataGridCpt columns={columnsapoyo} actArray={apoyopromovidos} reload={reloadapoyo} pagesize={100} />
        </div>
    );
};

export default ApoyoDePromovidos;
