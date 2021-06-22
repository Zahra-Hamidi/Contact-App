import { ADD_CONTACT_FAIL, ADD_CONTACT_REQUEST, ADD_CONTACT_SUCCESS, CONTACT_LIST_FAIL, CONTACT_LIST_REQUEST, CONTACT_LIST_SUCCESS, DETAILS_CONTACT_FAIL, DETAILS_CONTACT_REQUEST, DETAILS_CONTACT_SUCCESS, REMOVE_CONTACT_FAIL, REMOVE_CONTACT_SUCCESS, UPDATE_CONTACT_FAIL, UPDATE_CONTACT_REQUEST, UPDATE_CONTACT_RESET, UPDATE_CONTACT_SUCCESS } from "../types";

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
export const updateContactReducer = (state={},action)=>{
    switch(action.type){
        case UPDATE_CONTACT_REQUEST:
            return{loading:true};
        case UPDATE_CONTACT_SUCCESS:
            return {loading:false,updateContact:action.payload};
        case UPDATE_CONTACT_FAIL:
            return{loading:false};
        case UPDATE_CONTACT_RESET:
            return {};            
        default : return state;    
    }
}

export const detailsContactReducer = (state={},action)=>{
    switch(action.type){
        case DETAILS_CONTACT_REQUEST:
            return{loading:true};
        case DETAILS_CONTACT_SUCCESS:
            return {loading:false,detailContact:action.payload};
        case DETAILS_CONTACT_FAIL:
            return{loading:false,error:action.payload};        
        default : return state;    
    }
}

export const deleteContactReducer = (state={},action)=>{
    switch(action.type){
        case REMOVE_CONTACT_SUCCESS:
            return{contact:action.payload};
        case REMOVE_CONTACT_FAIL:
            return { error: action.payload};    
        default:return state;    
    }
}