import React, { useEffect, useState } from "react";
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useForm } from 'react-hook-form'
import { updateEleccionesAccion, getEleccionesAccion } from "../../../redux/EleccionesDucks";


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
            border: "",
        },
    },
}));


const UpdateElecciones = () => {
    //Store y configuracion REDUX
    const dispatch = useDispatch();
    const elecciones = useSelector((store) => store.elecciones.array);
    const reload = useSelector((store) => store.elecciones.reload);

    //Recibimos parametros
    const { id } = useParams()

    //eleccion
    const eleccion = {
        id: id,
    };

    //Hacemos carga inicial
    useEffect(() => {
        eleccion.id = id;
        dispatch(getEleccionesAccion(eleccion));
    }, []);

    //Verificamos si hubo cambios
    if (reload) {
        eleccion.id = id;
        dispatch(getEleccionesAccion(eleccion));
    }

    //BreadCums
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    //Handle update
    const handleupdate = (data) => {
        dispatch(updateEleccionesAccion(data));
    };

    //react-hook-forms
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        handleupdate(data);
        e.target.reset();
    }

    const classes = useStyles();

    //Form
    const imprimeForm = () => {
        if (elecciones.length !== 1) {
            return (
                <div>
                    < h5 > Cargando... </h5 >
                </div>
            )
        }
        return (

            <div>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/home" >
                        Home
      			</Link>
                    <Link color="inherit" href="/elecciones" >
                        Eleccioness
      			</Link>
                    <Link
                        color="textPrimary"
                        href="/elecciones/create"
                        onClick={handleClick}
                        aria-current="page"
                    >
                        Crear eleccion
      			</Link>
                </Breadcrumbs><br />

                <form onSubmit={handleSubmit(onSubmit)} className={classes.root} noValidate autoComplete="off">
                    <div className="card col-sm-10 col-md-10 col-lg-10 mb-5" >
                        <h3><div className="card-header ">
                            Seccion Eleccion
                    </div></h3>

                        <div className="card-body col-lg-12">
                            <h4><span className="text-danger text-small d-block mb-2">{errors?.id?.message}</span></h4><TextField inputRef={register({ required: { value: true, message: "Id elecciones" } })} name="id" required id="id" label="id" defaultValue={elecciones[0].id} style={{ display: 'none' }} />
                            <h4><span className="text-danger text-small d-block mb-2">{errors?.seccion?.message}</span></h4><TextField inputRef={register({ required: { value: true, message: "Seccion obligatoria" } })} name="seccion" required id="seccion" label="Seccion" defaultValue={elecciones[0].seccion} />
                        </div>
                    </div>


                    <div className="card col-sm-10 col-md-10 col-lg-10 mb-5" >
                        <h3><div className="card-header ">
                            Partidos bloque 1
                    </div></h3>

                        <div className="card-body col-lg-12 ">
                            <TextField inputRef={register({ required: { value: false } })} name="pan" id="pan" label="Pan" defaultValue={elecciones[0].pan} variant="filled" />
                            <TextField inputRef={register({ required: { value: false } })} name="pri" id="pri" label="Pri" defaultValue={elecciones[0].pri} variant="filled" />

                            <TextField inputRef={register({ required: { value: false } })} name="prd" id="prd" label="Prd" defaultValue={elecciones[0].prd} variant="filled" />
                            <TextField inputRef={register({ required: { value: false } })} name="pvem" id="pvem" label="Pvem" defaultValue={elecciones[0].pvem} variant="filled" />

                            <TextField inputRef={register({ required: { value: false } })} name="pt" id="pt" label="PT" defaultValue={elecciones[0].pt} variant="filled" />
                        </div>
                    </div>


                    <div className="card col-sm-10 col-md-10 col-lg-10 mb-5" >
                        <h3><div className="card-header ">
                            Partidos bloque 2
                    </div></h3>

                        <div className="card-body col-lg-12 ">
                            <TextField inputRef={register({ required: { value: false } })} name="movciudadano" id="movciudadano" label="Mov Ciudadano" defaultValue={elecciones[0].movciudadano} variant="filled" />
                            <TextField inputRef={register({ required: { value: false } })} name="nuevaalianza" id="nuevaalianza" label="Nueva Alianza" defaultValue={elecciones[0].nuevaalianza} variant="filled" />

                            <TextField inputRef={register({ required: { value: false } })} name="morena" id="morena" label="Morena" defaultValue={elecciones[0].morena} variant="filled" />
                            <TextField inputRef={register({ required: { value: false } })} name="encuentrosocial" id="encuentrosocial" label="Encuentro Social" defaultValue={elecciones[0].encuentrosocial} variant="filled" />

                            <TextField inputRef={register({ required: { value: false } })} name="panprd" id="panprd" label="Pan-PRD" defaultValue={elecciones[0].panprd} variant="filled" />
                        </div>
                    </div>

                    <div className="card col-sm-10 col-md-10 col-lg-10 mb-5" >
                        <h3><div className="card-header ">
                            Partidos bloque 3
                    </div></h3>

                        <div className="card-body col-lg-12 ">
                            <TextField inputRef={register({ required: { value: false } })} name="pripvemnuevaalianza" id="pripvemnuevaalianza" label="Pri-Pvem-Nueva Alianza" defaultValue={elecciones[0].pripvemnuevaalianza} variant="filled" />
                            <TextField inputRef={register({ required: { value: false } })} name="pripvem" id="pripvem" label="Pri Pvem" defaultValue={elecciones[0].pripvem} variant="filled" />

                            <TextField inputRef={register({ required: { value: false } })} name="prinuevaalianza" id="prinuevaalianza" label="Pri-Nueva Alianza" defaultValue={elecciones[0].prinuevaalianza} variant="filled" />
                            <TextField inputRef={register({ required: { value: false } })} name="pvemnuevaalianza" id="pvemnuevaalianza" label="Pvem-Nueva Alianza" defaultValue={elecciones[0].pvemnuevaalianza} variant="filled" />

                            <TextField inputRef={register({ required: { value: false } })} name="candidatosnoregistrados" id="candidatosnoregistrados" label="Candidatos No Reg." defaultValue={elecciones[0].candidatosnoregistrados} variant="filled" />
                        </div>
                    </div>

                    <div className="card col-sm-10 col-md-10 col-lg-10 mb-5" >
                        <h3><div className="card-header ">
                            Totales
                    </div></h3>

                        <div className="card-body col-lg-12">
                            <TextField inputRef={register({ required: { value: false } })} name="nulos" id="nulos" label="Nulos" defaultValue={elecciones[0].nulos} variant="filled" />
                            <TextField inputRef={register({ required: { value: false } })} name="total" id="total" label="Total" defaultValue={elecciones[0].total} variant="filled" />
                        </div>
                    </div>
                    <button className="btn btn-primary">Enviar</button>
                </form>
            </div >

        )

    }

    return (
        <div >
            { imprimeForm()}
        </div>
    );
}

export default UpdateElecciones