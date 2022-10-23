import { observer } from 'mobx-react';
import React, { Component } from 'react';
import UsersStore from '../stores/usersStore';

class Users extends Component {
componentDidMount(){
    UsersStore.getUsers();
}
addUser = (user_name)=>{
    UsersStore.addUsers()
}



  render() {
    return (
      <div>
        {UsersStore.users}
      <button onClick={this.addUser} >Add User</button>
      
    </div>
    )
  }
}

export default observer(Users);