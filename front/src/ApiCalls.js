import { API } from "./backend"

export const addPatient=async (patient)=>{
    return fetch(`${API}/addpatient`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "content-type":"application/json"
        },
        body: JSON.stringify(patient)
    })
    .then(response => {return response} )
    .catch(err=> console.log(err))
} 

export const listPatients=async (number)=>{
    return fetch(`${API}/searchpatients`, {
        method: 'POST',
        headers: {
            Accept:'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({number}),
        })
        .then(response => response.json())
        .then(data =>data)
        .catch(error => error);
}
export const updatePatient=async (_id,status)=>{
    return fetch(`${API}/updatePatient`, {
        method: 'PUT',
        headers: {
            Accept:'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({_id,status}),
        })
        .then(response => response.json())
        .then(data =>data)
        .catch(error => error);
}

export const removepatient=async (_id)=>{
    return fetch(`${API}/removepatient`,{
        method:"DELETE",
        headers:{
            Accept:"application/json",
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({_id})
    })
    .then(res=>res.json())
    .then(data=> data )
    .catch(err  => err )
}

export const listpatients = async () =>{
    return fetch(`${API}/listpatients`)
    .then(res=>res.json())
    .then(patients=> patients)
    .catch(err=> console.log(err))
}