import React, { useEffect } from "react";
import { obtenerReportesRgsAccion } from "../../redux/ReportesRgsDucks";
import { useDispatch, useSelector } from "react-redux";
import DataGridCpt from "../utils/DataGridCpt";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

const ReportesRgs = () => {
    //Configuraciones iniciales
    const dispatch = useDispatch();
    const reportesRgs = useSelector((store) => store.reportesRgs.array);

    //BreadCums
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    //Hacemos carga inicial
    useEffect(() => {
        dispatch(obtenerReportesRgsAccion());
    }, []);

    // Columnas
    const columns = [
        {
            field: "id",
            headerName: "IDREPORTESRGS",
            width: 180,
        },
        {
            field: "seccion",
            headerName: "SECCION",
            width: 180,
        },
        {
            field: "idlistanom",
            headerName: "IDLISTANOM",
            width: 180,
        },
        {
            field: "puesto",
            headerName: "PUESTO",
            width: 180,
        },
        {
            field: "nombre",
            headerName: "NOMBRE",
            width: 180,
        },
        {
            field: "telefono",
            headerName: "TELEFONO",
            width: 180,
        },
        {
            field: "claveelector",
            headerName: "CLAVEELECTOR",
            width: 180,
        },
        {
            field: "observaciones",
            headerName: "OBSERVACIONES",
            width: 180,
        }
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
                    Reportes rgs
      			</Link>
            </Breadcrumbs><br />

            <DataGridCpt columns={columns} actArray={reportesRgs} />
        </div >
    )
}

export default ReportesRgs