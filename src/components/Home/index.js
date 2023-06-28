import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {isLogged: true}

  onLogin = () => {
    console.log('login triggered')
  }

  onLogout = () => {
    console.log('logout triggered')
  }

  render() {
    const {isLogged} = this.state

    return (
      <div>
        <Message />
        {isLogged ? (
          <Login onLogin={this.onLogin} />
        ) : (
          <Logout onLogout={this.onLogout} />
        )}
      </div>
    )
  }
}

export default Home
