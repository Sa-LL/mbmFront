import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
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
import { useHistory } from "react-router-dom";

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

const paises = ["Colombia", "Venezuela", "Ecuador", "Brasil", "México"];

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
    const history = useHistory();
    const [datos, setDatos] = useState({
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        phone: "1",
        country: "Colombia",
        city: "Pereira",
        gender: "Otro",
    })

    const handleClick = () => {
        let objeto = {
            name: datos.nombre + datos.apellido,
            email: datos.email,
            password: datos.password,
            phone: datos.phone,
            country: datos.country,
            city: datos.city,
            gender: datos.gender
        }
        axios
            .post("https://mbmcolombia.herokuapp.com/register", objeto)
            .then((res) => {
                sessionStorage.setItem("token", res.data.token);
                console.log(res)
                sessionStorage.setItem("nombre", res.data.name);
                sessionStorage.setItem("email", res.data.email);
                sessionStorage.setItem("country", res.data.country);
                sessionStorage.setItem("gender", res.data.gender);
                history.push("/marca");
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
                    Registro
        </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="Nombre"
                                autoFocus
                                value={datos.nombre}
                                onChange={(e) => setDatos({ ...datos, nombre: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Apellidos"
                                name="lastName"
                                autoComplete="off"
                                value={datos.apellido}
                                onChange={(e) => setDatos({ ...datos, apellido: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Correo electrónico"
                                name="email"
                                autoComplete="off"
                                value={datos.email}
                                onChange={(e) => setDatos({ ...datos, email: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={datos.password}
                                onChange={(e) => setDatos({ ...datos, password: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="pais"
                                label="País"
                                select
                                value={datos.country}
                                onChange={(e) => setDatos({ ...datos, country: e.target.value })}
                                id="pais"
                            >
                                {paises.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12}><FormLabel component="legend">Género</FormLabel>
                            <RadioGroup style={{ justifyContent: "center" }}
                                row aria-label="genero"
                                name="genero1"
                                value={datos.gender}
                                onChange={(e) => setDatos({ ...datos, gender: e.target.value })}
                            >
                                <FormControlLabel value="Mujer" control={<Radio />} label="Mujer" />
                                <FormControlLabel value="Hombre" control={<Radio />} label="Hombre" />
                                <FormControlLabel value="Otro" control={<Radio />} label="Otro" />
                            </RadioGroup>
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
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link onClick={() => history.push("/")} variant="body2">
                                ¿Ya tienes una cuenta? Ingresa
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box style={{ marginBottom: "10%" }} mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}