import React, { useEffect, useState } from "react";
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useForm } from 'react-hook-form'
import { updateCasillaAccion, getCasillaAccion } from "../../../redux/CasillasDucks";


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
            border: "",
        },
    },
}));


const UpdateCasilla = () => {
    //Store y configuracion REDUX
    const dispatch = useDispatch();
    const casillas = useSelector((store) => store.casillas.array);
    const reload = useSelector((store) => store.casillas.reload);

    //Recibimos parametros
    const { id } = useParams()

    //casilla
    const casilla = {
        id: id,
    };

    //Hacemos carga inicial
    useEffect(() => {
        casilla.id = id;
        dispatch(getCasillaAccion(casilla));
    }, []);

    //Verificamos si hubo cambios
    if (reload) {
        casilla.id = id;
        dispatch(getCasillaAccion(casilla));
    }

    //BreadCums
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    //Handle update
    const handleupdate = (data) => {
        dispatch(updateCasillaAccion(data));
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
        if (casillas.length !== 1) {
            return (
                <div>
                    < h5 > Cargando... </h5 >
                </div>
            )
        }
        return (

            < div >
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/home" >
                        Home
      			</Link>
                    <Link color="inherit" href="/casillas" >
                        Casillas
      			</Link>
                    <Link
                        color="textPrimary"
                        href="/casillas/update"
                        onClick={handleClick}
                        aria-current="page"
                    >
                        Crear casilla
      			</Link>
                </Breadcrumbs><br />

                <form onSubmit={handleSubmit(onSubmit)} className={classes.root} noValidate autoComplete="off">
                    <div className="card col-sm-10 col-md-10 col-lg-10 mb-5" >
                        <h3><div className="card-header ">
                            Apertura de casilla
                    </div></h3>

                        <div className="card-body col-lg-12">
                            <h4><span className="text-danger text-small d-block mb-2">{errors?.idcasilla?.message}</span></h4><TextField inputRef={register({ required: { value: true, message: "Id casilla" } })} name="id" required id="id" label="id" defaultValue={casillas[0].id} style={{ display: 'none' }} />
                            <h4><span className="text-danger text-small d-block mb-2">{errors?.idrepresentantecasilla?.message}</span></h4><TextField inputRef={register({ required: { value: true, message: "Representante obligatorio" } })} name="idrepresentantecasilla" required id="idrepresentantecasilla" label="Representante de casilla" defaultValue={casillas[0].idrepresentantecasilla} />
                            <h4><span className="text-danger text-small d-block mb-2">{errors?.seccionasignada?.message}</span></h4><TextField inputRef={register({ required: { value: true, message: "Seccion obligatoria" } })} name="seccionasignada" required id="seccionasignada" label="Seccion asignada" defaultValue={casillas[0].seccionasignada} />
                            <TextField inputRef={register({ required: { value: false } })} name="cargo" id="cargo" label="Cargo" defaultValue={casillas[0].cargo} />
                            <TextField inputRef={register({ required: { value: false } })} name="apertura" id="apertura" label="Apertura" defaultValue={casillas[0].apertura} />
                            <TextField
                                inputRef={register({ required: { value: false } })}
                                name="horaapertura"
                                id="horaapertura"
                                label="Hora apertura"
                                type="datetime-local"
                                defaultValue={casillas[0].horaapertura}
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
                            <TextField inputRef={register({ required: { value: false } })} name="flujo1230pm" id="flujo1230pm" label="Flujo 12-30" defaultValue={casillas[0].flujo1230pm} variant="filled" />
                            <TextField inputRef={register({ required: { value: false } })} name="promovidos1230pm" id="promovidos1230pm" label="Promovidos 12-30" defaultValue={casillas[0].promovidos1230pm} variant="outlined" type="number" pattern="[0-9]\d*" />

                            <TextField inputRef={register({ required: { value: false } })} name="flujo430pm" id="flujo430pm" label="Flujo 16-30" defaultValue={casillas[0].flujo430pm} variant="filled" />
                            <TextField inputRef={register({ required: { value: false } })} name="promovidos430pm" id="promovidos430pm" label="Promovidos 16-30" defaultValue={casillas[0].promovidos430pm} variant="outlined" type="number" pattern="[0-9]\d*" />

                            <TextField inputRef={register({ required: { value: false } })} name="flujo6pm" id="flujo6pm" label="Flujo 18" defaultValue={casillas[0].flujo6pm} variant="filled" />
                            <TextField inputRef={register({ required: { value: false } })} name="promovidos6pm" id="promovidos6pm" label="Promovidos 18" defaultValue={casillas[0].promovidos6pm} variant="outlined" type="number" pattern="[0-9]\d*" />
                        </div>
                    </div>


                    <div className="card col-sm-10 col-md-10 col-lg-10 mb-5" >
                        <h3><div className="card-header ">
                            Cierre de casilla
                    </div></h3>

                        <div className="card-body col-lg-12">
                            <TextField inputRef={register({ required: { value: false } })} name="cierre6pm" id="cierre6pm" label="Cierre 18" defaultValue={casillas[0].cierre6pm} variant="outlined" type="number" pattern="[0-9]\d*" />
                            <TextField
                                inputRef={register({ required: { value: false } })}
                                name="horacierre"
                                id="horacierre"
                                label="Hora cierre"
                                type="datetime-local"
                                defaultValue={casillas[0].horacierre}
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
                            <TextField inputRef={register({ required: { value: false } })} name="rpp1" id="rpp1" label="Representante 1" defaultValue={casillas[0].rpp1} variant="filled" />
                            <TextField inputRef={register({ required: { value: false } })} name="rpp2" id="rpp2" label="Representante 2" defaultValue={casillas[0].rpp2} variant="filled" />
                            <TextField inputRef={register({ required: { value: false } })} name="rps1" id="rps1" label="Suplente 1" defaultValue={casillas[0].rps1} variant="filled" />
                        </div>
                    </div>

                    <div className="card col-sm-10 col-md-10 col-lg-10 mb-5" >
                        <h3><div className="card-header ">
                            Representantes de casilla
                    </div></h3>

                        <div className="card-body col-lg-12">
                            <TextField inputRef={register({ required: { value: false } })} name="incidente" id="incidente" label="Incidente" defaultValue={casillas[0].incidente} variant="filled" />
                            <TextField inputRef={register({ required: { value: false } })} name="nombre" id="nombre" label="Nombre" defaultValue={casillas[0].nombre} variant="filled" />
                            <TextField inputRef={register({ required: { value: false } })} name="municipio" id="municipio" label="Municipio" defaultValue={casillas[0].municipio} variant="filled" />
                            <TextField inputRef={register({ required: { value: false } })} name="localidad" id="localidad" label="Localidad" defaultValue={casillas[0].localidad} variant="filled" />
                            <TextField inputRef={register({ required: { value: false } })} name="distrito" id="distrito" label="Distrito" defaultValue={casillas[0].distrito} variant="filled" />
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

export default UpdateCasilla