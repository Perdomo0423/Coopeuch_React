import { CREATE_LIST, DELETE_LIST, FAIL_REQUEST, GET_LIST, MAKE_REQUEST, OBJECT_LIST, UPDATE_LIST } from "./ActionType"

import env from '../env.json';
import axios from "axios";
import { toast } from "react-toastify";

export const makeRequest = () => {
    return{
        type: MAKE_REQUEST
    }
}

export const fielRequest = (err) =>{
    return{
        type: FAIL_REQUEST,
        payload:err
    }
}

export const getListRequest = (data) =>{
    return{
        type: GET_LIST,
        payload:data
    }
}

export const deleteListRequest = (data) =>{
    return{
        type: DELETE_LIST
    }
}

export const createListRequest = (data) =>{
    return{
        type: CREATE_LIST
    }
}

export const updateListRequest = (data) =>{
    return{
        type: UPDATE_LIST
    }
}

export const getObjListRequest = (data) =>{
    return{
        type: OBJECT_LIST,
        payload:data
    }
}

export const FetchList = () => {
    return(dispatch) => {
        dispatch(makeRequest());
        //setTimeout(() => {
            axios.get(`${env.host}/listarTareas`).then(res=>{
                const tareasList = res.data;
                dispatch(getListRequest(tareasList));
            }).catch(err=>{
                dispatch(fielRequest(err.message))
            })
       // },2000);
    }
}

export const FetchDelete = (code) => {
    return(dispatch) => {
        dispatch(makeRequest());
        //setTimeout(() => {
            axios.delete(`${env.host}/eliminarTareas/`+code).then(res=>{
                dispatch(deleteListRequest());
            }).catch(err=>{
                dispatch(fielRequest(err.message))
            })
       // },2000);
    }
}

export const FetchCreate = (data) => {
    return(dispatch) => {

        dispatch(makeRequest());
        //setTimeout(() => {
            axios.post(`${env.host}/crearTareas`,data).then(res=>{
                dispatch(createListRequest());
                toast.success('Tareas creada con exito')
            }).catch(err=>{
                dispatch(fielRequest(err.message))
            })
       // },2000);
    }
}

export const FetchUpdate = (data,code) => {
    return(dispatch) => {

        dispatch(makeRequest());
        //setTimeout(() => {
            axios.put(`${env.host}/actualizarTareas/`+code, data).then(res=>{
                dispatch(updateListRequest());
                toast.success('Tareas actualizada con exito')
            }).catch(err=>{
                dispatch(fielRequest(err.message))
            })
       // },2000);
    }
}

export const FetchListObje = (code) => {
    return(dispatch) => {
        dispatch(makeRequest());
        //setTimeout(() => {
            axios.get(`${env.host}/listarTareas/`+code).then(res=>{
                const tareasList = res.data;
                dispatch(getObjListRequest(tareasList));
            }).catch(err=>{
                dispatch(fielRequest(err.message))
            })
       // },2000);
    }
}