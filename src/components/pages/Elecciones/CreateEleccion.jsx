import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useForm } from 'react-hook-form'
import { createEleccionesAccion } from "../../../redux/EleccionesDucks";


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
            border: "",
        },
    },
}));

//BreadCums
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}




const CreateElecciones = () => {
    //Store y redux
    const dispatch = useDispatch();

    //Handle Create
    const handleCreate = (eleccion) => {
        dispatch(createEleccionesAccion(eleccion));
    };

    //react-hook-forms
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        handleCreate(data);
        // e.target.reset();
    }

    const classes = useStyles();

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
                        Crear Eleccion
                    </div></h3>

                    <div className="card-body col-lg-12">
                        <h4><span className="text-danger text-small d-block mb-2">{errors?.seccion?.message}</span></h4><TextField inputRef={register({ required: { value: true, message: "Seccion obligatoria" } })} name="seccion" required id="seccion" label="Seccion" defaultValue="" />
                    </div>
                </div>


                <div className="card col-sm-10 col-md-10 col-lg-10 mb-5" >
                    <h3><div className="card-header ">
                        Partidos bloque 1
                    </div></h3>

                    <div className="card-body col-lg-12 ">
                        <TextField inputRef={register({ required: { value: false } })} name="pan" id="pan" label="Pan" defaultValue="" variant="filled" />
                        <TextField inputRef={register({ required: { value: false } })} name="pri" id="pri" label="Pri" defaultValue="" variant="filled" />

                        <TextField inputRef={register({ required: { value: false } })} name="prd" id="prd" label="Prd" defaultValue="" variant="filled" />
                        <TextField inputRef={register({ required: { value: false } })} name="pvem" id="pvem" label="Pvem" defaultValue="" variant="filled" />

                        <TextField inputRef={register({ required: { value: false } })} name="pt" id="pt" label="PT" defaultValue="" variant="filled" />
                    </div>
                </div>


                <div className="card col-sm-10 col-md-10 col-lg-10 mb-5" >
                    <h3><div className="card-header ">
                        Partidos bloque 2
                    </div></h3>

                    <div className="card-body col-lg-12 ">
                        <TextField inputRef={register({ required: { value: false } })} name="movciudadano" id="movciudadano" label="Mov Ciudadano" defaultValue="" variant="filled" />
                        <TextField inputRef={register({ required: { value: false } })} name="nuevaalianza" id="nuevaalianza" label="Nueva Alianza" defaultValue="" variant="filled" />

                        <TextField inputRef={register({ required: { value: false } })} name="morena" id="morena" label="Morena" defaultValue="" variant="filled" />
                        <TextField inputRef={register({ required: { value: false } })} name="encuentrosocial" id="encuentrosocial" label="Encuentro Social" defaultValue="" variant="filled" />

                        <TextField inputRef={register({ required: { value: false } })} name="panprd" id="panprd" label="Pan-PRD" defaultValue="" variant="filled" />
                    </div>
                </div>

                <div className="card col-sm-10 col-md-10 col-lg-10 mb-5" >
                    <h3><div className="card-header ">
                        Partidos bloque 3
                    </div></h3>

                    <div className="card-body col-lg-12 ">
                        <TextField inputRef={register({ required: { value: false } })} name="pripvemnuevaalianza" id="pripvemnuevaalianza" label="Pri-Pvem-Nueva Alianza" defaultValue="" variant="filled" />
                        <TextField inputRef={register({ required: { value: false } })} name="pripvem" id="pripvem" label="Pri Pvem" defaultValue="" variant="filled" />

                        <TextField inputRef={register({ required: { value: false } })} name="prinuevaalianza" id="prinuevaalianza" label="Pri-Nueva Alianza" defaultValue="" variant="filled" />
                        <TextField inputRef={register({ required: { value: false } })} name="pvemnuevaalianza" id="pvemnuevaalianza" label="Pvem-Nueva Alianza" defaultValue="" variant="filled" />

                        <TextField inputRef={register({ required: { value: false } })} name="candidatosnoregistrados" id="candidatosnoregistrados" label="Candidatos No Reg." defaultValue="" variant="filled" />
                    </div>
                </div>

                <div className="card col-sm-10 col-md-10 col-lg-10 mb-5" >
                    <h3><div className="card-header ">
                        Totales
                    </div></h3>

                    <div className="card-body col-lg-12">
                        <TextField inputRef={register({ required: { value: false } })} name="nulos" id="nulos" label="Nulos" defaultValue="" variant="filled" />
                        <TextField inputRef={register({ required: { value: false } })} name="total" id="total" label="Total" defaultValue="" variant="filled" />
                    </div>
                </div>
                <button className="btn btn-primary">Enviar</button>
            </form>
        </div >
    );
}

export default CreateElecciones