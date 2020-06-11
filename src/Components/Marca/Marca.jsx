import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";
import axios from "axios";

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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const marcas = ["auteco", "suzuki", "yamaha", "akt", "honda"];

export default function SignIn() {
    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        axios
            .get("https://motos-json.herokuapp.com/list", {})
            .then((res) => {
                //props.handleLista(res.data);
                sessionStorage.setItem("list", JSON.stringify(res.data))
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

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
                    Seleccionar marca
        </Typography>
                <Grid style={{ justifyContent: "center" }} container spacing={2}>
                    {marcas.map((key) => (
                        <img
                            key={key}
                            onClick={() => {
                                sessionStorage.setItem("marca", key);
                                history.push("/motos")
                            }}
                            style={{ margin: "5%" }}
                            src={require(`../../Imagenes/${key}.png`)}
                            alt="mbmlogo"
                            height="40%"
                            width="40%"
                        />
                    ))}
                </Grid>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}