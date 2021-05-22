import React, { useEffect, Component } from "react";
import { Divider } from '@material-ui/core'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { useDispatch, useSelector } from "react-redux";
import Link from '@material-ui/core/Link';
import { getVotosHoraAccion } from "../../redux/VotosHoraDucks";
import { getGraficasGeneroAccion, } from "../../redux/GraficasGeneroDucks";
import { getGraficasEdadAccion, } from "../../redux/GraficasEdadDucks";
import { getGraficasSeccionAccion, } from "../../redux/GraficasSeccionDucks";

import { getGraficasRolAccion } from "../../redux/GraficasPorRolDucks";
import { getGraficasEstructuraAccion, } from "../../redux/GraficasEstructuraDucks";
import { getGraficasTotalSeccionAccion, } from "../../redux/GraficasTotalSeccionDucks";
import { getGraficasTotalLocalidadAccion, } from "../../redux/GraficasTotalLocalidadDucks";
import { getGraficasGranTotalAccion } from "../../redux/GraficasGranTotalDucks";


import ComboChart from '../charts/ComboChart';
import PieChart from '../charts/PieChart';
import MultiAxisChart from '../charts/MultiAxisChart';
import PolarChart from '../charts/PolarChart';
import Thermometer from 'react-thermometer-chart';
import { Line, Circle } from 'rc-progress';


import DataGridCpt from "../utils/DataGridCpt";
import MaterialTableCpt from '../utils/MaterialTableCpt';

