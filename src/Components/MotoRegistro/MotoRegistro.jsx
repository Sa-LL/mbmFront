import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import axios from "axios";
import esLocale from "date-fns/locale/es";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    DatePicker,
} from '@material-ui/pickers';
import DateRangeIcon from "@material-ui/icons/DateRange";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                MbM
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {

    const [datos, setDatos] = useState({
        color: "",
        kilometraje: "",
        modelo: "",
        aceite: new Date(),
        frenoTrasero: new Date(),
        frenoDelantero: new Date(),
        filtroAire: new Date(),
        filtroAceite: new Date(),
        llantaTrasera: new Date(),
        llantaDelantera: new Date(),
    })

    axios.interceptors.request.use(function (config) {
        const token = "Bearer " + sessionStorage.getItem("token");
        config.headers.Authorization = token;
        return config;
    });

    const handleClick = () => {
        axios
            .post("link", datos)
            .then((res) => {
                sessionStorage.setItem("token", res.data.token);
            })
            .catch((err) => {
                console.log(err)
            });
    };

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <img
                    src={require("../../Imagenes/logo.png")}
                    alt="mbmlogo"
                    height="40%"
                    width="40%"
                />
                <Typography style={{ marginTop: "10%", marginBottom: "5%" }} component="h1" variant="h5">
                    Información de la motocicleta
        </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="off"
                                name="color"
                                variant="outlined"
                                required
                                fullWidth
                                id="color"
                                label="Color"
                                autoFocus
                                value={datos.color}
                                onChange={(e) => setDatos({ ...datos, color: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="kilometraje"
                                label="Kilometraje"
                                name="kilometraje"
                                autoComplete="off"
                                value={datos.kilometraje}
                                onChange={(e) => setDatos({ ...datos, kilometraje: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="modelo"
                                label="Modelo"
                                id="modelo"
                                autoComplete="off"
                                value={datos.modelo}
                                onChange={(e) => setDatos({ ...datos, modelo: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                                <DatePicker
                                    label="Último cambio de aceite"
                                    inputVariant="outlined"
                                    fullWidth
                                    value={datos.aceite}
                                    onChange={(e) => setDatos({ ...datos, aceite: e.target.value })}
                                    format="dd/MM/yyyy"
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs={12} >
                            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                                <DatePicker
                                    label="Último cambio de freno trasero"
                                    inputVariant="outlined"
                                    fullWidth
                                    value={datos.frenoTrasero}
                                    onChange={(e) => setDatos({ ...datos, frenoTrasero: e.target.value })}
                                    format="dd/MM/yyyy"
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs={12} >
                            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                                <DatePicker
                                    label="Último cambio de freno delantero"
                                    inputVariant="outlined"
                                    fullWidth
                                    value={datos.frenoDelantero}
                                    onChange={(e) => setDatos({ ...datos, frenoDelantero: e.target.value })}
                                    format="dd/MM/yyyy"
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs={12} >
                            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                                <DatePicker
                                    label="Último cambio de filtro de aire"
                                    inputVariant="outlined"
                                    fullWidth
                                    value={datos.filtroAire}
                                    onChange={(e) => setDatos({ ...datos, filtroAire: e.target.value })}
                                    format="dd/MM/yyyy"
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs={12} >
                            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                                <DatePicker
                                    label="Último cambio de filtro de aceite"
                                    inputVariant="outlined"
                                    fullWidth
                                    value={datos.filtroAceite}
                                    onChange={(e) => setDatos({ ...datos, filtroAceite: e.target.value })}
                                    format="dd/MM/yyyy"
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs={12} >
                            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                                <DatePicker
                                    label="Último cambio de llanta trasera"
                                    inputVariant="outlined"
                                    fullWidth
                                    value={datos.llantaTrasera}
                                    onChange={(e) => setDatos({ ...datos, llantaTrasera: e.target.value })}
                                    format="dd/MM/yyyy"
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs={12} >
                            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                                <DatePicker
                                    label="Último cambio de llanta trasera"
                                    inputVariant="outlined"
                                    fullWidth
                                    value={datos.llantaDelantera}
                                    onChange={(e) => setDatos({ ...datos, llantaDelantera: e.target.value })}
                                    format="dd/MM/yyyy"
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                    </Grid>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleClick}
                    >
                        Registrarse
          </Button>

                </form>
            </div>
            <Box style={{ marginBottom: "10%" }} mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}