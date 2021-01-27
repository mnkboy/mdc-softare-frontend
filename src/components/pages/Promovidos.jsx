import React, { useState } from 'react'
import DataGridCpt from '../utils/DataGridCpt'
import PersonasActivistas from '../PersonasActivistas';
import { Button } from '@material-ui/core'
import { actualizarPersonaActivistaVotadaAccion } from '../../redux/PersonaActivistaDucks'
import { useDispatch } from 'react-redux'

const Promovidos = () => {
    const dispatch = useDispatch();
    const performAction = (id) => {
        console.log("vota")
        handleVotado(id)
    };

    //PersonasActivistasList    
    const persona = {
        id: "",
        votado: 0,
    }

    //Handle votado
    const handleVotado = (id) => {
        persona.id = id;
        persona.votado = 1;
        dispatch(actualizarPersonaActivistaVotadaAccion(persona))
    }


    // Columnas
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: '100%',
            hide: true
        },
        {
            field: 'idcasilla',
            headerName: 'IDCASILLA',
            width: 180,
        },
        {
            field: 'seccion',
            headerName: 'SECCION',
            width: 180,
        },
        {
            field: 'idlistanom',
            headerName: 'IDLISTANOM',
            width: 180,
        },
        {
            field: 'puesto',
            headerName: 'PUESTO',
            width: 180,
        },
        {
            field: 'nombre',
            headerName: 'NOMBRE',
            width: 180,
        },
        {
            field: 'claveelector',
            headerName: 'CLAVEELECTOR',
            width: 180,
        },
        {
            field: 'idjefe',
            headerName: 'IDJEFE',
            width: 180,
        },
        {
            field: 'votado',
            headerName: 'VOTADO',
            width: 120,
        },
        {
            field: "",
            headerName: "VOTAR",
            disableClickEventBubbling: true,
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

                    performAction(thisRow.id)
                };

                return <Button onClick={onClick}>Click</Button>;
            }
        }
    ];

    //State para guardar a los activistas
    const [activistas, setActivistas] = useState([])
    //handleActivistasArray
    const hdlActArray = (inputArray) => {
        setActivistas(inputArray)
    }
    return (
        <div>
            <h1>Promovidos</h1>
            <PersonasActivistas hdlActArray={hdlActArray} />
            <DataGridCpt columns={columns} actArray={activistas} />
        </div>
    )
}

export default Promovidos
