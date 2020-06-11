import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from "@material-ui/core/Paper";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
    bikeCard: {
        maxWidth: 300,
    },
    paperCard: {
        margin: "5%",
        display: "flex",
        flexWrap: "wrap"
    },
}));

export default function SignIn() {
    const classes = useStyles();
    const history = useHistory();
    const data = JSON.parse(sessionStorage.getItem("list"));
    const motos = data[sessionStorage.getItem("marca")];

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <img
                    src={require(`../../Imagenes/${sessionStorage.getItem("marca")}.png`)}
                    alt="mbmlogo"
                    height="60%"
                    width="60%"
                />
                <Typography style={{ marginTop: "10%", marginBottom: "5%" }} component="h1" variant="h5">
                    Seleccionar moto
        </Typography>
                <Grid style={{ justifyContent: "center" }} container spacing={2}>
                    {motos.map((key, index) => (
                        //console.log(key)
                        <Paper className={classes.paperCard} key={index}>
                            <Card className={classes.bikeCard}>
                                <CardActionArea onClick={() => {
                                    sessionStorage.setItem("moto", JSON.stringify(key));
                                    history.push("/motoregistro");
                                }}>
                                    <CardMedia
                                        component="img"
                                        alt={key.id}
                                        height="40%"
                                        width="40%"
                                        image={require(`../../Imagenes/Motos/${key.id}.png`)}
                                        title={key.nombre}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {key.nombre}
                                        </Typography>

                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Paper>
                        // <img
                        //     key={index}
                        //     onClick={() => console.log("click")}
                        //     style={{ margin: "5%" }}
                        //     src={require(`../../Imagenes/Motos/${key.id}.png`)}
                        //     alt="mbmlogo"
                        //     height="40%"
                        //     width="40%"
                        // />

                    ))}
                </Grid>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}