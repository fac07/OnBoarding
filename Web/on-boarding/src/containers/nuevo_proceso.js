import React from 'react';
import Layout from './layout';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const NuevoProceso = () => {

    return <Layout>
        <h3>
            Nuevo proceso
        </h3>
        <br />
        <div className="formContainerSM">
            <Form>
                <div class="form-group">
                    <Form.Label for="CodigoColaborador">Código colaborador</Form.Label>
                    <Form.Control type="number" class="form-control" placeholder="Código colaborador" />
                </div>
                <div class="form-group">
                    <Form.Label for="NombreColaborador">Nombre colaborador</Form.Label>
                    <Form.Control type="text" class="form-control" placeholder="Nombre colaborador" disabled />
                </div>
                <div class="form-group">
                    <Form.Label for="Puesto">Puesto</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Seleccione un puesto...</option>
                        <option>Puesto 1</option>
                        <option>Puesto 2</option>
                        <option>Puesto 3</option>
                    </Form.Select>
                </div>
                <br />
                <Button >Crear</Button>
            </Form>
        </div>
    </Layout>
};

export default NuevoProceso;