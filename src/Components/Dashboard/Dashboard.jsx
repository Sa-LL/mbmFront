import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { useHistory } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import BarChartIcon from '@material-ui/icons/BarChart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BuildIcon from '@material-ui/icons/Build';
import FindReplaceIcon from '@material-ui/icons/FindReplace';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: "none",
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
    },
    fixedHeight: {
        height: 240,
    },
    iconoActivado: {
        //color: "#07CCB9",
        backgroundColor: "#f44336",
        '&:hover': {
            background: "#f5695e",
        },
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "column",
        marginTop: "5%",
    },
    bikeCard: {
        maxWidth: 300,
    },
}));

function datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

function CircularProgressWithLabel(props) {
    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress variant="static" {...props} />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="caption"
                    component="div"
                    color="textSecondary">
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    )
}

CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and static variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
};

export default function InicioS() {
    const history = useHistory();
    const classes = useStyles();
    const [open, setOpen] = useState(true);

    const [motoActual, setMotoActual] = useState({});

    let data = JSON.parse(sessionStorage.getItem("data"));
    const [menuItems, setMenuItems] = useState({
        misMotos: true,
    })

    let dataPorcentaje = {};
    //Barra lateral izquierda
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    //////////////////////////////////////
    //Consultas (empieza en las recientes)
    ///////////////////////////////////////



    const handleLogout = () => {
        history.push("/");
    };



    ///////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////



    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="absolute"
                className={clsx(classes.appBar, open && classes.appBarShift)}
            >
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(
                            classes.menuButton,
                            open && classes.menuButtonHidden
                        )}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classes.title}
                    >
                        Dashboard
          </Typography>
                    <IconButton onClick={handleLogout} color="inherit">
                        <PowerSettingsNewIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem
                        button
                        className={menuItems.misMotos ? classes.iconoActivado : null}
                        onClick={(e) => setMenuItems({ misMotos: true })}
                    >
                        <ListItemIcon>
                            <MotorcycleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Mis motos" />
                    </ListItem>
                    <ListItem
                        button
                        className={menuItems.misEstadisticas ? classes.iconoActivado : null}
                        onClick={(e) => setMenuItems({ misEstadisticas: true })}
                    >
                        <ListItemIcon>
                            <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Mis estadísticas" />
                    </ListItem>
                    <ListItem
                        button
                        className={menuItems.miPerfil ? classes.iconoActivado : null}
                        onClick={(e) => setMenuItems({ miPerfil: true })}
                    >
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Mi perfil" />
                    </ListItem>
                    <ListItem
                        button
                        className={menuItems.miTaller ? classes.iconoActivado : null}
                        onClick={(e) => setMenuItems({ miTaller: true })}
                    >
                        <ListItemIcon>
                            <BuildIcon />
                        </ListItemIcon>
                        <ListItemText primary="Mi taller" />
                    </ListItem>
                    <ListItem
                        button
                        className={menuItems.miRepuesto ? classes.iconoActivado : null}
                        onClick={(e) => setMenuItems({ miRepuesto: true })}
                    >
                        <ListItemIcon>
                            <FindReplaceIcon />
                        </ListItemIcon>
                        <ListItemText primary="Mi repuesto" />
                    </ListItem>
                    {/* <ListItems filtroActivo={filtroActivo} setFiltroActivo={setFiltroActivo} handleDrawerOpen={handleDrawerOpen} /> */}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid style={{ justifyContent: "center" }} container spacing={3}>
                        {
                            menuItems.misMotos ?
                                data.bikes.map((moto, index) => {

                                    return (<Grid key={index} item xs={6}>
                                        <Card className={classes.bikeCard}>
                                            <CardActionArea onClick={() => {
                                                setMotoActual(moto)
                                                setMenuItems({ misEstadisticas: true })
                                            }}>
                                                <CardMedia
                                                    component="img"
                                                    alt={moto.ref}
                                                    height="186px"
                                                    image={require(`../../Imagenes/Motos/${moto.ref}.png`)}
                                                    title={moto.brand + moto.ref}
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {`${moto.brand} ${moto.ref} color ${moto.color}`}
                                                    </Typography>

                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button size="small" color="primary" onClick={() => {
                                                    setMotoActual(moto)
                                                    setMenuItems({ misEstadisticas: true })
                                                }}>
                                                    Ver estadísticas
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>)
                                }
                                )
                                :

                                menuItems.misEstadisticas ?
                                    (
                                        <Grid item xs={8}>
                                            <List>
                                                <Divider component="li" />
                                                <ListItem>
                                                    <ListItemText primary="Freno trasero" />
                                                    <CircularProgressWithLabel value={30} />
                                                </ListItem>
                                                <Divider component="li" />
                                                <ListItem>
                                                    <ListItemText primary="Freno delantero" />
                                                    <CircularProgressWithLabel value={30} />
                                                </ListItem>
                                                <Divider component="li" />
                                                <ListItem>
                                                    <ListItemText primary="Filtro de aceite" />
                                                    <CircularProgressWithLabel value={30} />
                                                </ListItem>
                                                <Divider component="li" />
                                                <ListItem>
                                                    <ListItemText primary="Filtro de aire" />
                                                    <CircularProgressWithLabel value={30} />
                                                </ListItem>
                                                <Divider component="li" />
                                                <ListItem>
                                                    <ListItemText primary="Llanta trasera" />
                                                    <CircularProgressWithLabel value={30} />
                                                </ListItem>
                                                <Divider component="li" />
                                                <ListItem>
                                                    <ListItemText primary="Llanta delantera" />
                                                    <CircularProgressWithLabel value={30} />
                                                </ListItem>
                                            </List>


                                        </Grid>
                                    )
                                    : null
                        }

                    </Grid>
                </Container>
            </main>
        </div>
    );
}
