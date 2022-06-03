import React from "react";
import NavBarTop from "../components/NavBarTop";
import { APIGetPQRS } from '../apiServices/apiPQRS';
import "./verPQR.css";

class VerPQR extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
          pqrs: []
        };
    
        
      }

    getAllPQRS = async() =>{

        let PQall = await APIGetPQRS()
        this.setState({pqrs: PQall})
    }

    componentDidMount(){
        this.getAllPQRS()
        
    }

    render(){

        return(
            <div className="contenedor">

                
                <NavBarTop/>


                <div className="insideBox" >
                    <div class ="shadow-lg p-1 rounded m-3 h-100">
                    <h1>Hola este es verPQR</h1>
                    <p class = "text-wrap">{JSON.stringify( this.state.pqrs )}</p>
                    </div>
                </div>
                
            </div>

        )
    }



}

export default VerPQR;