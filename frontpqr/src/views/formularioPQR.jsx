import React from "react";
import { Button, Form, FormFeedback, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from "reactstrap";
import NavBarTop from "../components/NavBarTop";

class FormularioPQR extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isModalErrOpen: false,
            isModalCorrOpen: false,
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
        this.toggleError = this.toggleError.bind(this);
        this.toggleCorrect = this.toggleCorrect.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        
      }

    onValueChange(event) {
        this.setState({
            tipoPublicacion: event.target.value
        });
    }

    toggleError() {
        
        this.setState({isModalErrOpen: !(this.state.isModalErrOpen)});
        

    }
    toggleCorrect() {
        
        this.setState({isModalCorrOpen: !(this.state.isModalCorrOpen)});
        

    }

    validateForm= () => {
        
        if (this.state.nombre == '' || this.state.validate.nameState == 'has-danger'){
            const { validate } = this.state;
            validate.nameState = 'has-danger';
            this.setState({ validate });
            this.toggleError()
        }else if (this.state.correo == '' || this.state.validate.emailState == 'has-danger'){
            const { validate } = this.state;
            validate.emailState = 'has-danger';
            this.setState({ validate });
            this.toggleError()
        }else if (this.state.contenido == '' || this.state.validate.contenidoState == 'has-danger'){
            const { validate } = this.state;
            validate.nameState = 'has-danger';
            this.setState({ validate });
            this.toggleError()
        }else if(this.state.tipoPublicacion == ''){
            this.toggleError()
        }else{
            
            this.toggleCorrect()
        }
        
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
                    <div class ="shadow-lg p-3 rounded m-3 h-101">
                    <h1>PQR</h1>
                    <Form>
                        <FormGroup>
                            <Label>
                                Nombre Completo *
                            </Label>
                            <Input name="nombre" 
                            value={this.state.nombre}
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
                            <Input  name="telefono" type="number" value={this.state.telefono}onChange={(e) => {this.handleChange(e)}}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Correo electronico *
                            </Label>
                            <Input name="correo" 
                            value={this.state.correo}
                            valid={this.state.validate.emailState === "has-success"}
                            invalid={this.state.validate.emailState === "has-danger"}
                            onChange={(e) => {
                                this.handleChange(e)
                                this.validateEmail(e)
                            }}/>
                            <FormFeedback>
                                Parece que hay algo mal con tu correo
                            </FormFeedback>
                            <FormFeedback valid>
                                Todo correcto con tu correo  :D
                            </FormFeedback>
                        </FormGroup>
                        <FormGroup tag="fieldset" >
                            <Label>
                            Escoje una opcion *
                            </Label>
                            <FormGroup check>
                                
                            <Input
                                name="radio1"
                                type="radio"
                                value = "Queja"
                                
                                
                                checked={this.state.tipoPublicacion === "Queja"}
                                onChange={this.onValueChange}
                            />
                            {' '}
                            <Label check>
                                Queja
                            </Label>

                            
                            </FormGroup>
                            <FormGroup check>
                            <Input 
                                name="radio1" 
                                type="radio"
                                value = "Sugerencia"
                                
                                
                                checked={this.state.tipoPublicacion === "Sugerencia"}
                                onChange={this.onValueChange}/>
                            {' '}
                            <Label check>
                                Sugerencia
                            </Label>
                            
                            </FormGroup>

                            
                            
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Escriba sus sugerencias o comentarios *
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
                            this.validateForm()
                            }}>
                            Enviar
                        </Button>
                        <p><i>Los campos marcados con * son obligatorios</i></p>
                    </Form>
                    
                    </div>
                </div>


                <Modal  isOpen={this.state.isModalErrOpen} toggle={this.toggleError} >
                    <ModalHeader className = "miModalError">
                        Error
                    </ModalHeader>
                    <ModalBody>
                        Por Favor completa los campos 
                    </ModalBody>
                </Modal>
                
                <Modal  isOpen={this.state.isModalCorrOpen} toggle={this.toggleCorrect} >
                    <ModalHeader className = "miModalCorrecto">
                        Hemos guardado tu peticion
                    </ModalHeader>
                    <ModalBody>
                        Gracias por su franqueza al
                        manifestarnos sus quejas o sugerencias, seguiremos esforzándonos por
                        mejorar cada día nuestros procesos internos
                    </ModalBody>
                </Modal>
            </div>
            


        )
    }



}

export default FormularioPQR;