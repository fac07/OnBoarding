import React from 'react';
import Layout from './layout';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const Inicio = () => {

    const navigate = useNavigate();

    const sendSubmit = (direccion) => {
        navigate("/"+direccion);
    };

    return <Layout>
    <br />
    <h3>
        Procesos en curso
    </h3>
    <br />
        <Table striped bordered hover>
        <thead>
            <tr>
                <th scope="col">Código colaborador</th>
                <th scope="col">Nombre colaborador</th>
                <th scope="col">Fecha de inicio</th>
                <th scope="col">Estado</th>
                <th scope="col">Fecha última acción</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">999202</th>
                <td>Juan Perez</td>
                <td>01-03-2023</td>
                <td>Primera evaluación</td>
                <td>01-06-2023</td>
                <td><Button size="sm" disabled>Segunda evaluación</Button></td>
            </tr>
            <tr>
                <th scope="row">999203</th>
                <td>Maria Perez</td>
                <td>01-03-2023</td>
                <td>Primera evaluación</td>
                <td>02-06-2023</td>
                <td><Button size="sm" disabled>Segunda evaluación</Button></td>
            </tr>
            <tr>
                <th scope="row">999204</th>
                <td>Pablo Lopez</td>
                <td>01-03-2023</td>
                <td>Plan creado</td>
                <td>03-03-2023</td>
                <td><Button size="sm" >Primera evaluación</Button></td>
            </tr>
            <tr>
                <th scope="row">999205</th>
                <td>Ana Lopez</td>
                <td>01-06-2023</td>
                <td>Plan creado</td>
                <td>03-06-2023</td>
                <td><Button size="sm" disabled>Primera evaluación</Button></td>
            </tr>
            <tr>
                <th scope="row">999206</th>
                <td>Pedro Pereira</td>
                <td>01-06-2023</td>
                <td>Creada</td>
                <td>01-06-2023</td>
                <td><Button size="sm" onClick={() => sendSubmit("nuevo_plan")}>Crear plan</Button></td>
            </tr>
        </tbody>
        </Table>
        
        <div id="mybutton">
            <a className="NuevoProcesoBtn" href="nuevo_proceso" >Nuevo proceso</a>
        </div>
    </Layout>
};

export default Inicio;