import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import SaruhanFooter from './SaruhanFooter.js'
import SaruhanHeader from './SaruhanHeader.js'

export default class SaruhanWeb extends Component {
  render() {
    return (
      <div>
          <SaruhanHeader></SaruhanHeader>
          <Outlet></Outlet>
          <SaruhanFooter></SaruhanFooter>
      </div>
    )
  }
}
