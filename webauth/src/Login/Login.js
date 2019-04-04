import React from 'react'
import axios from 'axios'

class Login extends React.Component {
   state = {
    username: '',
    password: ''
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username"></label><input value={this.state.username} onChange={this.handleChange} id='username' name='username' type='text' />
        </div>
        <div>
          <label htmlFor="password"></label><input value={this.state.password} onChange={this.handleChange} id='password' name='password' type='password' />
        </div>
        <button type='submit'>Login</button>
      </form>
    )
  }

handleSubmit = e => {
e.preventDefault() // stop default refresh
const endpoint = 'http://localhost:5000/api/auth/login'
axios.post(endpoint, this.state).then(res => {
  // console.log('LOGIN RESPONSE', res)
  localStorage.setItem('token', res.data.token)
  this.setState({username: '', password: ''})
}).catch(err => {
  console.error('LOGIN ERROR', err)
})
}

handleChange = e => {
  const { name, value} = e.target
this.setState({[name]: value })
}

// const o = { one: 1, two: 2}
// const propName = 'one';
// const oneValue = o.one; // dot notation
// o.one = '1'
// o[propName] = '1'
// const valueOfOne = o[propName]

}

export default Login;