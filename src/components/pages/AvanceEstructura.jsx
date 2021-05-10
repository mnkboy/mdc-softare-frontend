import React, { useEffect, useState } from "react";
import { Divider } from '@material-ui/core'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { useDispatch, useSelector } from "react-redux";
import Link from '@material-ui/core/Link';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { getGraficasRolAccion } from "../../redux/GraficasPorRolDucks";
import { retrievePersonaActivistaAccion } from "../../redux/PersonaActivistaDucks";

import MaterialTableCpt from '../utils/MaterialTableCpt';

//BreadCums
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}


const AvanceEstructura = () => {
    const dispatch = useDispatch();
    const activistas = useSelector((store) => store.personasActivistas.array);
    const totalrol = useSelector((store) => store.graficasPorRol.array);

    const [nombre, setNombre] = useState("")

    //Persona
    const persona = {
        id: "",
        votado: 0,
    };

    useEffect(() => {
        //Llamamos al store de redux
        dispatch(getGraficasRolAccion());

        //Obtenemos el token
        const token = localStorage.getItem(`${process.env.REACT_APP_TOKEN_NAME}`);
        const base64Url = token.split('.')[1];
        const decodedValue = JSON.parse(window.atob(base64Url));
        persona.id = decodedValue.id_user;
        setNombre(decodedValue.name)

        dispatch(retrievePersonaActivistaAccion(persona));
    }, []);

    //Reasignamos datos id para mapear tipo arbol
    const preparaDatos = () => {
        //Obtenemos el token
        const token = localStorage.getItem(`${process.env.REACT_APP_TOKEN_NAME}`);
        const base64Url = token.split('.')[1];
        const decodedValue = JSON.parse(window.atob(base64Url));

        //Obtenemos el valor del idrol actual de la persona en session
        const idpuesto = decodedValue.id_puesto;

        //reasignamos id para los porcentajes de activistas
        totalrol.map(
            item => {

                //Establecemos el id 
                item.id = item.idpuesto
                //Verificamos que solo traemos elementos nuestros
                if (item.idjefe != idpuesto) {
                    if (item.idpuesto != idpuesto) {
                        totalrol.splice(item)
                    }
                }

            }
        )

        //reasignamos id para la estructura total
        activistas.map(
            item => {
                //Establecemos el id 
                item.id = item.idpuesto
            }
        )


    }


    // Columnas
    const activistascolumns = [
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
        {
            field: "horavoto",
            headerName: "HORAVOTO",
            width: 180,
        },

    ];

    console.log(activistas)



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
            field: "telefono",
            title: "TELEFONO",
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
                    Avance estructura
      			</Link>
            </Breadcrumbs><br />
            {preparaDatos()}
            {/* <Divider />
            <div style={{ width: '100%' }}>
                <Box display="flex" p={1} bgcolor="background.paper">
                    <MaterialTableCpt title={"Votos Responsable"} columns={activistascolumns} data={activistas} parentChildData={(row, rows) => rows.find(a => a.id === row.idjefe)} />
                </Box>
            </div> */}
            <Divider />


            <MaterialTableCpt title={nombre} columns={columns} data={totalrol} parentChildData={(row, rows) => rows.find(a => a.id === row.idjefe)} />



        </div>
    )
}

export default AvanceEstructura
