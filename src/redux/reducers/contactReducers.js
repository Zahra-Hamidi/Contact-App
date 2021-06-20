import { CONTACT_LIST_FAIL, CONTACT_LIST_REQUEST, CONTACT_LIST_SUCCESS } from "../types";

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