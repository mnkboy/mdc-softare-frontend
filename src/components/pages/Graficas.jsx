import React, { useEffect, Component } from "react";
import { Divider } from '@material-ui/core'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useDispatch, useSelector } from "react-redux";
import { getGraficasGeneroAccion, } from "../../redux/GraficasGeneroDucks";
import { getGraficasEdadAccion, } from "../../redux/GraficasEdadDucks";
import { getGraficasSeccionAccion, } from "../../redux/GraficasSeccionDucks";
import PieChart from '../charts/PieChart';
import MultiAxisChart from '../charts/MultiAxisChart';
import PolarChart from '../charts/PolarChart';

//BreadCums
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const Graficas = () => {
    const dispatch = useDispatch();
    const genero = useSelector((store) => store.graficasGenero.array);
    const edad = useSelector((store) => store.graficasEdad.array);
    const seccion = useSelector((store) => store.graficasSeccion.array);



    useEffect(() => {
        dispatch(getGraficasGeneroAccion());
        dispatch(getGraficasEdadAccion());
        dispatch(getGraficasSeccionAccion());


        const idgenero = setInterval(() => {
            dispatch(getGraficasGeneroAccion());

        }, 30000);

        return () => clearInterval(idgenero);

        const idedad = setInterval(() => {
            dispatch(getGraficasEdadAccion());

        }, 30000);

        return () => clearInterval(idedad);

        const idseccion = setInterval(() => {
            dispatch(getGraficasSeccionAccion());

        }, 30000);

        return () => clearInterval(idseccion);
    }, []);

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




    return (
        <div >
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/home" >
                    Home
      			</Link>
                <Link
                    color="textPrimary"
                    href="/promovidos"
                    onClick={handleClick}
                    aria-current="page"
                >
                    Graficas
      			</Link>
            </Breadcrumbs><br />
            Hombres / Mujeres
            <PieChart data={getVotosGenero()} tags={getTagsGenero()} colors={getColoresGenero()} />
            <Divider />
            Votos / Edades
            <Divider />
            <MultiAxisChart data={getVotosEdad()} tags={getTagsEdad()} colors={getColoresEdad()} label={"Votos por edad"} />
            <Divider />
                Votos / Seccion
            <PolarChart data={getVotosSeccion()} tags={getTagsSeccion()} colors={getColoresSeccion()} label={"Votos por seccion"} />
            <Divider />

        </div>
    )
}

export default Graficas

