import './index.css'

const Login = props => {
  const {onLogin} = props

  const onChangeLogin = () => {
    onLogin()
  }

  return (
    <button type="button" onClick={onChangeLogin}>
      Login
    </button>
  )
}

export default Login
