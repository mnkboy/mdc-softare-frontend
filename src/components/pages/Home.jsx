import React, { useEffect, Component } from "react";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { useDispatch, useSelector } from "react-redux";
import Link from '@material-ui/core/Link';
import { getVotosHoraAccion } from "../../redux/VotosHoraDucks";
import ComboChart from '../charts/ComboChart';

//BreadCums
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const Home = () => {
    const dispatch = useDispatch();
    const votoshora = useSelector((store) => store.votosHora.array);
    const reload = useSelector((store) => store.votosHora.reload);

    useEffect(() => {
        dispatch(getVotosHoraAccion());
        const id = setInterval(() => {
            dispatch(getVotosHoraAccion());

        }, 30000);

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

            <ComboChart horas={getHoras()} votos={getVotos()} />
        </div>
    )
}

export default Home
