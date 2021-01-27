import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerPersonaActivistaAccion } from '../redux/PersonaActivistaDucks'

const PersonasActivistas = (props) => {
    const dispatch = useDispatch();
    const paList = useSelector(store => store.personasActivistas.array)

    //PersonasActivistasList    
    const persona = {
        id: ""
    }

    //Intentamos cargar la lista de participantes
    useEffect(() => {
        const hdlArray = () => {
            dispatch(obtenerPersonaActivistaAccion(persona));
            props.hdlActArray(paList);
        };
        hdlArray();
    }, []);

    //Handle votado
    const handleActArray = () => {
        dispatch(obtenerPersonaActivistaAccion(persona));
        props.hdlActArray(paList);
    }

    return (
        <Fragment>
            {/* <button onClick={() => handleActArray()}>Get Personas Activistas</button> */}
        </Fragment >
    )
}

export default PersonasActivistas
