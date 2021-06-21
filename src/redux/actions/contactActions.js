import axios from "axios";
import { ADD_CONTACT_FAIL, ADD_CONTACT_REQUEST, ADD_CONTACT_SUCCESS, CONTACT_LIST_FAIL, CONTACT_LIST_REQUEST, CONTACT_LIST_SUCCESS } from "../types"

export const contactList = () => async(dispatch)=>{
    dispatch({type:CONTACT_LIST_REQUEST});
    try {
        const {data} = await axios.get('/api/contact');
        dispatch({type:CONTACT_LIST_SUCCESS, payload:data});
    } catch (error) {
        dispatch({type:CONTACT_LIST_FAIL,payload:error.message});
    }
}

export const editContact = (id,name,email) => async(dispatch)=>{
    
    try {
        const {data} = axios.post(`/api/contact/edit/${id}`,{
            name,
            email
        });
        
    } catch (error) {
        
    }
}

export const addContact = (name,email) => async(dispatch)=>{
    dispatch({type:ADD_CONTACT_REQUEST,payload:{name,email}});
    try {
        const {data} = axios.post('/api/contact/add',{name,email});
        dispatch({type:ADD_CONTACT_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:ADD_CONTACT_FAIL,payload:error.message})
    }
}