import React from 'react';
import Login from "./Components/Login/Login";
import Registro from "./Components/Registro/Registro";
import Marca from "./Components/Marca/Marca";
import Motos from "./Components/Motos/Motos";
import MotoRegistro from "./Components/MotoRegistro/MotoRegistro";
import Dashboard from "./Components/Dashboard/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  // const handleLogin = () =>{
  //   sessionStorage.setItem("auth", "true");
  // }
  return (
    <Router>
      <Route
        exact
        path="/"
        component={Login}
      />
      <Route
        exact
        path="/registro"
        component={Registro}
      />
      <Route
        exact
        path="/marca"
        component={Marca}
      />
      <Route
        exact
        path="/motos"
        component={Motos}
      />
      <Route
        exact
        path="/motoregistro"
        component={MotoRegistro}
      />
      <Route
        exact
        path="/dashboard"
        component={Dashboard}
      />
    </Router>
  );
}

export default App;
