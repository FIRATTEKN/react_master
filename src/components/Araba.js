import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'

export default class Araba extends Component {
  render() {
    return (
        <div>
            <div>Araba</div>
            <Outlet></Outlet>
        </div>
    )
  }
}
