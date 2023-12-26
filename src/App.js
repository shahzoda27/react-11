import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './component/Auth'
import Cars from './component/Cars'
import SingleCar from './component/SingleCar'

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Auth/>}/>
        <Route path="cars" element={<Cars/>}/>
        <Route path="single_cars/:id" element={<SingleCar/>}/>
      </Routes>
    )
  }
}
