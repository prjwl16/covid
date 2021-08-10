/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { addPatient } from '../ApiCalls'

import Base from '../base'

const AddPatient =()=>{
    const [patient, setPatient] = useState({
        name:"as",
        lastname:"ds",
        email:"abc@gmail.com",
        phone:"9527893514",
        status:"Positive",
    })
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const {name,lastname,email,phone,status}=patient

    const handleChange=name=>event=>{
        setPatient({...patient, [name]:event.target.value})
    }
    const handleSubmit=async event=>{
        event.preventDefault()
        const chk=/^\d{10}$/

        if (phone.match(chk))
        {
            addPatient(patient)
            .then(result =>{
                if(result.error){
                    setError(result.error)
                }
                else{
                    setSuccess(true)
                }
            } )
            .catch(error => console.log('error', error));
        }else{
            alert("Enter Valide Phone Number")
        }
    }

    const ShowMessage=()=>{
        if(error){
            alert("NOT able to Add patient Try filling all the fields")
            setError(false)
        } 
        if(success){
            alert("Patient Data Added successfully")
            setPatient({
                name:"",
                lastname:"",
                email:"",
                phone:"",
                status:"",
            })
            setSuccess(false)
        }
    }

    const addForm=()=>{
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form action="">
                        <div className="form-group">
                            <label className="text-light">Name</label>
                            <input autoFocus onChange={handleChange("name")} value={name} type="text" className="form-control" />
                        </div>  
                        <div className="form-group">
                            <label className="text-light">Last Name</label>
                            <input onChange={handleChange("lastname")}value={lastname} type="text" className="form-control" />
                        </div>  
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input onChange={handleChange("email")} value={email} type="text" className="form-control" />
                        </div>  
                        <div className="form-group">
                            <label className="text-light">Mobile</label>
                            <input onChange={handleChange("phone")} value={phone} type="text" className="form-control" />
                        </div>  
                        <div className="form-group">
                            <label htmlFor="">Status</label>
                            <select  onChange={handleChange("status")} value={status}className="form-control">
                                <option>Positive</option>
                                <option>Negative</option>
                                <option>Pending</option>
                             </select>
                        </div>  
                        <button type="submit" onClick={handleSubmit} className="btn btn-outline-success mt-3">
            Add Patient
          </button>
                    </form>
                </div>
            </div>
        )
    }
    return(
        <Base title="Add Patient" desc="Fill the following details">
            {addForm()}
            {ShowMessage()}
            <Link to="/" className="btn btn-outline-success mx-2 mt-2">Home</Link>
        </Base>
    );
}
export default AddPatient