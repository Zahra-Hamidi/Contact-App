import { ADD_CONTACT_SUCCESS, CONTACT_LIST_SUCCESS, DETAILS_CONTACT_FAIL, DETAILS_CONTACT_REQUEST, DETAILS_CONTACT_SUCCESS, REMOVE_CONTACT_FAIL, REMOVE_CONTACT_SUCCESS, UPDATE_CONTACT_SUCCESS } from "../types";

export const contactReducer = (state={contactInfo:[]},action)=>{
    switch(action.type){
        
        case CONTACT_LIST_SUCCESS:
            return{contactInfo:action.payload};
            case ADD_CONTACT_SUCCESS:
                return{...state,contactInfo:[...state.contactInfo,action.payload]};              
            case REMOVE_CONTACT_SUCCESS:
                return{...state,contactInfo:state.contactInfo.filter(x => x._id !== action.payload)};
                case UPDATE_CONTACT_SUCCESS:
                     
                    return {contactInfo:state.contactInfo.map(x => x._id === action.payload.id)};                  
         default: return state;   
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

