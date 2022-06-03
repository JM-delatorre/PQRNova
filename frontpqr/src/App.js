import VerPQR from './views/verPQR';
import FormularioPQR from './views/formularioPQR';
import { Routes, Route} from "react-router-dom";
import './App.css';


function App() {
  return (
    <div>
    
    <Routes>
      <Route path="/"  element={ <VerPQR /> }/>
      <Route  path="/formulario"  element = { <FormularioPQR /> }/>    
    </Routes>
    </div>
  );
}

export default App;
