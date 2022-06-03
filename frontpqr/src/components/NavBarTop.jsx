import { Navbar, NavbarBrand, Collapse, 
    NavbarToggler, NavItem,
    Nav
} from 'reactstrap';
import { Link} from "react-router-dom";
import React from "react";


class NavBarTop extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          isOpen: false,
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

   

    render(){

        return(
            <div  class = " shadow-lg p-1  rounded m-3 bg-warning">

                <Navbar  color="warning" expand="sm" fixed="" light>   
                    <NavbarBrand class= "text-dark">
                    <h3 >Nova</h3>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="me-auto"navbar>

                        <NavItem className='separador'>
                            <h6><Link  class = " text-white text-decoration-none" to="/">Ver PQR</Link></h6>
                        </NavItem>
                        
                        <NavItem className='separador'>
                        
                            <h6><Link class = "text-white text-decoration-none" to="/formulario">Hacer una PQR</Link></h6>
                        
                        </NavItem>
                    </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }


}

export default NavBarTop;