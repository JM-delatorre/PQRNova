import React from "react";
import { Button, Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import NavBarTop from "../components/NavBarTop";

class FormularioPQR extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            telefono: 0,
            correo: '',
            tipoPublicacion: '',
            contenido: '',
            validate: {
                emailState: '',
                nameState: '',
                contenidoState: '',
            },
        };
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange = (event) => {
        const { target } = event;
        const value = target.value;
        const { name } = target;
    
        this.setState({
          [name]: value,
        });
      };

    validateEmail(e) {
        const emailRex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        const { validate } = this.state;
    
        if (emailRex.test(e.target.value)) {
          validate.emailState = 'has-success';
        } else {
          validate.emailState = 'has-danger';
        }
    
        this.setState({ validate });
      }
    
      validateNombre(e) {
        const { validate } = this.state;
    
        if (e.target.value !== "") {
          validate.nameState = 'has-success';
        } else {
          validate.nameState = 'has-danger';
        }
    
        this.setState({ validate });
      }

      validateSugerencia(e){
        const { validate } = this.state;
        
        if (e.target.value !== "" && e.target.value.split(" ").length >= 10) {
          validate.contenidoState = 'has-success';
        } else {
          validate.contenidoState = 'has-danger';
        }
    
        this.setState({ validate });

      }

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
                            <Input name="nombre" 
                            valid={this.state.validate.nameState === "has-success"}
                            invalid={this.state.validate.nameState === "has-danger"}
                            onChange={(e) => {
                                this.handleChange(e)
                                this.validateNombre(e)
                            }}/>
                            <FormFeedback>
                                Por favor ingresa tu nombre
                            </FormFeedback>
                            <FormFeedback valid>
                                Todo correcto con tu nombre :D
                            </FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label>
                               Telefono o Celular
                            </Label>
                            <Input  name="telefono" type="number" onChange={(e) => {this.handleChange(e)}}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Correo electronico
                            </Label>
                            <Input name="correo" 
                            valid={this.state.validate.emailState === "has-success"}
                            invalid={this.state.validate.emailState === "has-danger"}
                            onChange={(e) => {
                                this.handleChange(e)
                                this.validateEmail(e)
                            }}/>
                            <FormFeedback>
                                Parece que el correo que ingresaste no es valido
                            </FormFeedback>
                            <FormFeedback valid>
                                Todo correcto con tu correo  :D
                            </FormFeedback>
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
                            <Input type="textarea"  name="contenido" 
                            valid={this.state.validate.contenidoState === "has-success"}
                            invalid={this.state.validate.contenidoState === "has-danger"}
                            onChange={(e) => {
                                this.handleChange(e)
                                this.validateSugerencia(e)
                            }}/>
                            <FormFeedback>
                                Tu peticion es muy breve, por favor se mas especifico 
                            </FormFeedback>
                            <FormFeedback valid>
                                Todo correcto con tu peticion
                            </FormFeedback>
                            
                        </FormGroup>
                        <Button color="warning" size = "lg" onClick={() => {
                            console.log(this.state.nombre, this.state.telefono, this.state.correo, this.state.tipoPublicacion, this.state.contenido)
                            }}>
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