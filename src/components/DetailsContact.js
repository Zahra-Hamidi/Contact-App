import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { detailsContacts, editContact } from '../redux/actions/contactActions';
import { UPDATE_CONTACT_RESET } from '../redux/types';

const DetailsContact = (props) => {

    const id = props.match.params.id;
    const detailsContact = useSelector(state => state.detailsContact);
    const {loading,detailContact,error} = detailsContact;
    const dispatch = useDispatch();
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const history = useHistory();
    
    
    useEffect(() => {
        if (!detailContact) {
                     dispatch({type:UPDATE_CONTACT_RESET})
                    dispatch(detailsContacts(id)) 
                } else {
 
                    setName(detailContact.name);
                    setEmail(detailContact.email);
                }
       
       
                
    }, [dispatch,detailContact]);
  

    const submitHandler = (e)=>{
         e.preventDefault();
        dispatch(editContact(id,name,email));
        history.push('/');
    }
    return (
      <>
      
        <div className="w-50 mx-auto  shadow border-1 my-5 p-2">
            <form className="was-validated m-2" onSubmit={submitHandler}>
                {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
                <div className="form-group my-2">
                    <lable htmlFor="name">Name:</lable>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" required
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    ></input>
                     <div class="valid-feedback">Valid.</div>
                     <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-group my-2">
                    <lable htmlFor="email">Email:</lable>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" required
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    ></input>
                     <div class="valid-feedback">Valid.</div>
                     <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <button type="submit" class="btn btn-primary w-100">Upadate</button>
            </form>
            {/* {console.log(detailContact)} */}
        </div>
       </>
    )
}

export default DetailsContact
