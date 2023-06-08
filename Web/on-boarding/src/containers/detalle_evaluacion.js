import React from 'react';
import Layout from './layout';
import Table from 'react-bootstrap/Table';


const DetalleEvaluacion = () => {

    return <Layout>
        <div className='formContainerSM'>
        <Table bordered>
            <tbody>
                <tr>
                    <td colspan="5" className="tituloResultado" style={{textAlign: 'center'}}>Evaluación 1</td>
                </tr>
                <tr>
                    <td colspan="5" style={{textAlign: 'center'}}>Matriz de coaching</td>
                </tr>
                <tr>
                    <td style={{width: '230px'}}>
                        <h6>Colaborador</h6><br />
                        Juan Perez
                    </td>
                    <td style={{width: '230px'}}>
                        <h6>Departamento</h6><br />
                        
                    </td>
                    <td></td>
                    <td style={{width: '230px'}}>
                        <h6>Fecha de evaluación</h6><br />
                        07-06-2023
                    </td>
                    <td style={{width: '230px'}}>
                        <h6>Jefe inmediato</h6><br />
                        Ing.
                    </td>
                </tr>
                <tr>
                    <td colspan="2" className="tituloResultado">Entrenar</td>
                    <td></td>
                    <td colspan="2" className="tituloResultado">Onboarding</td>
                </tr>
                <tr>
                    <td colspan="2" className="textoBlanco" style={{height: '200px'}}>Entrenar</td>
                    <td></td>
                    <td colspan="2" className="textoBlanco resultado">Onboarding</td>
                </tr>
                <tr>
                    <td colspan="2" className="tituloResultado">Desvincular</td>
                    <td></td>
                    <td colspan="2" className="tituloResultado">Dar Acompañamiento</td>
                </tr>
                <tr>
                    <td colspan="2" className="textoBlanco" style={{height: '200px'}}>Desvincular</td>
                    <td></td>
                    <td colspan="2" className="textoBlanco">Dar Acompañamiento</td>
                </tr>
                <tr>
                    <td colspan="5" style={{textAlign: 'center', fontSize: '20px'}}>Técnico</td>
                </tr>
                <tr>
                    <td colspan="2" className="tituloResultado">PUNTOS FUERTES:</td>
                    <td></td>
                    <td colspan="2" className="tituloResultado">PUNTOS A DESARROLLAR:</td>
                </tr>
                <tr>
                    <td colspan="2" className="textoBlanco" style={{height: '150px'}}></td>
                    <td></td>
                    <td colspan="2" className="textoBlanco"></td>
                </tr>
                <tr>
                    <td colspan="2" className="tituloResultado">COMENTARIOS DEL EVALUADOR</td>
                    <td></td>
                    <td colspan="2" className="tituloResultado">COMENTARIOS DEL EVALUADO:</td>
                </tr>
                <tr>
                    <td colspan="2" className="textoBlanco" style={{height: '150px'}}></td>
                    <td></td>
                    <td colspan="2" className="textoBlanco"></td>
                </tr>
            </tbody>
        </Table>
        </div>
    </Layout>
};

export default DetalleEvaluacion;