import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { actualizarPersonaActivistaVotadaAccion } from '../redux/PersonaActivistaDucks'

const PersonasActivistas = () => {
    const dispatch = useDispatch();
    const [votado, setVotado] = useState(0)

    //PersonasActivistasList    
    const persona = {
        id: "6412b6bd-ba49-4245-8932-b67d4a5d6140",
        nombre: "Javier",
        apellido: "Jimenez",
        votado: votado,
    }

    //Handle votado
    const handleVotado = () => {
        const value = votado === 0 ? 1 : 0;
        setVotado(value)
        dispatch(actualizarPersonaActivistaVotadaAccion(persona))
    }

    // console.log(paList)
    return (
        <Fragment>
            {/* <button onClick={() => dispatch(obtenerPersonaActivistaAccion(persona))}>Get Personas Activistas</button>
            <ul>
                {
                    paList.map(item => (
                        <li key={item.idpersonaactivista} >
                            {item.nombre}
                        </li>
                    ))
                }
            </ul> */}
            <button onClick={() => handleVotado()}>Vota</button>
        </Fragment >
    )
}

export default PersonasActivistas
