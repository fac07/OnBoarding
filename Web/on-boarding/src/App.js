import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Inicio from './containers/inicio';
import Evaluaciones from './containers/evaluaciones';
import Reportes from './containers/reportes';
import NuevoPlan from './containers/nuevo_plan';
import NuevoProceso from './containers/nuevo_proceso';
import NuevaEvaluacion from './containers/nueva_evaluacion';
import DetalleEvaluacion from './containers/detalle_evaluacion';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Inicio/>}  />
        <Route exact path="/evaluaciones" element={<Evaluaciones/>}  />
        <Route exact path="/reportes" element={<Reportes/>}  />
        <Route exact path="/nuevo_plan" element={<NuevoPlan/>}  />
        <Route exact path="/nuevo_proceso" element={<NuevoProceso/>}  />
        <Route exact path="/nueva_evaluacion" element={<NuevaEvaluacion/>}  />
        <Route exact path="/detalle_evaluacion" element={<DetalleEvaluacion/>}  />
      </Routes>
    </Router>
  );
}

export default App;
