import {Component} from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import Message from './components/Message'
import './App.css'

class App extends Component {
  state = {isLogged: true}

  render() {
    const {isLogged} = this.state

    return (
      <div className="container">
        <Home />
        <Message />
        {isLogged ? <Login /> : <Logout />}
      </div>
    )
  }
}

export default App
