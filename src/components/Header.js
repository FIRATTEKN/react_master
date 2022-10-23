import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../upload/logo.png';
import { Outlet } from 'react-router-dom'

export default class header extends Component {
    constructor(){
        super()
        this.state = {
            logo : "expo-leisure.png"
        }
    }
  render() {
    return (
      <div>
        <header>
        header
        </header>
        <Outlet></Outlet>
        
      </div>
    )
  }
}
