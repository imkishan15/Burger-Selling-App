import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/auth.css'


const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "", 
  })

  const onChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  function login() {
    const user = { email, password };
    dispatch(loginUser(user));
  }
  return (
    <div className='login'> <br />
      <div className="head" style={{ width: '15%' }}>
        <center>Login Page</center>
      </div><br />
      <div className="form">
        <center>
          {console.log("User",user)}
          <div className="con">
            <table>
              <tr>
                <td>E-mail: </td>
                <td><input type="email" value={user.email} name='email' onChange={onChange} /></td>
              </tr>
              <tr>
                <td>Password: </td>
                <td><input type="password" value={user.password} name='password' onChange={onChange} /></td>
              </tr>
            </table>
            <button type='submit' value='Login' onClick={login}>Login</button>
            <p>Haven't sign up yet? &nbsp;&nbsp; <Link to='/' style={{ color: 'aqua' }}> <span className='link'>Sign up</span> </Link></p>
          </div>

        </center>
      </div>
    </div>
  )
}

export default Login