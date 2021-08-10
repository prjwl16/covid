/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { removepatient } from '../ApiCalls'
import { API } from '../backend'
import Base from "../base"

import "./showStyle.css"

const ShowAll = () => {
    const [data, setData] = useState()
    const [visible, setVisible] = useState(3)
    const [success, setSuccess] =useState()
    useEffect(() => {
        fetch(`${API}/listpatients`)
        .then(res=>res.json())
        .then(patients=>{setData(patients)})
        .catch(err=> console.log("error",err))
    }, [success])

    const showMore=()=>{
        setVisible(prevValue=>prevValue+3)
    }

    const onDelete=async (_id)=>{
        await removepatient(_id)
        .then(result=> {
            if(result.message){
                alert("Patient Removed Successfully")
                setSuccess(true)
            }
        })
    }

    return (
        <Base title="List Of All Patients" desc="">
        <div className="cntnr text-white">
        {
            data &&
                data.slice(0,visible).map((p,idx)=>{

                return(
                        <div className="crd" key={idx}>
                            <div className="id">
                                <span>
                                    {idx+1}
                                </span>
                            </div>
                        <div className="bigcn">
                            <h4> <span className="spn">Name  </span>{p.name} {p.lastname} </h4>
                            <h4> <span className="spn">Email </span> {p.email} </h4>
                            <h4> <span className="spn">Phone </span> {p.phone} </h4>
                            <h4><span className="spn"> Status </span> {p.status} </h4>
                            <button className="btn btn-outline-danger mx-2" onClick={()=>{onDelete(p._id)}}>DELETE</button>
                            {/* <button className="btn btn-outline-warning">UPDATE</button> */}
                        </div>
                        </div>
                    )
                })
            }
         <button className="bbt" onClick={showMore}>Load More...</button>
         <Link to="/" className="bbt">Home</Link>

        </div>
        </Base>
    )
}
export default ShowAll