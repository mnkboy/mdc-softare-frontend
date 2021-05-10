import React, { useEffect, useState } from "react";
import { Divider } from '@material-ui/core'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { useDispatch, useSelector } from "react-redux";
import Link from '@material-ui/core/Link';
import { retrievePersonaActivistaAccion } from "../../redux/PersonaActivistaDucks";

import MaterialTableCpt from '../utils/MaterialTableCpt';

//BreadCums
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}


const AvanceEstructuraDetallado = () => {
    const dispatch = useDispatch();

    const activistas = useSelector((store) => store.personasActivistas.array);
    const [nombre, setNombre] = useState("")

    //Persona
    const persona = {
        id: "",
        votado: 0,
    };

    useEffect(() => {

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
            title: "ID",
            width: 180,
            hidden: true,
        },
        {
            field: "votado",
            title: "VOTADO",
            width: 120,
        },
        {
            field: "nombre",
            title: "NOMBRE",
            width: 200,
        },
        {
            field: "apellidopaterno",
            title: "APELLIDO P",
            width: 200,
        },
        {
            field: "apellidomaterno",
            title: "APELLIDO M",
            width: 200,
        },
        {
            field: "alias",
            title: "ALIAS",
            width: 200,
        },

        {
            field: "telefono",
            title: "TELEFONO",
            width: 180,
        },

        // { field: "numero", title: "NUMERO", width: 180, },
        // { field: "calle", title: "CALLE", width: 180, },
        // { field: "cruzamientouno", title: "CRUZAMIENTOUNO", width: 180, },
        // { field: "cruzamientodos", title: "CRUZAMIENTODOS", width: 180, },
        // { field: "colonia", title: "COLONIA", width: 180, },
        // { field: "manzana", title: "MANZANA", width: 180, },
        // {
        //     field: "genero",
        //     title: "GENERO",
        //     width: 180,
        // },
    ];

    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    color="textPrimary"
                    href="/home"
                    onClick={handleClick}
                    aria-current="page"
                >
                    Avance estructura detallado
      			</Link>
            </Breadcrumbs><br />
            {preparaDatos()}
            <Divider />
            <MaterialTableCpt title={nombre} columns={activistascolumns} data={activistas} parentChildData={(row, rows) => rows.find(a => a.id === row.idjefe)} />
        </div>
    )
}

export default AvanceEstructuraDetallado
