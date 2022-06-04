import VerPQR from './views/verPQR';
import FormularioPQR from './views/formularioPQR';
import { Routes, Route} from "react-router-dom";
import './App.css';


function App() {
  return (
    <div>
    {/* Declaracion de las Rutas del proyecto */}
    <Routes>
      <Route path="/"  element={ <VerPQR /> }/>
      <Route  path="/formulario"  element = { <FormularioPQR /> }/>    
    </Routes>
    </div>
  );
}

export default App;
