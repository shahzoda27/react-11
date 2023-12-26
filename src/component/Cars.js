import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export default function Users() {
 const [name,setName] = useState("")
 const [price,setPrice] = useState("")
 const [color,setColor] = useState("")
 const [year,setYear] = useState("")
 const [position,setPosition] = useState("")
 const [search,setSearch] = useState("")
  const [users,setUsers] = useState([
    {id:1, name:"Gentra",price:"$20000",color:"white",year:"2022",position:"3",number:"777"},
    {id:2, name:"Cobalt",price:"$10000",color:"black",year:"2019",position:"2",number:"555"},
    {id:3, name:"Monza",price:"$190000",color:"grey",year:"2023",position:"1",number:"888"}])

const changeName = (e) =>{
setName(e.target.value)
}
const changePrice = (e) =>{
  setPrice(e.target.value)
}
const changeColor = (e) =>{
  setColor(e.target.value)
}
const changeYear = (e) =>{
setYear(e.target.value)
}
const changePosition = (e) =>{
setPosition(e.target.value)
}
const searchUser = (e) =>{
setSearch(e.target.value)
}
  const deletUser = (index) =>{
    users.splice(index,1)
    setUsers([...users])
  }
const addUser = () => {
let payload = {
  name,
  price,
  color,
  year,
  position
}
setUsers([...users ,{...payload}])
}
return(
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-8">
        <div className='row'>
            <div className="col-4">
              <input type="text" className='form-control my-4' placeholder=' Search' onChange={searchUser}/>
            </div>
        </div>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>T/R</th>
              <th>Name</th>
              <th>Price</th>
              <th>Color</th>
              <th>Year</th>
              <th>Position</th>
              <th>Action</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
           {
            users.filter((item)=>{
              if (search === "") {
                return item
              }else if(item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                  return item
              }
            }).map((item,index)=>{
              return <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.color}</td>
                <td>{item.year}</td>
                <td>{item.position}</td>
                <td>
                    <button className='btn btn-danger' onClick={()=>deletUser(index)}>delete</button>
                </td>
                <td>
                <Link to={`/single_cars/${index}`} className='btn btn-info'>open</Link>
                </td>
              </tr>
            })
           }
          </tbody>
        </table>
      </div>
      <div className="col-md-4">
            <form>
                <input type="text"className='form-control my-2' placeholder='Name' onChange={changeName} />
                <input type="text"className='form-control my-2' placeholder='Price' onChange={changePrice} />
                <input type="text"className='form-control my-2' placeholder='Color' onChange={changeColor} />
                <input type="number"className='form-control my-2' placeholder='Year' onChange={changeYear} />
                <input type="text"className='form-control my-2' placeholder='Position' onChange={changePosition} />
            </form>
            <button  className='btn btn-info mt-2' onClick={addUser}>Add users</button>
      </div>
    </div>
  </div>
)
}