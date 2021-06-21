import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addContact } from '../redux/actions/contactActions';




const AddContact = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const Contact = useSelector(state => state.addContact);
    const {loading,contact,error} = Contact;

    // const addClickHandler = (e)=>{
    //     e.preventDefault();
    //     history.push('/');
    // }

    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(addContact(name,email));
        history.push('/');
    }

    return (
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
                <button type="submit" class="btn btn-primary w-100">Add</button>
            </form>
        </div>
    )
}

export default AddContact
