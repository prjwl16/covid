import React from 'react'
import { Link } from 'react-router-dom'
import Base from "../base"

export default function Home() {
    return (
        <Base title="Covid-19" desc="Admin dashboard">
            <div className="row p-4">
                <Link to="/add" className="col-6">
                    <button className="btn btn-success">Add Patient</button>
                </Link>
                <div className="col-6">
                <button className="btn btn-success"><a href="/remove" className="text-reset text-decoration-none">Remove Patient</a></button>
                </div>
            </div>
            <div className="row p-4">
                <div className="col-6">
                <button className="btn btn-success"><a href="/update" className="text-reset text-decoration-none">Update Patient</a></button>
                </div>
                <div className="col-6">
                <button className="btn btn-success"><a href="/show" className="text-reset text-decoration-none">Show Patients</a></button>
                </div>
            </div>
        </Base>
    )
}