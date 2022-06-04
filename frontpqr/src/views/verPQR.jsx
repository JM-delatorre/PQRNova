import React from "react";
import NavBarTop from "../components/NavBarTop";
import { APIGetPQRS } from '../apiServices/apiPQRS';
import "./verPQR.css";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

class VerPQR extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
          pqrs: [],
          pqrsCompleto:[],
          modal: false,
          actualPQRS: [],
          verTodos: true,
          verQuejas: false,
          verSugerencias: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    toggle() {
        
        this.setState({modal: !(this.state.modal)});
    }
    
    cargarDatos = (lista) =>{
        this.toggle()
        this.setState({actualPQRS: lista})


    }

    getAllPQRS = async() =>{

        let PQall = await APIGetPQRS()
        this.setState({pqrs: PQall})
        this.setState({pqrsCompleto: PQall})
    }

    filtrarQuejas = () => {
        this.setState({verTodos: false})
        this.setState({verSugerencias: false})
        this.setState({verQuejas: true})
        
        let nuevoArray = this.state.pqrsCompleto.filter((peticion) => {
            return peticion.tipoPublicacion === "Queja"
        })
        this.setState({pqrs: nuevoArray})
    }
    filtrarSugerencias = () => {
        this.setState({verTodos: false})
        this.setState({verSugerencias: true})
        this.setState({verQuejas: false})
        let nuevoArray = this.state.pqrsCompleto.filter((peticion) => {
            return peticion.tipoPublicacion === "Sugerencia"
        })
        this.setState({pqrs: nuevoArray})
    }
    componentDidMount(){
        this.getAllPQRS()
    }

   

    timeConverter = (UNIX_timestamp) =>{
        var a = new Date(UNIX_timestamp);
        var months = ['Enero','Febrero','Marzo','April','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre '];
        var year = a.getUTCFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
       
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min  ;
        return time;
      }

    render(){

        return(
            <div className="contenedor">

                
                <NavBarTop/>


                <div className="insideBox" >
                    <div class ="shadow-lg p-3 rounded m-3 h-100">
                    <div class= "p-2 d-flex justify-content-center gap-5">
                        <Button color="warning" outline size="lg"active = {this.state.verQuejas} onClick={this.filtrarQuejas}>Ver Quejas</Button>
                        <Button color="warning" outline size="lg" active = {this.state.verSugerencias} onClick={this.filtrarSugerencias}>Ver Sugerencias</Button>
                        <Button color="warning" outline size="lg" active = {this.state.verTodos} onClick= {()=> {
                            this.getAllPQRS()
                            this.setState({
                                verTodos: true,
                                verQuejas: false,
                                verSugerencias: false
                            })
                        }}>Ver Todos</Button>
                    </div>
                    <div className="scroller">
                            
                            {this.state.pqrs.map((it) => (
                                <div class = "shadow-lg rounded-4 m-3 p-1  d-flex flex-wrap gap-3 " key={it.id}>
                                    <div class = "border-end border-warning pe-3 w-25">
                                        <h6>Fecha: </h6>
                                        <p>{this.timeConverter(it.fecha)}</p>
                                    </div>
                                    <div class = "border-end border-warning pe-3 w-25 ">
                                        <h6>Nombre: </h6>
                                        <p class = "text-wrap">{it.nombre}</p>
                                    </div>
                                    <div class = "border-end border-warning pe-3 w-25">
                                        <h6>Tipo Publicacion: </h6>
                                        <p>{it.tipoPublicacion}</p>
                                    </div>
                                    <div  class="m-2 align-self-end">
                                        <Button color="primary" size = "lg" outline onClick={() => this.cargarDatos([it.nombre,it.telefono,it.correo, it.tipoPublicacion,it.contenido, it.fecha])}>
                                            Ver Mas
                                        </Button>
                                    </div>

                                    
                                </div>
                            ))}
                        
                    </div>
                    
                    </div>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} >
                    <ModalHeader>
                        Informacion del Egresado
                    </ModalHeader>
                    <ModalBody>
                        <div class="vstack gap-3">
                            <div >
                                <h4>Nombre:</h4>
                                <h6>{this.state.actualPQRS[0]}</h6>
                            </div>
                            <div >
                                <h4>Telefono:</h4>
                                <h6>{this.state.actualPQRS[1]}</h6>
                            </div>
                            <div >
                                <h4>Correo:</h4>
                                <h6>{this.state.actualPQRS[2]}</h6>
                            </div>
                            
                            <div >
                                <h4>Tipo de Publicacion:</h4>
                                <h6>{this.state.actualPQRS[3]}</h6>
                            </div>    
                            <div >
                                <h4>Contenido:</h4>
                                <div class= "text-wrap">
                                    {this.state.actualPQRS[4]}
                                </div>
                                
                            </div>
                        </div>
                                
                    </ModalBody>
                    <ModalFooter>
                        Fecha: {this.timeConverter(this.state.actualPQRS[5])}
                    </ModalFooter>
                </Modal>
                
            </div>

        )
    }



}

export default VerPQR;