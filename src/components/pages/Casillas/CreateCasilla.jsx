import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useForm } from 'react-hook-form'
import { createCasillaAccion } from "../../../redux/CasillasDucks";


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




const CreateCasilla = () => {
    //Store y redux
    const dispatch = useDispatch();

    //Handle Create
    const handleCreate = (casilla) => {
        dispatch(createCasillaAccion(casilla));
    };

    //react-hook-forms
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        handleCreate(data);
        e.target.reset();
    }

    const classes = useStyles();

    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/home" >
                    Home
      			</Link>
                <Link color="inherit" href="/casillas" >
                    Casillas
      			</Link>
                <Link
                    color="textPrimary"
                    href="/casillas/create"
                    onClick={handleClick}
                    aria-current="page"
                >
                    Crear casilla
      			</Link>
            </Breadcrumbs><br />

            <form onSubmit={handleSubmit(onSubmit)} className={classes.root} noValidate autoComplete="off">
                <div className="card col-sm-10 col-md-10 col-lg-10 mb-5" >
                    <h3><div className="card-header ">
                        Crear casilla
                    </div></h3>

                    <div className="card-body col-lg-12">
                        <h4><span className="text-danger text-small d-block mb-2">{errors?.idrepresentantecasilla?.message}</span></h4><TextField inputRef={register({ required: { value: true, message: "Representante obligatorio" } })} name="idrepresentantecasilla" required id="idrepresentantecasilla" label="Representante de casilla" defaultValue="" />
                        <h4><span className="text-danger text-small d-block mb-2">{errors?.seccionasignada?.message}</span></h4><TextField inputRef={register({ required: { value: true, message: "Seccion obligatoria" } })} name="seccionasignada" required id="seccionasignada" label="Seccion asignada" defaultValue="" />
                        <TextField inputRef={register({ required: { value: false } })} name="cargo" id="cargo" label="Cargo" defaultValue="" />
                        <TextField inputRef={register({ required: { value: false } })} name="apertura" id="apertura" label="Apertura" defaultValue="" />
                        <TextField
                            inputRef={register({ required: { value: false } })}
                            name="horaapertura"
                            id="horaapertura"
                            label="Hora apertura"
                            type="datetime-local"
                            defaultValue="2021-01-31T10:30"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                </div>


                <div className="card col-sm-10 col-md-10 col-lg-10 mb-5" >
                    <h3><div className="card-header ">
                        Flujo de votantes
                    </div></h3>

                    <div className="card-body col-lg-12 ">
                        <TextField inputRef={register({ required: { value: false } })} name="flujo1230pm" id="flujo1230pm" label="Flujo 12-30" defaultValue="" variant="filled" />
                        <TextField inputRef={register({ required: { value: false } })} name="promovidos1230pm" id="promovidos1230pm" label="Promovidos 12-30" defaultValue="" variant="outlined" type="number" pattern="[0-9]\d*" />

                        <TextField inputRef={register({ required: { value: false } })} name="flujo430pm" id="flujo430pm" label="Flujo 16-30" defaultValue="" variant="filled" />
                        <TextField inputRef={register({ required: { value: false } })} name="promovidos430pm" id="promovidos430pm" label="Promovidos 16-30" defaultValue="" variant="outlined" type="number" pattern="[0-9]\d*" />

                        <TextField inputRef={register({ required: { value: false } })} name="flujo6pm" id="flujo6pm" label="Flujo 18" defaultValue="" variant="filled" />
                        <TextField inputRef={register({ required: { value: false } })} name="promovidos6pm" id="promovidos6pm" label="Promovidos 18" defaultValue="" variant="outlined" type="number" pattern="[0-9]\d*" />
                    </div>
                </div>


                <div className="card col-sm-10 col-md-10 col-lg-10 mb-5" >
                    <h3><div className="card-header ">
                        Cierre de casilla
                    </div></h3>

                    <div className="card-body col-lg-12">
                        <TextField inputRef={register({ required: { value: false } })} name="cierre6pm" id="cierre6pm" label="Cierre 18" defaultValue="" variant="outlined" type="number" pattern="[0-9]\d*" />
                        <TextField
                            inputRef={register({ required: { value: false } })}
                            name="horacierre"
                            id="horacierre"
                            label="Hora cierre"
                            type="datetime-local"
                            defaultValue="2021-01-31T10:30"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                </div>

                <div className="card col-sm-10 col-md-10 col-lg-10 mb-5" >
                    <h3><div className="card-header ">
                        Representantes de casilla
                    </div></h3>

                    <div className="card-body col-lg-12 ">
                        <TextField inputRef={register({ required: { value: false } })} name="rpp1" id="rpp1" label="Representante 1" defaultValue="" variant="filled" />
                        <TextField inputRef={register({ required: { value: false } })} name="rpp2" id="rpp2" label="Representante 2" defaultValue="" variant="filled" />
                        <TextField inputRef={register({ required: { value: false } })} name="rps1" id="rps1" label="Suplente 1" defaultValue="" variant="filled" />
                    </div>
                </div>

                <div className="card col-sm-10 col-md-10 col-lg-10 mb-5" >
                    <h3><div className="card-header ">
                        Representantes de casilla
                    </div></h3>

                    <div className="card-body col-lg-12">
                        <TextField inputRef={register({ required: { value: false } })} name="incidente" id="incidente" label="Incidente" defaultValue="" variant="filled" />
                        <TextField inputRef={register({ required: { value: false } })} name="nombre" id="nombre" label="Nombre" defaultValue="" variant="filled" />
                        <TextField inputRef={register({ required: { value: false } })} name="municipio" id="municipio" label="Municipio" defaultValue="" variant="filled" />
                        <TextField inputRef={register({ required: { value: false } })} name="localidad" id="localidad" label="Localidad" defaultValue="" variant="filled" />
                        <TextField inputRef={register({ required: { value: false } })} name="distrito" id="distrito" label="Distrito" defaultValue="" variant="filled" />
                    </div>
                </div>
                <button className="btn btn-primary">Enviar</button>
            </form>
        </div >
    );
}

export default CreateCasilla