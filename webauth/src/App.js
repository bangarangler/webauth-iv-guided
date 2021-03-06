import React, { Component } from 'react';
import './App.css';
import Login from './Login/Login'
import Users from './Users/Users'
import { Route, NavLink} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      <>
      <header>
        <NavLink to='/'>Home</NavLink>
        &nbsp;|&nbsp;
        <NavLink to='/login'>Login</NavLink>
        &nbsp;|&nbsp;
        <NavLink to='/users'>Users</NavLink>
        &nbsp;|&nbsp;
        <button onClick={this.logout}>Logout</button>
      </header>
      <main>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/users' component={Users} />
      </main>
      </>
      </div>
    );
  }

  logout = () => {
    localStorage.removeItem('token')
  }
}

function Home(props) {
  return <h1>Home Component</h1>
}

export default App;
