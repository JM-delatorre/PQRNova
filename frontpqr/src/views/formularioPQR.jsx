import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import NavBarTop from "../components/NavBarTop";

class FormularioPQR extends React.Component{

    
    render(){

        return(
            <div className="contenedor">

                
                <NavBarTop/>


                <div className="insideBox" >
                    <div class ="shadow-lg p-3 rounded m-3 h-100">
                    <h1>PQR</h1>
                    <Form>
                        <FormGroup>
                            <Label>
                                Nombre Completo
                            </Label>
                            <Input />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                               Telefono o Celular
                            </Label>
                            <Input  type="number" />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Correo electronico
                            </Label>
                            <Input />
                        </FormGroup>
                        <FormGroup tag="fieldset">
                            <legend>
                            Radio Buttons
                            </legend>
                            <FormGroup check>
                            <Input
                                name="radio1"
                                type="radio"
                            />
                            {' '}
                            <Label check>
                                Queja
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Input name="radio1" type="radio"/>
                            {' '}
                            <Label check>
                                Sugerencia
                            </Label>
                            </FormGroup>
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Escriba sus sugerencias o comentarios
                            </Label>
                            <Input type="textarea" />
                        </FormGroup>
                        <Button color="warning" size = "lg">
                            Enviar
                        </Button>
                    </Form>
                    
                    </div>
                </div>
                
            </div>
            


        )
    }



}

export default FormularioPQR;