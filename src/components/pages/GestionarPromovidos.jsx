import React, { useEffect, useState } from "react";
import {
    retrievePersonaActivistaAccion,
    updateVotoAccion,
    createPersonaActivistaAccion,
    updatePersonaActivistaAccion,
    deletePersonaActivistaAccion
} from "../../redux/PersonaActivistaDucks";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import MaterialTableEditableCpt from '../utils/MaterialTableEditableCpt';


const GestionarPromovidos = () => {
    const dispatch = useDispatch();
    const activistas = useSelector((store) => store.personasActivistas.array);
    const reload = useSelector((store) => store.personasActivistas.reload);



    //BreadCums
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    //Create
    const handleCreate = (data) => {
        console.log("handleCreate" + data)
        dispatch(createPersonaActivistaAccion(data));
    }
    //Update
    const handleUpdate = (data) => {
        console.log("handleUpdate" + data)
        dispatch(updatePersonaActivistaAccion(data));
    }
    //Delete
    const handleDelete = (data) => {
        console.log("handleDelete" + data)
        dispatch(deletePersonaActivistaAccion(data));
    }

    //Persona
    const persona = {
        id: "",
        votado: 0,
    };

    //Hacemos carga inicial
    useEffect(() => {
        dispatch(retrievePersonaActivistaAccion(persona));
    }, []);

    //Verificamos si hubo cambios
    if (reload) {
        dispatch(retrievePersonaActivistaAccion(persona));
    }

    // Columnas
    const columns = [
        {
            field: "idpuesto",
            title: "IDPUESTO",
            width: 120,
        },
        {
            field: "idrol",
            title: "IDROL",
            width: 100,
        },
        {
            field: "idjefe",
            title: "IDJEFE",
            width: 100,
        },
        {
            field: "puesto",
            title: "PUESTO",
            lookup: { 'COORDINADOR': 'COORDINADOR', 'ACTIVISTA': 'ACTIVISTA', 'PROMOVIDO': 'PROMOVIDO' },

        },
        {
            field: "nombre",
            title: "NOMBRE",
            width: 200,
        },
        {
            field: "apellidos",
            title: "APELLIDOS",
            width: 200,
        },
        {
            field: "telefono",
            title: "TELEFONO",
            width: 180,
        },
        {
            field: "domicilio",
            title: "DOMICILIO",
            width: 100,
        },
        {
            field: "seccion",
            title: "SECCION",
            width: 100,
        },
        {
            field: "ocupacion",
            title: "OCUPACION",
            width: 200,
        },
        {
            field: "edad",
            title: "EDAD",
            width: 100,
        },
        {
            field: "genero",
            title: "GENERO",
            width: 100,
            lookup: { F: 'F', M: 'M' },
        },
        {
            field: "claveelector",
            title: "CLAVEELECTOR",
            width: 180,
        },
        {
            field: "localidad",
            title: "LOCALIDAD",
            width: 180,
        },
        {
            field: "municipio",
            title: "MUNICIPIO",
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
                    Gestionar promovidos
      			</Link>
            </Breadcrumbs><br />

            <MaterialTableEditableCpt
                columns={columns}
                data={activistas}
                handleCreate={handleCreate}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
            >
            </MaterialTableEditableCpt>
            {/* <AlertMessagesCpt></AlertMessagesCpt> */}
        </div >
    )
}

export default GestionarPromovidos