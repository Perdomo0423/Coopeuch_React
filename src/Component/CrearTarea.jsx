import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FetchCreate } from "../Redux/Action";
import'./Estilos.css'

const CrearTarea = () => {

    const[descripcion, descripcionChange] = useState('');
    const[fechaCreacion, fechaCreacionChange] = useState('');
    const[vigente, vigenteChange] = useState('true');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {descripcion, fechaCreacion, vigente};
        dispatch(FetchCreate(obj));
        navigate('/listarTareas')
        console.log(obj);
    }

    const required = value => {
        if (!value) {
            return (
                <div className="alert alert-danger" role="alert" id="login_alerterror">
                    ¡Este campo es obligatorio!
                </div>
            )
        }
    };

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
      <div className="card">
        <div className="card-header" style={{ textAlign: "center" }}>
          <h2>Añadir nueva tarea</h2>
        </div>
        <div className="card-body" style={{ textAlign: "left" }}>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <label>Descripcion de la tarea</label>
                <textarea 
                className="form-control" 
                value={descripcion} 
                onChange={e => descripcionChange (e.target.value)}
                rows="3" 
                validations={[required]}>
                </textarea>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <label>fecha de creacion</label>
                <input 
                className="form-control" 
                value={fechaCreacion} 
                onChange={e => fechaCreacionChange (e.target.value)}
                type="datetime-local" 
                validations={[required]}/>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <label>Estado</label>
                <select
                className="form-control" 
                value={vigente} 
                onChange={e => vigenteChange (e.target.value)}
                validations={[required]}>
                <option>true</option>
                <option>false</option>
                </select> 
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary" type="submit">Ingresar</button>
          <Link className="btn btn-danger" to={"/listarTareas"}>
            Regresar
          </Link>
        </div>
      </div>
      </form>
      </div>
    </div>
  );
};

export default CrearTarea;
