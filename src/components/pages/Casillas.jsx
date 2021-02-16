import React, { useEffect } from "react";
import { obtenerCasillaAccion } from "../../redux/CasillasDucks";
import { useDispatch, useSelector } from "react-redux";
import DataGridCpt from "../utils/DataGridCpt";

const Casillas = () => {
    //Store y redux
    const dispatch = useDispatch();
    const casillas = useSelector((store) => store.casillas.array);

    //Hacemos carga inicial
    useEffect(() => {
        dispatch(obtenerCasillaAccion());
    }, []);

    // Columnas
    const columns = [
        {
            field: "id",
            headerName: "IDCASILLA",
            width: 180,
        },
        {
            field: "seccionasignada",
            headerName: "SECCIONASIGNADA",
            width: 180,
        },
        {
            field: "padronelectoral",
            headerName: "PADRONELECTORAL",
            width: 180,
        },
        {
            field: "listanominal",
            headerName: "LISTANOMINAL",
            width: 180,
        },
        {
            field: "cargo",
            headerName: "CARGO",
            width: 180,
        },
        {
            field: "flujo10am",
            headerName: "FLUJO10AM",
            width: 180,
        },
        {
            field: "promovidos10am",
            headerName: "PROMOVIDOS10AM",
            width: 180,
        },
        {
            field: "flujo12pm",
            headerName: "FLUJO12PM",
            width: 180,
        },
        {
            field: "promovidos12pm",
            headerName: "PROMOVIDOS12PM",
            width: 180,
        },
        {
            field: "flujo2pm",
            headerName: "FLUJO2PM",
            width: 180,
        },
        {
            field: "promovidos2pm",
            headerName: "PROMOVIDOS2PM",
            width: 180,
        },
        {
            field: "flujo4pm",
            headerName: "FLUJO4PM",
            width: 180,
        },
        {
            field: "promovidos4pm",
            headerName: "PROMOVIDOS4PM",
            width: 180,
        },
        {
            field: "flujo6pm",
            headerName: "FLUJO6PM",
            width: 180,
        },
        {
            field: "promovidos6pm",
            headerName: "PROMOVIDOS6PM",
            width: 180,
        },
        {
            field: "nombreinformatico",
            headerName: "NOMBREINFORMATICO",
            width: 180,
        },
        {
            field: "telefono",
            headerName: "TELEFONO",
            width: 180,
        },
    ];

    return (
        <div>
            <h3>Casillas</h3>
            <DataGridCpt columns={columns} actArray={casillas} />
        </div>
    )
}

export default Casillas
