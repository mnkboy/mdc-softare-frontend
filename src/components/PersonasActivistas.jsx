import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerPersonaActivistaAccion } from '../redux/PersonaActivistaDucks'

const PersonasActivistas = () => {
    const dispatch = useDispatch();

    //PersonasActivistasList
    const paList = useSelector(store => store.personasActivistas.array)
    const persona = {
        id: "61e443b1-1912-4257-acbe-deb9940f996e",
        nombre: "Javier",
        apellido: "Jimenez",
        votado: true,

    }
    return (
        <Fragment>
            <button onClick={() => dispatch(obtenerPersonaActivistaAccion(persona))}>Get Personas Activistas</button>
            <ul>
                {
                    paList.map(item => (
                        <li key={item.idpersonaactivista} >
                            {item.nombre}
                        </li>
                    ))
                }
            </ul>
        </Fragment >
    )
}

export default PersonasActivistas
