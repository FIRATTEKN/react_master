import { Button } from 'bootstrap';
import { observer } from 'mobx-react';
import React, { Component } from 'react'
import { Outlet } from 'react-router-dom';
import '../Dist/style.css';
import LoginModel from '../Models/LoginModel.js';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            user_name:'',
            password:'',
            admin:localStorage.getItem("admin"),
            path:window.location.pathname,
        }

        this.handleUserName = this.handleUserName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);

    }

    handleUserName(event) {
        this.setState({user_name: event.target.value});
    }
    handlePassword(event) {
        this.setState({password: event.target.value});
    }

    async girisYap(user_name,password){
        const sonuc = await LoginModel.checkAccount(user_name,password);
        if(sonuc.sonuc_kodu==1){
            localStorage.setItem("admin", "on");
            this.setState({admin:"on"});
            window.location="admin"
            let path_array = window.location.pathname.match("/");
            console.log(path_array)

        }
        else{
            localStorage.setItem("admin", "off");
        }
    }


  render() {
    if(this.state.admin!="on"){
        return (
            <div>
                {console.log(window.location.pathname.match("/"))}
                <div className='login-body' >
                      <div className='login-group'>
                          <label>Kullanıcı Adı</label>
                          <input type="text" onChange={this.handleUserName} />    
                      </div> 
                      <div className='login-group'>
                          <label>Şifre</label>
                          <input type="password" onChange={this.handlePassword} />    
                      </div>  
                      {this.state.user_name}
                      {this.state.password}
                      <button type='submit' onClick={()=>{this.girisYap(this.state.user_name,this.state.password)}} >Giriş</button>
                </div>
          </div>
        )
    }
    else{
        return(
            <div>
                <Outlet></Outlet>
            </div>
        )
    }

  }
}
