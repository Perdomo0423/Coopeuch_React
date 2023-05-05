import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Listartarea from './Component/Listartarea';
import CrearTarea from './Component/CrearTarea';
import ActualizarTarea from './Component/ActualizarTarea';
import Home from './Component/Home';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Store from './Redux/Store';

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <BrowserRouter>
        <div className='header'>
            <Link className = "btn btn-primary" to={'/listarTareas'}>Lista de Tareas</Link>
            <div className='regresar'>
            <Link className = "btn btn-warning" to={'/'}>Inicio</Link>
            </div>
            <h3 className='marca'>COOPERATIVA COOPEUCH</h3>  
        </div>
        <Routes>
            <Route path='/' element = {<Home></Home>}></Route>
            <Route path='/listarTareas' element = {<Listartarea></Listartarea>}></Route>
            <Route path='/crearTareas' element = {<CrearTarea></CrearTarea>}></Route>
            <Route path='/actualizarTareas/:code' element = {<ActualizarTarea></ActualizarTarea>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer>

      </ToastContainer>
    </div>
    </Provider>
  );
}

export default App;
