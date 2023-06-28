import './index.css'

const Logout = props => {
  const {onLogout} = props

  const onChangeLogout = () => {
    onLogout()
  }

  return (
    <button type="button" onChange={onChangeLogout}>
      Logout
    </button>
  )
}

export default Logout
