import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerinfoAdicionalCasillaAccion } from "../../redux/InfoAdicionalCasillasDucks";
import DataGridCpt from "../utils/DataGridCpt";

const IncidentesCasillas = () => {
    //Store y redux
    const dispatch = useDispatch();
    const infoAdicionalCasillas = useSelector((store) => store.infoAdicionalCasillas.array);

    // Columnas
    const columns = [
        {
            field: "id",
            headerName: "IDINFOADICIONALCASILLA",
            width: 180,
        },
        {
            field: "idcasilla",
            headerName: "IDCASILLA",
            width: 180,
        },
        {
            field: "seccionasignada",
            headerName: "SECCIONASIGNADA",
            width: 180,
        },
        {
            field: "horaapertura",
            headerName: "HORAAPERTURA",
            width: 180,
        },
        {
            field: "horacierre",
            headerName: "HORACIERRE",
            width: 180,
        },
        {
            field: "incidenteuno",
            headerName: "INCIDENTEUNO",
            width: 180,
        },
        {
            field: "horaincidenteuno",
            headerName: "HORAINCIDENTEUNO",
            width: 180,
        },
        {
            field: "incidentedos",
            headerName: "INCIDENTEDOS",
            width: 180,
        },
        {
            field: "horaincidentedos",
            headerName: "HORAINCIDENTEDOS",
            width: 180,
        },
        {
            field: "incidentetres",
            headerName: "INCIDENTETRES",
            width: 180,
        },
        {
            field: "horaincidentetres",
            headerName: "HORAINCIDENTETRES",
            width: 180,
        },
        {
            field: "incidentecuatro",
            headerName: "INCIDENTECUATRO",
            width: 180,
        },
        {
            field: "horaincidentecuatro",
            headerName: "HORAINCIDENTECUATRO",
            width: 180,
        },
        {
            field: "incidentecinco",
            headerName: "INCIDENTECINCO",
            width: 180,
        },
        {
            field: "horaincidentecinco",
            headerName: "HORAINCIDENTECINCO",
            width: 180,
        },
        {
            field: "prip1",
            headerName: "PRIP1",
            width: 180,
        },
        {
            field: "prip2",
            headerName: "PRIP2",
            width: 180,
        },
        {
            field: "pris1",
            headerName: "PRIS1",
            width: 180,
        },
        {
            field: "pris2",
            headerName: "PRIS2",
            width: 180,
        },
        {
            field: "presidente",
            headerName: "PRESIDENTE",
            width: 180,
        },
        {
            field: "sec1",
            headerName: "SEC1",
            width: 180,
        },
        {
            field: "sec2",
            headerName: "SEC2",
            width: 180,
        },
        {
            field: "esc1",
            headerName: "ESC1",
            width: 180,
        },
        {
            field: "esc2",
            headerName: "ESC2",
            width: 180,
        },
        {
            field: "esc3",
            headerName: "ESC3",
            width: 180,
        },
        {
            field: "sup1",
            headerName: "SUP1",
            width: 180,
        },
        {
            field: "sup2",
            headerName: "SUP2",
            width: 180,
        },
        {
            field: "sup3",
            headerName: "SUP3",
            width: 180,
        },
    ];

    //Hacemos carga inicial
    useEffect(() => {
        dispatch(obtenerinfoAdicionalCasillaAccion());
    }, []);

    return (
        <div>
            <h3>Incidentes Casillas</h3>
            <DataGridCpt columns={columns} actArray={infoAdicionalCasillas} />
        </div>
    )
}

export default IncidentesCasillas
