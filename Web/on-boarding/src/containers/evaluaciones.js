import React from 'react';
import Layout from './layout';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Evaluaciones = () => {

    const navigate = useNavigate();

    const sendSubmit = (direccion) => {
        navigate("/"+direccion);
    };

    return <Layout>
        <h3>
            Procesos en curso
        </h3>
        <br />
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th scope="col">Código colaborador</th>
                    <th scope="col">Nombre colaborador</th>
                    <th scope="col">Puesto</th>
                    <th scope="col">Fecha próxima evaluación</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">999202</th>
                    <td>Juan Perez</td>
                    <td>Gestor</td>
                    <td>01-06-2023</td>
                    <td><Button size="sm" onClick={() => sendSubmit("nueva_evaluacion")}>Evaluar</Button></td>
                </tr>
                <tr>
                    <th scope="row">999203</th>
                    <td>Maria Perez</td>
                    <td>Gestor</td>
                    <td>02-06-2023</td>
                    <td><Button size="sm" onClick={() => sendSubmit("nueva_evaluacion")}>Evaluar</Button></td>
                </tr>
                <tr>
                    <th scope="row">999204</th>
                    <td>Pablo Lopez</td>
                    <td>Gestor</td>
                    <td>03-06-2023</td>
                    <td><Button size="sm" onClick={() => sendSubmit("nueva_evaluacion")}>Evaluar</Button></td>
                </tr>
                <tr>
                    <th scope="row">999205</th>
                    <td>Ana Lopez</td>
                    <td>Gestor</td>
                    <td>03-09-2023</td>
                    <td><Button size="sm" disabled>Evaluar</Button></td>
                </tr>
                <tr>
                    <th scope="row">999206</th>
                    <td>Pedro Pereira</td>
                    <td>Gestor</td>
                    <td>01-09-2023</td>
                    <td><Button size="sm" disabled>Evaluar</Button></td>
                </tr>
            </tbody>
        </Table>
    </Layout>
};

export default Evaluaciones;