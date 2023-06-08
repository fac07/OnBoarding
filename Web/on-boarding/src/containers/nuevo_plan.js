import React, {  useEffect, useState } from "react";
import Layout from './layout';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaTrash, FaPlus } from 'react-icons/fa';
import { getActitud } from "../utils/getActitud";
import { getPlantillaConocimientoPorPuesto } from "../utils/getPlantillaConocimientoPorPuesto";
import { getPlantillaRecursoPorPuesto } from "../utils/getPlantillaRecursoPorPuesto";

const NuevoPlan = () => {

    const [resultActitud, setListActitud] = useState([]);
    const [resultConocimiento, setListConocimiento] = useState([]);
    const [resultRecurso, setListRecurso] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingConicimiento, setIsLoadingConicimiento] = useState(true);
    const [isLoadingRecurso, setIsLoadingRecurso] = useState(true);

    useEffect(() => {
        getActitud().then((items) => {
            setListActitud(items)
        })
        .finally(() => setIsLoading(false));

        getPlantillaConocimientoPorPuesto('03240064').then((items) => {
            setListConocimiento(items)
        })
        .finally(() => setIsLoadingConicimiento(false));

        getPlantillaRecursoPorPuesto('03240064').then((items) => {
            setListRecurso(items)
        })
        .finally(() => setIsLoadingRecurso(false));
    },[]);

    return <Layout>
        <br />
        <h3>
            Nuevo plan - Colaborador Pedro Pereira
        </h3>
        <h4>
            Puesto - Supervisor
        </h4>
        <br />
        <div className="formContainer">
            <br />
            <div className="form-group">
                <label for="CodigoColaborador">Número de evaluaciones</label>
                <input type="number" className="form-control" placeholder="Número de evaluaciones" defaultValue={"2"} />
            </div>
            <br />
            <br />
            <h5>Conocimiento</h5>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th scope="col">Aspecto técnico</th>
                        <th scope="col">Actividades</th>
                        <th scope="col">Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {isLoadingConicimiento ? <tr><td>Cargando...</td></tr>:
                    resultConocimiento.map((row) => (
                        <tr key={row.CodigoActividadPrioritaria}>
                            <td>{row.Nombre} ({row.DescripcionAST})</td>
                            <td>{row.DescripcionAP}</td>
                            <td><Button size="sm" variant="danger" ><FaTrash /></Button></td>
                        </tr>
                    ))}
                    <tr>
                        <td>OBJETIVOS DE APRENDIZAJE</td>
                        <td>Conocimiento del Negocio y Estructuras Organizacionales</td>
                        <td><Button size="sm" variant="danger" ><FaTrash /></Button></td>
                    </tr>
                    
                    <tr>
                        <td colspan="2">&nbsp;</td>
                        <td><Button size="sm" variant="success" ><FaPlus /></Button></td>
                    </tr>
                    </tbody>
                </Table>
            <br />
            <br />
            <h5>Will</h5>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th scope="col">Aspectos conductuales</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {isLoading ? <tr><td>Cargando...</td></tr>:
                    resultActitud.map((row) => (
                        <tr key={row.CodigoActitud}>
                            <td>{row.Nombre}</td>
                            <td>{row.Descripcion}</td>
                            <td><Button size="sm" variant="danger" ><FaTrash /></Button></td>
                        </tr>
                    ))}
                    <tr>
                        <td colspan="2">&nbsp;</td>
                        <td><Button size="sm" variant="success" ><FaPlus /></Button></td>
                    </tr>
                    </tbody>
                </Table>
            <br />
            <h5>Recursos</h5>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th scope="col">Descripción</th>
                        <th scope="col">Responsable</th>
                        <th scope="col">Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {isLoadingRecurso ? <tr><td>Cargando...</td></tr>:
                    resultRecurso.map((row) => (
                        <tr key={row.CodigoRecurso}>
                            <td>{row.Descripcion}</td>
                            <td>{row.Responsable}</td>
                            <td><Button size="sm" variant="danger" ><FaTrash /></Button></td>
                        </tr>
                    ))}
                    <tr>
                        <td colspan="2">&nbsp;</td>
                        <td><Button size="sm"  variant="success" ><FaPlus /></Button></td>
                    </tr>
                    </tbody>
                </Table>
            <Button >Crear</Button>
            <br />
        </div>
    </Layout>
};

export default NuevoPlan;