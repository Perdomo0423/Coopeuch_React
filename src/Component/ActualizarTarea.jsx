import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FetchUpdate } from "../Redux/Action";

const ActualizarTarea = () => {
    const[identificador, identificadorChange] = useState(0);
    const[descripcion, descripcionChange] = useState('');
    const[fechaCreacion, fechaCreacionChange] = useState('');
    const[vigente, vigenteChange] = useState('true');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {code} = useParams();
    const taskObjec = useSelector((state) =>state.user.object)

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {identificador, descripcion, fechaCreacion, vigente};
        dispatch(FetchUpdate(obj));
        navigate('/listarTareas')
        console.log(obj);
    }

    useEffect(() =>{
        dispatch(FetchUpdate(code));
    }, []);

    useEffect(() =>{
        if(taskObjec){
            identificadorChange(taskObjec.identificador);
            descripcionChange(taskObjec.descripcion);
            fechaCreacionChange(taskObjec.fechaCreacion);
            vigenteChange(taskObjec.vigente);
        }
    }, [taskObjec]);

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
        <form onSubmit={handleSubmit}>
      <div className="card">
        <div className="card-header" style={{ textAlign: "center" }}>
          <h2>Añadir nueva tarea</h2>
        </div>
        <div className="card-body" style={{ textAlign: "left" }}>
          <div className="row">

          <div className="col-lg-12">
              <div className="form-group">
                <label>IDENTIFICADOR</label>
                <input 
                className="form-control" 
                disabled = "disabled"
                value={identificador} 
                onChange={e => identificadorChange (e.target.value)}
                validations={[required]}>
                </input>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <label>DESCRIPCION DE LA TAREA</label>
                <textarea 
                className="form-control" 
                value={descripcion} 
                onChange={e => descripcionChange (e.target.value)}
                rows="3" validations={[required]}>
                </textarea>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <label>FECHA DE CREACION</label>
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
                <label>ESTADO</label>
                <input 
                className="form-control" 
                value={vigente} 
                onChange={e => vigenteChange (e.target.value)}
                validations={[required]} />
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
  );
};

 
export default ActualizarTarea;