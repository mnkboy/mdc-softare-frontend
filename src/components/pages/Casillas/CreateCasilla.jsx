import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useForm } from 'react-hook-form'

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
    //react-hook-forms
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset()
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
                <div className="card col-sm-6 col-md-6 col-lg-10 mb-5" >
                    <h3><div className="card-header ">
                        Apertura de casilla
                    </div></h3>

                    <div className="card-body col-lg-12">
                        <TextField inputRef={register({ required: { value: true, message: "Titulo obligatorio" } })} name="seccionasignada" required id="seccionasignada" label="Seccion asignada" defaultValue="" /><span className="text-danger text-small d-block mb-2">{errors?.seccionasignada?.message}</span>
                        <TextField inputRef={register({ required: { value: true, message: "Titulo obligatorio" } })} name="cargo" id="cargo" label="Cargo" defaultValue="" />
                        <TextField inputRef={register({ required: { value: true, message: "Titulo obligatorio" } })} name="apertura" id="apertura" label="Apertura" defaultValue="" />
                        <TextField
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


                <div className="card col-sm-6 col-md-6 col-lg-10 mb-5" >
                    <h3><div className="card-header ">
                        Flujo de votantes
                    </div></h3>

                    <div className="card-body col-lg-12 ">
                        <TextField id="flujo1230pm" label="Flujo 12-30" defaultValue="" variant="filled" />
                        <TextField id="promovidos1230pm" label="Promovidos 12-30" defaultValue="" variant="outlined" />

                        <TextField id="flujo430pm" label="Flujo 16-30" defaultValue="" variant="filled" />
                        <TextField id="promovidos430pm" label="Promovidos 16-30" defaultValue="" variant="outlined" />

                        <TextField id="flujo6pm" label="Flujo 18" defaultValue="" variant="filled" />
                        <TextField id="promovidos6pm" label="Promovidos 18" defaultValue="" variant="outlined" />
                    </div>
                </div>


                <div className="card col-sm-6 col-md-6 col-lg-10 mb-5" >
                    <h3><div className="card-header ">
                        Cierre de casilla
                    </div></h3>

                    <div className="card-body col-lg-12">
                        <TextField id="cierre6pm" label="Cierre 18" defaultValue="" />
                        <TextField
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

                <div className="card col-sm-6 col-md-6 col-lg-10 mb-5" >
                    <h3><div className="card-header ">
                        Representantes de casilla
                    </div></h3>

                    <div className="card-body col-lg-12 ">
                        <TextField id="rpp1" label="Representante 1" defaultValue="" variant="outlined" />
                        <TextField id="rpp2" label="Representante 2" defaultValue="" variant="outlined" />
                        <TextField id="rps1" label="Suplente 1" defaultValue="" variant="outlined" />
                    </div>
                </div>

                <div className="card col-sm-6 col-md-6 col-lg-10 mb-5" >
                    <h3><div className="card-header ">
                        Representantes de casilla
                    </div></h3>

                    <div className="card-body col-lg-12">
                        <TextField id="incidente" label="Incidente" defaultValue="" variant="filled" />
                        <TextField id="nombre" label="Nombre" defaultValue="" variant="filled" />
                        <TextField id="municipio" label="Municipio" defaultValue="" variant="filled" />
                        <TextField id="localidad" label="Localidad" defaultValue="" variant="filled" />
                        <TextField id="distrito" label="Distrito" defaultValue="" variant="filled" />
                    </div>
                </div>
                <button className="btn btn-primary">Enviar</button>
            </form>
        </div >
    );
}

export default CreateCasilla