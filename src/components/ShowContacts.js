import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { contactList } from '../redux/actions/contactActions';


const ShowContacts = () => {
    const Contacts = useSelector(state => state.Contacts);
    const {loading , contactInfo , error} = Contacts;
    const dispatch = useDispatch();
    const history = useHistory();
    
   

    useEffect(()=>{
        dispatch(contactList());
    },[dispatch]);

    const handleClick = (e)=>{
        e.preventDefault();
        history.push('/add');
    }
    return (
      <>
      {
          loading ? <div>Loading...</div> :
          error ? <div>{error}</div>
          :
      
            <div className="container">
            
                <div className="d-flex p-5 justify-content-end">
                    <button className="btn btn-outline-secondary" onClick={handleClick}>Add Contact</button>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <table className="table table-bordered table-sm">
                        <thead className="text-center">
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contactInfo.map(contact=>(
                                    <tr>
                                        <td>{contact._id}</td>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td className="d-flex">
                                            <button type="button" className="btn btn-primary btn-sm mx-2" onClick={()=>{
                                                history.push(`/update/${contact._id}`)
                                            }}>Edit</button>
                                            <button type="button" className="btn btn-danger btn-sm">Remove</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
              
            </div>
        }
      </>
    )
}

export default ShowContacts
