import React from 'react';
import Layout from './layout';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

const Reportes = () => {

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
            <th scope="col">No. evaluación</th>
            <th scope="col">Conocimiento</th>
            <th scope="col">Will</th>
            <th scope="col">Resultado</th>
            <th scope="col">Acciones</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">999202</th>
            <td>Juan Perez</td>
            <td>Gestor</td>
            <td>1</td>
            <td>40%</td>
            <td>20%</td>
            <td>Entrenar</td>
            <td><Button size="sm" onClick={() => sendSubmit("detalle_evaluacion")} ><FaEye /></Button></td>
        </tr>
        <tr>
            <th scope="row">999203</th>
            <td>Maria Perez</td>
            <td>Gestor</td>
            <td>1</td>
            <td>10%</td>
            <td>40%</td>
            <td>Dar Acompañamiento</td>
            <td><Button size="sm" onClick={() => sendSubmit("detalle_evaluacion")} ><FaEye /></Button></td>
        </tr>
        <tr>
            <th scope="row">999204</th>
            <td>Pablo Lopez</td>
            <td>Gestor</td>
            <td>2</td>
            <td>49%</td>
            <td>49%</td>
            <td>Onboarding</td>
            <td><Button size="sm" onClick={() => sendSubmit("detalle_evaluacion")} ><FaEye /></Button></td>
        </tr>
        <tr>
            <th scope="row">999205</th>
            <td>Ana Lopez</td>
            <td>Gestor</td>
            <td>2</td>
            <td>45%</td>
            <td>49%</td>
            <td>Onboarding</td>
            <td><Button size="sm" onClick={() => sendSubmit("detalle_evaluacion")}><FaEye /></Button></td>
        </tr>
        <tr>
            <th scope="row">999206</th>
            <td>Pedro Pereira</td>
            <td>Gestor</td>
            <td>2</td>
            <td>20%</td>
            <td>20%</td>
            <td>Desvincular</td>
            <td><Button size="sm" onClick={() => sendSubmit("detalle_evaluacion")}><FaEye /></Button></td>
        </tr>
            </tbody>
        </Table>
    </Layout>
};

export default Reportes;