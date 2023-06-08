import React, {  useEffect, useState } from "react";
import Layout from './layout';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaTrash, FaPlus } from 'react-icons/fa';
import { getActitud } from "../utils/getActitud";


const NuevoPlan = () => {

    const [resultActitud, setListActitud] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getActitud().then((items) => {
            setListActitud(items)
        })
        .finally(() => setIsLoading(false));
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
                    <tr>
                        <td>OBJETIVOS DE APRENDIZAJE</td>
                        <td>Conocimiento del Negocio y Estructuras Organizacionales</td>
                        <td><Button size="sm" variant="danger" ><FaTrash /></Button></td>
                    </tr>
                    <tr>
                        <td>OBJETIVOS DE APRENDIZAJE</td>
                        <td>Conocimiento de la Cultura ILU / Valores organizacionales y Código de Ética</td>
                        <td><Button size="sm" variant="danger" ><FaTrash /></Button></td>
                    </tr>
                    <tr>
                        <td>OBJETIVOS DE APRENDIZAJE</td>
                        <td>Procesos de la Gerencia Financiera y procesos de Costos y Presupuestos.</td>
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
                    <tr>
                        <td>Contrato de trabajo</td>
                        <td>Compensaciones y Beneficios</td>
                        <td><Button size="sm" variant="danger" ><FaTrash /></Button></td>
                    </tr>
                    <tr>
                        <td>Tarjeta de seguro de vida y gastos médicos</td>
                        <td>Compensaciones y Beneficios</td>
                        <td><Button size="sm" variant="danger" ><FaTrash /></Button></td>
                    </tr>
                    <tr>
                        <td>Formulario de Auxilio Póstumo</td>
                        <td>Compensaciones y Beneficios</td>
                        <td><Button size="sm" variant="danger" ><FaTrash /></Button></td>
                    </tr>
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