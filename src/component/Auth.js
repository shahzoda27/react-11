import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
export default function Auth () {
  const navigate =  useNavigate()
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const handleUsername = (e) =>{
    setUsername(e.target.value)
    }
  const  handlePassword = (e) =>{
    setPassword(e.target.value)
    }
  const  login = (username,password) =>{
    if (username === "salom" && password === "1234") {
       navigate("/cars")
    }else {
        alert ("fail")
    }
    }
    return (
        <div className='container'>
        <div className="row mt-4">
          <div className='col-6 offset-3'>
            <div className="card">
              <div className='card-header'>
                <h1 className='text-center'>Login</h1>
              </div>
              <div className='card-body'>
                <input type="text" onChange={handleUsername} placeholder='Username' className='form-control my-2' />
                <input type="text" onChange={handlePassword}  placeholder='Password' className='form-control my-2' />
              </div>
              <div className="card-footer d-flex justify-content-center">
                <div className="row">
                <button className='btn btn-success' onClick={()=>login("salom","1234")}>Login</button>
                
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
  }
