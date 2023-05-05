import { useEffect } from "react";
import { FetchList, FetchDelete } from "../Redux/Action";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import'./Estilos.css'
import { toast } from "react-toastify";

const Listartarea = (props) => {
    useEffect(() => {
        props.loaduser();
    }, [])

    const navigate = useNavigate();

    const handledelete = (code) =>{
        if(window.confirm('Seguro que deseas eliminar está tarea?')){
            props.fetchDelete(code);
            props.loaduser();
            toast.success('Tarea Eliminada con exito')
            navigate('/listarTareas')
        }
    }
    return ( 
        //props.user.loading?<div><h2>Cargando...</h2></div>:
        props.user.errmessage?<div><h2>{props.user.errmessage}</h2></div>:
        <div>
            <div className="card">
               <h2>Lista de tareas</h2>
                <div className="card-header">
                    
                    <Link to={'/crearTareas'} className="btn btn-success">Añadir Nueva Tarea [+]</Link>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>Identificador</td>
                                <td>Descripcion de la Tarea</td>
                                <td>Fecha de Creacion</td>
                                <td>Estado</td>
                                <td>Accion</td>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    props.user.list && props.user.list.map(item =>
                                        <tr key={item.identificador}>
                                            <td>{item.identificador}</td>
                                            <td>{item.descripcion}</td>
                                            <td>{item.fechaCreacion}</td>
                                            <td>{item.vigente}</td>
                                            <td>
                                                <Link to={'/actualizarTareas/'+item.identificador} className="btn btn-primary">Actualizar</Link>
                                                <button onClick={() =>{handledelete(item.identificador)}}className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>)
                                }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
     );
}

const mapStateToProps = (state) =>{
    return{
        user:state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        loaduser:() =>dispatch(FetchList()),
        fetchDelete:(code) => dispatch(FetchDelete(code))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Listartarea);