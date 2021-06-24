import axios from "axios";
import { ADD_CONTACT_FAIL, ADD_CONTACT_REQUEST, ADD_CONTACT_SUCCESS, CONTACT_LIST_FAIL, CONTACT_LIST_REQUEST, CONTACT_LIST_SUCCESS, DETAILS_CONTACT_FAIL, DETAILS_CONTACT_REQUEST, DETAILS_CONTACT_SUCCESS, REMOVE_CONTACT_FAIL, REMOVE_CONTACT_SUCCESS, UPDATE_CONTACT_FAIL, UPDATE_CONTACT_REQUEST, UPDATE_CONTACT_SUCCESS } from "../types"
import store from './../../store'

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
    dispatch({type:UPDATE_CONTACT_REQUEST,payload:{name,email}})
    try {
        const {data} =await axios.post(`/api/contact/edit/${id}`,{
            name,
            email
        });
        dispatch({type:UPDATE_CONTACT_SUCCESS,payload:{
            id:data._id,
            name:data.name,
            email:data.email
        }})
        
    } catch (error) {
        dispatch({type:UPDATE_CONTACT_FAIL,payload:error.message})
    }
}

export const addContact = (name,email) => async(dispatch)=>{
    // const contactItems = store.getState().Contacts.contactInfo.slice();
    dispatch({type:ADD_CONTACT_REQUEST,payload:{name,email}});
    try {
        const {data} = await axios.post('/api/contact/add',{name,email});
        dispatch({type:ADD_CONTACT_SUCCESS,payload:data});
        
    } catch (error) {
        dispatch({type:ADD_CONTACT_FAIL,payload:error.message})
    }
    
}

export const detailsContacts = (contactId) => async(dispatch)=>{
    dispatch({type:DETAILS_CONTACT_REQUEST,payload:contactId});
    try {
        const {data} =await axios.get(`/api/contact/${contactId}`);
        dispatch({type:DETAILS_CONTACT_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:DETAILS_CONTACT_FAIL,payload:error.message});
    }
}

export const deleteContact = (Id) => (dispatch)=>{
    
    
         const {data} = axios.delete(`/api/contact/delete/${Id}`);
        // const contactList = store.getState().Contacts.contactInfo.slice().filter(x => x._id !== Id);
        dispatch({type:REMOVE_CONTACT_SUCCESS,payload:Id});
        
   
}