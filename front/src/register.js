import './App.css';
import Login from './Login'
import Carteira from './carteira'
import React, { Component } from "react"
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom"


export default class register extends Component{

  constructor(props){
    super(props);
    this.state = {

      register:{},
        
    }

    this.handleChange = this.handleChange.bind(this);

}

handleChange = (e) => {

  console.log(e.target.value)
  this.setState(state => {state.register[e.target.name]= e.target.value})
  
  
}

submitHandler = e => {
  e.preventDefault()
  console.log(this.state)

  axios.post("http://localhost:3003/api/user/register", this.state.login)
        .then(response => {
        //   this.setState(state => {state.token=response.data})
        //   this.props.setToken(this.state.token)
        //   console.log("token:::",this.state.token)
          this.props.history.push("/Login")

        })
        .catch(error => {
          alert("Informações Invalidas")
        })

}


  render(){

    return(
      
      <div className="App">
      <form onSubmit={this.submitHandler}>
      <br/><br/>
      <br/><br/>
        <label for="email">Username:</label>
        <input type="text" id="username" name="username" onChange={this.handleChange}/> 


        <label for="email">Email:</label>
        <input type="text" id="email" name="email" onChange={this.handleChange}/> 
        <br/><br/>

        <label for="password">Senha:</label>
        <input type="password" id="password" name="password" onChange={this.handleChange}/>

        <br/><br/>

        <button type="submit">registrar</button>

      </form>
      </div>

    
     
    );
  }}
