import { CREATE_LIST, DELETE_LIST, FAIL_REQUEST, GET_LIST, MAKE_REQUEST, OBJECT_LIST, UPDATE_LIST } from "./ActionType"

const initialstate = {
    loading: true,
    list:[],
    object:{},
    errmessage:''
}

export const  Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FAIL_REQUEST:
            return{
                ...state,
                loading: false,
                errmessage: action.payload
            }
        case GET_LIST:
            return{
                ...state,
                errmessage: '',
                list: action.payload,
                object:{}
            }
        case DELETE_LIST:
            return{
                ...state,
                loading: false
            }
        
        case CREATE_LIST:
            return{
                ...state,
                loading:false
            }
        
        case UPDATE_LIST:
                return{
                    ...state,
                    loading:false
                }
        
                case OBJECT_LIST:
                    return{
                        ...state,
                        loading:false,
                        object:action.payload
                    }
        default: 
            return state;
    }
}