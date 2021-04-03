import React, { useEffect, Component } from "react";
import { Divider } from '@material-ui/core'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { useDispatch, useSelector } from "react-redux";
import Link from '@material-ui/core/Link';
import { getVotosHoraAccion } from "../../redux/VotosHoraDucks";
import { getGraficasGeneroAccion, } from "../../redux/GraficasGeneroDucks";
import { getGraficasEdadAccion, } from "../../redux/GraficasEdadDucks";
import { getGraficasSeccionAccion, } from "../../redux/GraficasSeccionDucks";
import ComboChart from '../charts/ComboChart';
import PieChart from '../charts/PieChart';
import MultiAxisChart from '../charts/MultiAxisChart';
import PolarChart from '../charts/PolarChart';
import Thermometer from 'react-thermometer-chart';
//BreadCums
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const Home = () => {
    const dispatch = useDispatch();
    const votoshora = useSelector((store) => store.votosHora.array);
    const reload = useSelector((store) => store.votosHora.reload);
    const genero = useSelector((store) => store.graficasGenero.array);
    const edad = useSelector((store) => store.graficasEdad.array);
    const seccion = useSelector((store) => store.graficasSeccion.array);

    useEffect(() => {
        //Llamamos al store de redux
        dispatch(getGraficasGeneroAccion());
        dispatch(getGraficasEdadAccion());
        dispatch(getGraficasSeccionAccion());
        dispatch(getVotosHoraAccion());

        const id = setInterval(() => {
            dispatch(getVotosHoraAccion());

        }, 30000);

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

        return () => clearInterval(id);
        return () => clearInterval(idgenero);
        return () => clearInterval(idedad);
        return () => clearInterval(id);
    }, []);

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
            {/* <Divider />
            <div className="card col-sm-10 col-md-10 col-lg-10 mb-5">
                <h1 className="centerText">Total de votos: </h1>
                <Thermometer width="10%" height="10%" steps={5} minValue={0} maxValue={100} currentValue={15} />
            </div> */}
        </div>
    )
}

export default Home
