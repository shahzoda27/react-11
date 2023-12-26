import React, { Component } from 'react'
import { useState } from 'react'
export default function SingleCar () {
  const [users,setUsers] = useState([
    {id:1, name:"Gentra",price:"$20000",color:"white",year:"2022",position:"3",number:"777"},
      {id:2, name:"Cobalt",price:"$10000",color:"black",year:"2019",position:"2",number:"555"},
      {id:3, name:"Monza",price:"$190000",color:"grey",year:"2023",position:"1",number:"888"}])
  
    const url = window.location.href.split("/")
    let index = Number(url[4])
    
    return (
      <div>
       <h1>{users[index].name}</h1>
       <h1>{users[index].price}</h1>
        <h1>{users[index].color}</h1>
        <h1>{users[index].year}</h1>
        <h1>{users[index].position}</h1>
        <h1>{users[index].number}</h1>
      </div>
    )
  }

