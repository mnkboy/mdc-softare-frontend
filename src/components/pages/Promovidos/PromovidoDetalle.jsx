import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { obtenerPersonaActivistaAccion, actualizarPersonaActivistaVotadaAccion } from "../../../redux/PersonaActivistaDucks";

const PromovidoDetalle = () => {
    //Store y configuracion REDUX
    const dispatch = useDispatch();
    const activistas = useSelector((store) => store.personasActivistas.array);

    //Recibimos parametros
    const { id } = useParams()

    //Persona
    const persona = {
        id: "",
        votado: 0,
    };

    //Hacemos carga inicial
    useEffect(() => {
        persona.id = id;
        dispatch(obtenerPersonaActivistaAccion(persona));
    }, []);

    //Imprimimos array de personas
    console.log(activistas)

    return (
        <div>
            <h1>Promovido detalle:  </h1>
            <h2>{id}</h2>
        </div>
    )
}

export default PromovidoDetalle

