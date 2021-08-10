import React from 'react'
import {BrowserRouter,Switch,Route} from "react-router-dom"
import addPatient from "./op/addPatient"
import Home from "./op/Home"
import updatePatience from "./op/updatePatience"
import removePatient from "./op/removePatient"
import ShowAll from "./op/ShowAll"


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component ={Home}  />
        <Route path="/add" exact component ={addPatient}  />
        <Route path="/remove" exact component ={removePatient}  />
        <Route path="/update" exact component ={updatePatience}  />
        <Route path="/show" exact component ={ShowAll}  />
      </Switch>
    </BrowserRouter>
  );
}