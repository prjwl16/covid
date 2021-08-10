/* eslint-disable no-unused-vars */
import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import { listPatients,updatePatient } from '../ApiCalls'
import Base from "../base"

const UpdatePatient = () => {
    const [number, setNumber] = useState(9527893514)
    const [data, setData] = useState({
        _id:"",
        name:"",
        lastname:"",
        email:"",
        phone:"",
        status:""
    })
    const [message, setMessage] = useState({
        success:false,
        error:false,
        
    })
    const {_id,name,lastname,email,phone,status}=data
    const {success,error,rs}=message

    const handleSearch=async _event=>{
        listPatients(number)
        .then(p=>{
            if(p.length===0)
                setMessage({
                    success:false,
                    error:true
                })
            if(p.length >0){
                setData({
                    _id:p[0]._id,
                    name:p[0].name,
                    lastname:p[0].lastname,
                    email:p[0].email,
                    phone:p[0].phone,
                    status:p[0].status,
                })
                setMessage({
                    success:true,
                    error:false
                })
            }
        })
        .catch(err=>console.log(err))
    }
    const handleRemove= async event =>{
        event.preventDefault()
        
        updatePatient(_id,status)
        .then(result=> {
            if(!result.message){
                alert("Patient Updated Successfully")
                result=false
                setData({
                    _id:"",
                    name:"",
                    lastname:"",
                    email:"",
                    phone:"",
                    status:""
                })
                // setNumber("")
                setMessage({
                    ...message,success:false
                })
                successMessage()
            }
            else{
                alert("Not Able to update patient information")
                result=false
            }
        }
            
        )
    }

    const handleValue=event=>{
        setData({...data, status:event.target.value})
    }

    const successMessage =()=>{
        return (
          <div className="alert alert-success mt-3" style={{display:success ? "" : "none"}}>
                <div className="form-group">
                    <label className="text-light">Name</label>
                    <input value={name} readOnly
                     type="text" className="form-control" />
                </div>  
                <div className="form-group">
                    <label className="text-light">Last Name</label>
                    <input readOnly
                    // onChange={()=>{
                    //     handleValue("lastname")
                    // }}
                     value={lastname} type="text" className="form-control" />
                </div>  
                <div className="form-group">
                    <label className="text-light">Email</label>
                    <input readOnly
                    // onChange={()=>{
                    //     handleValue("email")
                    // }}
                     value={email} type="text" className="form-control" />
                </div>  
                <div className="form-group">
                    <label className="text-light">Mobile</label>
                    <input readOnly
                    // onChange={()=>{
                    //     handleValue("phone")
                    // }}
                     value={phone} type="text" className="form-control" />
                </div>  
                <div className="form-group">
                <label htmlFor=""> Status </label>
                    <select  onChange={handleValue} value={status}className="form-control">
                        <option>Positive</option>
                        <option>Negative</option>
                        <option>Pending</option>
                     </select>
                </div>  
                <button onClick={handleRemove} className="btn btn-outline-danger mt-3">UPDATE</button>
          </div>
        )
      }
    const errorMessage =()=>{
        return (
          <div className="alert alert-warning mt-3" style={{display:error ? "" : "none"}}>
            <h4>Not Found </h4>
          </div>
        )
      }
    const handleChange=event=>{
        setNumber(event.target.value)
    }
    return (
        <Base title="Update Patient" desc="Search By phone number and Update patient" >

        <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
            <div className="input-group rounded">
                <input type="search" className
                ="form-control rounded" value={number} onChange={handleChange}placeholder="Enter Mobile Number to search" aria-label="Search"
                    aria-describedby="search-addon" />
                </
                div>
                <button onClick={handleSearch} className="btn btn-outline-primary mx-2 mt-2">Search</button>
                    <Link to="/" className="btn btn-outline-primary mx-2 mt-2">Home</Link>
                    {successMessage()}
                    {errorMessage()}
                    
                <div className="col-4"></div>
            </div>
        </div>

        </Base>
    )
}

export default UpdatePatient