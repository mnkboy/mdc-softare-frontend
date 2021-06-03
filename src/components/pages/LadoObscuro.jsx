import React, { useEffect } from "react";
import { Divider } from '@material-ui/core'
import MultiAxisChart from '../charts/MultiAxisChart';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { useDispatch, useSelector } from "react-redux";
import Link from '@material-ui/core/Link';
import DataGridCpt from "../utils/DataGridCpt";

import { getGraficasGranTotalLadoObscuroAccion } from "../../redux/GraficasGranTotalLadoObscuroDucks";
import { getGraficasTotalAliasLadoObscuroAccion } from "../../redux/GraficasTotalAliasObscuroDucks";

import { Line } from 'rc-progress';

//BreadCums
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const LadoObscuro = () => {
    const dispatch = useDispatch();        
    const grantotalobscuro = useSelector((store) => store.graficasGranTotalLadoObscuro.array);
    const alias = useSelector((store) => store.graficasTotalAliasLadoObscuro.array);

    useEffect(() => {
        //Llamamos al store de redux       
        dispatch(getGraficasGranTotalLadoObscuroAccion());
        dispatch(getGraficasTotalAliasLadoObscuroAccion());

        const id = setInterval(() => {            
            dispatch(getGraficasGranTotalLadoObscuroAccion());
            dispatch(getGraficasTotalAliasLadoObscuroAccion());

        }, 30000);

        return () => clearInterval(id);
    }, []);

    //ObjGranTotal
    const objGranTotalObscuro = {
        votados: 0,
        novotados: 0,
        total: 0,
        porcentaje: 0,
    };

    //Obtenemos gran total
    const setGranTotal = () => {
        if (typeof grantotalobscuro[0] !== 'undefined') {            
            objGranTotalObscuro.votados = grantotalobscuro[0] === 'undefined' ? 0 : grantotalobscuro[0].votados;
            objGranTotalObscuro.novotados = grantotalobscuro[0] === 'undefined' ? 0 : grantotalobscuro[0].novotados;
            objGranTotalObscuro.total = grantotalobscuro[0] === 'undefined' ? 0 : grantotalobscuro[0].total;
            objGranTotalObscuro.porcentaje = grantotalobscuro[0] === 'undefined' ? 0 : grantotalobscuro[0].porcentaje;
        }
    }




    //============== ALIAS ==============
    const getTagsAlias = () => {
        const tagsAlias = [];
        alias.map(item => {
            tagsAlias.push(item.alias)
        });
        return tagsAlias;
    }

    const getVotosAlias = () => {
        const votos = [];
        alias.map(item => {
            votos.push(item.votados)
        });
        return votos;
    }

    const getColoresAlias = () => {
        const colores = [];
        let color = '';
        alias.map(item => {
            color = "#" + Math.floor(Math.random() * 16777215).toString(16);
            colores.push(color)
        });
        return colores;
    }



    //== COLUMNAS
    const columnstotalalias = [
        {
            field: "id",
            headerName: "ID",
            hide: true,
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
        {
            field: "alias",
            headerName: "Alias",
            width: 180,
        },


    ];


    //============== ALIAS ==============


    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    color="textPrimary"
                    href="/ladoobscuro"
                    onClick={handleClick}
                    aria-current="page"
                >
                    Lado Obscuro
      			</Link>
            </Breadcrumbs><br />            
            {setGranTotal()}

            <div className="card col-sm-10 col-md-10 col-lg-10 mb-5">
                <h1 className="centerText"> Avance: {objGranTotalObscuro.porcentaje.toFixed(2)} % | Votados: {objGranTotalObscuro.votados} | Faltantes: {objGranTotalObscuro.novotados} | Total: {objGranTotalObscuro.total}</h1>
                <Line percent={objGranTotalObscuro.porcentaje.toFixed(2)} strokeWidth="4" strokeColor="#4caf50" trailColor="#D9D9D9" />
            </div>
            <Divider />
            <div className="card col-sm-10 col-md-10 col-lg-10 mb-5">
                <h1 className="centerText">Votos / Alias: </h1>
                <MultiAxisChart data={getVotosAlias()} tags={getTagsAlias()} colors={getColoresAlias()} label={"Votos por edad"} />
            </div>

            <Divider />
            <div className="card col-sm-10 col-md-10 col-lg-10 mb-5">
                <h1 className="centerText">Tabla totales / Alias: </h1>
                <DataGridCpt columns={columnstotalalias} actArray={alias} />
            </div>

           
        </div>
    )
}

export default LadoObscuro
