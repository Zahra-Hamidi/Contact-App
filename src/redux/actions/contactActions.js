import axios from "axios";
import { CONTACT_LIST_FAIL, CONTACT_LIST_REQUEST, CONTACT_LIST_SUCCESS } from "../types"

export const contactList = () => async(dispatch)=>{
    dispatch({type:CONTACT_LIST_REQUEST});
    try {
        const {data} = await axios.get('/api/contact');
        dispatch({type:CONTACT_LIST_SUCCESS, payload:data});
    } catch (error) {
        dispatch({type:CONTACT_LIST_FAIL,payload:error.message});
    }
}