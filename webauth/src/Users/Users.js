import React from 'react'
import axios from 'axios'

import requiresAuth from '../auth/requiresAuth'

class Users extends React.Component {
  state = {
    users: []
  }
  render() {
    return (
      <>
      <h2>List of Users</h2>
      <ul>
        {this.state.users.map(u => (
          <li key={u.id}>{u.username}</li>
        ))}
      </ul>
      </>
    )
  }

  componentDidMount() {
    const endpoint = `/users`
    // const token = localStorage.getItem('token')
    // const requestConfig = {
    //   headers: {
    //   authorization: token
    //   }
    // }
    axios.get(endpoint).then(res => {
      this.setState({ users: res.data})
    }).catch(err => {
      console.error('USER ERROR', err)
    })
  }
}

export default requiresAuth(Users);
// export default Users;