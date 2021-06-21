import { ADD_CONTACT_FAIL, ADD_CONTACT_REQUEST, ADD_CONTACT_SUCCESS, CONTACT_LIST_FAIL, CONTACT_LIST_REQUEST, CONTACT_LIST_SUCCESS } from "../types";

export const contactReducer = (state={loading:true,contactInfo:[]},action)=>{
    switch(action.type){
        case CONTACT_LIST_REQUEST:
            return{loading:true};
        case CONTACT_LIST_SUCCESS:
            return{loading:false,contactInfo:action.payload};
        case CONTACT_LIST_FAIL:
            return{loading:false,error:action.payload};        
         default: return state;   
    }
}
export const addContactReducer = (state={},action)=>{
    switch(action.type){
        case ADD_CONTACT_REQUEST:
            return{loading:true};
        case ADD_CONTACT_SUCCESS:
            return{loading:false,contact:action.payload};
        case ADD_CONTACT_FAIL:
            return {loading:false,error:action.payload};       
        default: return state;    
    }
}