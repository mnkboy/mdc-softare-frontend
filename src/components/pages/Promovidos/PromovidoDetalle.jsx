import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { obtenerPersonaActivistaAccion, actualizarPersonaActivistaVotadaAccion } from "../../../redux/PersonaActivistaDucks";
import AccordionCpt from "../../utils/AccordionCpt"

const PromovidoDetalle = () => {
    //Store y configuracion REDUX
    const dispatch = useDispatch();
    const activistas = useSelector((store) => store.personasActivistas.array);
    const activista = activistas[0];

    //Recibimos parametros
    const { id } = useParams()

    //Persona
    const persona = {
        id: id,
        votado: 0,
    };

    //Hacemos carga inicial
    useEffect(() => {
        persona.id = id;
        dispatch(obtenerPersonaActivistaAccion(persona));
    }, []);

    //Verificamos si hay elementos en el array
    const renderSubActivistas = (verify) => {
        
        if(!verify ) {
          return <div>No hay elementos</div>;
        } else {
          return (
              <p>
                Si hay elementos en el arreglo
              </p>
          );
        }
      }

    return (
        <div>
            <h1>Promovido detalle:  </h1>
            <h4>IDPERSONAACTIVISTA: {id}</h4>
            <h4>IDCASILLA: {activista.idcasilla}</h4>
            <h4>SECCION: {activista.seccion}</h4>
            <h4>IDLISTANOM: {activista.idlistanom}</h4>
            <h4>PUESTO: {activista.puesto}</h4>
            <h4>NOMBRE: {activista.nombre}</h4>
            <h4>CLAVEELECTOR: {activista.claveelector}</h4>
            <h4>IDJEFE: {activista.idjefe}</h4>
            <h4>VOTADO: {activista.votado}</h4>
           
            {renderSubActivistas(activista.subactivistas === null)}

        </div>
    )
}

export default PromovidoDetalle

