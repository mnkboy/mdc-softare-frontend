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

    const [nombre, setNombre] = useState("");
    const [rolarray, setRolarray] = useState([])

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

    const arrayroltemp = []
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
                if (item.idjefe == idpuesto || item.idpuesto == idpuesto) {
                    arrayroltemp.push(item)
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



    //============== TABLAS ==============
    // VOTOS ROL
    const columns = [
        {
            field: "id",
            title: "ID",
            headerStyle: { minWidth: 100 }, cellStyle: { minWidth: 100 },
            // hidden: true,
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
            // hidden: true,
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


            <MaterialTableCpt title={nombre} columns={columns} data={arrayroltemp} parentChildData={(row, rows) => rows.find(a => a.id === row.idjefe)} />



        </div>
    )
}

export default AvanceEstructura