//BreadCums
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const Home = () => {
    const dispatch = useDispatch();
    const votoshora = useSelector((store) => store.votosHora.array);
    // const reload = useSelector((store) => store.votosHora.reload);
    const genero = useSelector((store) => store.graficasGenero.array);
    const edad = useSelector((store) => store.graficasEdad.array);
    const seccion = useSelector((store) => store.graficasSeccion.array);


    const totalrol = useSelector((store) => store.graficasPorRol.array);
    const totalestructura = useSelector((store) => store.graficasEstructura.array);
    const totalseccion = useSelector((store) => store.graficasTotalSeccion.array);
    const totallocalidad = useSelector((store) => store.graficasTotalLocalidad.array);
    const grantotal = useSelector((store) => store.graficasGranTotal.array);

    useEffect(() => {
        //Llamamos al store de redux
        dispatch(getGraficasGeneroAccion());
        dispatch(getGraficasEdadAccion());
        dispatch(getGraficasSeccionAccion());
        dispatch(getVotosHoraAccion());

        dispatch(getGraficasRolAccion());
        dispatch(getGraficasEstructuraAccion());
        dispatch(getGraficasTotalSeccionAccion());
        dispatch(getGraficasTotalLocalidadAccion());
        dispatch(getGraficasGranTotalAccion());

        const id = setInterval(() => {
            dispatch(getGraficasGeneroAccion());
            dispatch(getGraficasEdadAccion());
            dispatch(getGraficasSeccionAccion());
            dispatch(getVotosHoraAccion());

            dispatch(getGraficasRolAccion());
            dispatch(getGraficasEstructuraAccion());
            dispatch(getGraficasTotalSeccionAccion());
            dispatch(getGraficasTotalLocalidadAccion());
            dispatch(getGraficasGranTotalAccion());

        }, 30000);

        return () => clearInterval(id);
    }, []);

    //Reasignamos datos id para mapear tipo arbol
    const preparaDatos = () => {
        //reasignamos id
        totalrol.map(
            item => {
                item.id = item.idpuesto
            }
        )
    }
    
    const getHoras = () => {
        const horas = [];
        votoshora.map(item => {
            horas.push(item.hora)
        });
        return horas;
    }

    const getVotos = () => {
        const votos = [];
        votoshora.map(item => {
            votos.push(item.votos)
        });
        return votos;
    }

    //============== GENERO ==============
    const getTagsGenero = () => {
        const tagsGenero = [];
        genero.map(item => {
            tagsGenero.push(item.genero === 'F' ? 'Mujeres' : 'Hombres')
        });
        return tagsGenero;
    }

    const getVotosGenero = () => {
        const votos = [];
        genero.map(item => {
            votos.push(item.votos)
        });
        return votos;
    }

    const getColoresGenero = () => {
        const colores = [];
        let color = '';
        genero.map(item => {
            color = "#" + Math.floor(Math.random() * 16777215).toString(16);
            colores.push(color)
        });
        return colores;
    }
    //============== GENERO ==============

    //============== EDAD ==============
    const getTagsEdad = () => {
        const tagsEdad = [];
        edad.map(item => {
            tagsEdad.push(item.edad)
        });
        return tagsEdad;
    }

    const getVotosEdad = () => {
        const votos = [];
        edad.map(item => {
            votos.push(item.votos)
        });
        return votos;
    }

    const getColoresEdad = () => {
        const colores = [];
        let color = '';
        edad.map(item => {
            color = "#" + Math.floor(Math.random() * 16777215).toString(16);
            colores.push(color)
        });
        return colores;
    }
    //============== EDAD ==============

    //============== SECCION ==============
    const getTagsSeccion = () => {
        const tagsSeccion = [];
        seccion.map(item => {
            tagsSeccion.push(item.seccion)
        });
        return tagsSeccion;
    }

    const getVotosSeccion = () => {
        const votos = [];
        seccion.map(item => {
            votos.push(item.votos)
        });
        return votos;
    }

    const getColoresSeccion = () => {
        const colores = [];
        let color = '';
        seccion.map(item => {
            color = "#" + Math.floor(Math.random() * 16777215).toString(16);
            colores.push(color)
        });
        return colores;
    }
    //============== SECCION ==============


    //============== TABLAS ==============
    // VOTOS ROL
    const columns = [
        {
            field: "id",
            title: "ID",
            headerStyle: { minWidth: 100 }, cellStyle: { minWidth: 100 },
            hidden: true,
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
            hidden: true,
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

    const columnsestructura = [
        {
            field: "id",
            headerName: "Coordinadores",
            width: 180,
        },
        {
            field: "activista",
            headerName: "Activistas",
            width: 180,
        },
        {
            field: "promovido",
            headerName: "Promovidos",
            width: 180,
        },
        {
            field: "total",
            headerName: "Total de personas",
            width: 180,
        },

    ];

    const columnstotalseccion = [
        {
            field: "id",
            headerName: "Seccion",
            width: 180,
        },
        {
            field: "votados",
            headerName: "Votados",
            width: 180,
        },
        {
            field: "novotados",
            headerName: "No votados",
            width: 180,
        },
        {
            field: "total",
            headerName: "Total",
            width: 180,
        },


    ];

    const columnstotallocalidad = [
        {
            field: "localidad",
            headerName: "Localidad",
            width: 180,
        },
        {
            field: "id",
            headerName: "id",
            width: 180,
            hide: true,
        },
        {
            field: "votados",
            headerName: "Votados",
            width: 180,
        },
        {
            field: "novotados",
            headerName: "No votados",
            width: 180,
        },
        {
            field: "total",
            headerName: "Total",
            width: 180,
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
                    Home
      			</Link>
            </Breadcrumbs><br />
            {preparaDatos()}
            
            <div className="card col-sm-10 col-md-10 col-lg-10 mb-5">
                <h1 className="centerText"> Avance: {grantotal[0].porcentaje.toFixed(2)} % | Votados: {grantotal[0].votados} | Faltantes: {grantotal[0].novotados} | Total: {grantotal[0].total}</h1>
                <Line percent={grantotal[0].porcentaje.toFixed(2)} strokeWidth="4" strokeColor="#4caf50" trailColor="#D9D9D9"/>
            </div>

            <div className="card col-sm-10 col-md-10 col-lg-10 mb-5">
                <h1 className="centerText">Votos / Horas: </h1>
                <ComboChart horas={getHoras()} votos={getVotos()} />
            </div>

            <div className="card col-sm-10 col-md-10 col-lg-10 mb-5">
                <h1 className="centerText">Hombres / Mujeres: </h1>
                <PieChart data={getVotosGenero()} tags={getTagsGenero()} colors={getColoresGenero()} />
            </div>
            <Divider />

            <Divider />
            <div className="card col-sm-10 col-md-10 col-lg-10 mb-5">
                <h1 className="centerText">Votos / Edades: </h1>
                <MultiAxisChart data={getVotosEdad()} tags={getTagsEdad()} colors={getColoresEdad()} label={"Votos por edad"} />
            </div>
            <Divider />
            <div className="card col-sm-10 col-md-10 col-lg-10 mb-5">
                <h1 className="centerText">Votos / Sección: </h1>
                <PolarChart data={getVotosSeccion()} tags={getTagsSeccion()} colors={getColoresSeccion()} label={"Votos por seccion"} />
            </div>


            <Divider />
            <div className="card col-sm-10 col-md-10 col-lg-10 mb-5">
                <h1 className="centerText">Tabla totales / Estructura: </h1>
                <DataGridCpt columns={columnsestructura} actArray={totalestructura}  />
            </div>

            <Divider />
            <div className="card col-sm-10 col-md-10 col-lg-10 mb-5">
                <h1 className="centerText">Tabla totales / Seccion: </h1>
                <DataGridCpt columns={columnstotalseccion} actArray={totalseccion}  />
            </div>
            <Divider />
            <div className="card col-sm-10 col-md-10 col-lg-10 mb-5">
                <h1 className="centerText">Tabla totales / Localidad: </h1>
                <DataGridCpt columns={columnstotallocalidad} actArray={totallocalidad}  />
            </div>

            <Divider />

            <MaterialTableCpt title={"Votos Responsable"} columns={columns} data={totalrol} parentChildData={(row, rows) => rows.find(a => a.id === row.idjefe)} />

            {/* <Divider />
            <div className="card col-sm-10 col-md-10 col-lg-10 mb-5">
                <h1 className="centerText">Total de votos: </h1>
                <Thermometer width="10%" height="10%" steps={5} minValue={0} maxValue={100} currentValue={15} />
            </div> */}
        </div>
    )
}

export default Home
