import React from 'react';
import Layout from './layout';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const NuevaEvaluacion = () => {

    return <Layout>
        <br />
        <h3>
            Evaluación X - Colaborador Pedro Pereira
        </h3>
        <h4>
            Puesto - Supervisor
        </h4>
        <br />
        <div className="formContainerSM">
            <Form>
                <br />
                <h5>Conocimiento</h5>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th scope="col">Aspecto técnico</th>
                        <th scope="col">Actividades</th>
                        <th scope="col" style={{textAlign: "center"}}>No lo puede hacer<br />0%</th>
                        <th scope="col" style={{textAlign: "center"}}>Lo hace con ayuda<br />35%</th>
                        <th scope="col" style={{textAlign: "center"}}>Lo hace solo<br />70%</th>
                        <th scope="col" style={{textAlign: "center"}}>Lo hace y enseña<br />100%</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>OBJETIVOS DE APRENDIZAJE</td>
                        <td>Conocimiento del Negocio y Estructuras Organizacionales</td>
                        <td style={{textAlign: "center"}}>
                            <Form.Check  value="" id="flexCheckDefault" />
                        </td>
                        <td style={{textAlign: "center"}}>
                            <Form.Check  value="" id="flexCheckDefault"/>
                        </td>
                        <td style={{textAlign: "center"}}>
                            <Form.Check  value="" id="flexCheckDefault"/>
                        </td>
                        <td style={{textAlign: "center"}}>
                            <Form.Check  value="" id="flexCheckDefault"/>
                        </td>
                    </tr>
                    <tr>
                        <td>OBJETIVOS DE APRENDIZAJE</td>
                        <td>Conocimiento de la Cultura ILU / Valores organizacionales y Código de Ética</td>
                        <td style={{textAlign: "center"}}>
                            <Form.Check  value="" id="flexCheckDefault"/>
                        </td>
                        <td style={{textAlign: "center"}}>
                            <Form.Check  value="" id="flexCheckDefault"/>
                        </td>
                        <td style={{textAlign: "center"}}>
                            <Form.Check  value="" id="flexCheckDefault"/>
                        </td>
                        <td style={{textAlign: "center"}}>
                            <Form.Check  value="" id="flexCheckDefault"/>
                        </td>
                    </tr>
                    <tr>
                        <td>OBJETIVOS DE APRENDIZAJE</td>
                        <td>Procesos de la Gerencia Financiera y procesos de Costos y Presupuestos.</td>
                        <td style={{textAlign: "center"}}>
                            <Form.Check  value="" id="flexCheckDefault"/>
                        </td>
                        <td style={{textAlign: "center"}}>
                            <Form.Check  value="" id="flexCheckDefault"/>
                        </td>
                        <td style={{textAlign: "center"}}>
                            <Form.Check  value="" id="flexCheckDefault"/>
                        </td>
                        <td style={{textAlign: "center"}}>
                            <Form.Check  value="" id="flexCheckDefault"/>
                        </td>
                    </tr>
                    </tbody>
                </Table>
                <br />
                <h5>Will</h5>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th scope="col">Aspectos conductuales</th>
                        <th scope="col">Descripción</th>
                        <th scope="col" style={{textAlign: "center"}}>No Cumple<br />0%</th>
                        <th scope="col" style={{textAlign: "center"}}>Cumple Parcialmente<br />50%</th>
                        <th scope="col" style={{textAlign: "center"}}>Cumple totalmente<br />100%</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>RESPONSABILIDAD</td>
                        <td>Cumple con su deber y responde a lo acordado.</td>
                        <td style={{textAlign: "center"}}>
                            <Form.Check value="" id="flexCheckDefault" />
                        </td>
                        <td style={{textAlign: "center"}}>
                            <Form.Check value="" id="flexCheckDefault" />
                        </td>
                        <td style={{textAlign: "center"}}>
                            <Form.Check value="" id="flexCheckDefault" />
                        </td>
                    </tr>
                    <tr>
                        <td>COMPROMISO</td>
                        <td>Es más que laborioso y va más allá de sus tareas para trascender.</td>
                        <td style={{textAlign: "center"}}>
                            <Form.Check value="" id="flexCheckDefault" />
                        </td>
                        <td style={{textAlign: "center"}}>
                            <Form.Check value="" id="flexCheckDefault" />
                        </td>
                        <td style={{textAlign: "center"}}>
                            <Form.Check value="" id="flexCheckDefault" />
                        </td>
                    </tr>
                    <tr>
                        <td>TRABAJO EN EQUIPO</td>
                        <td>Demuestra la unión de voluntades y el conocimiento compartido genera mejores soluciones.</td>
                        <td style={{textAlign: "center"}}>
                            <Form.Check  value="" id="flexCheckDefault" />
                        </td>
                        <td style={{textAlign: "center"}}>
                            <Form.Check  value="" id="flexCheckDefault" />
                        </td>
                        <td style={{textAlign: "center"}}>
                            <Form.Check  value="" id="flexCheckDefault" />
                        </td>
                    </tr>
                    </tbody>
                </Table>
                <br />
                <label for="exampleFormControlTextarea1" class="form-label">Puntos fuertes</label>
                <Form.Control as="textarea" rows={3} />
                <br />
                <label for="exampleFormControlTextarea1" class="form-label">Puntos a desarrollar</label>
                <Form.Control as="textarea" rows={3} />
                <br />
                <label for="exampleFormControlTextarea1" class="form-label">Comentarios del evaluador</label>
                <Form.Control as="textarea" rows={3} />
                <br />
                <label for="exampleFormControlTextarea1" class="form-label">Comentarios del evaluado</label>
                <Form.Control as="textarea" rows={3} />
                <br />
                <Button >Guardar</Button>
            </Form>
        </div>
    </Layout>
};

export default NuevaEvaluacion;