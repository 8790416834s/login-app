import './index.css'

const Login = () => {
  const onChange = () => {
    changeOver()
  }

  return (
    <button type="button" onClick="onChange">
      Login
    </button>
  )
}

export default Login
