import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/auth.css'
import axios from "axios"
import Sucess from './Sucess'


const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    re_password: ""
  })


  const [success, setSuccess] = useState(false)

  const onChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  
  const register=()=>{
    const {name,email,password,re_password}=user
    if(name && email && password && (password===re_password))
    {
      setSuccess(true);
      axios.post('localhost:8080/api/reg', user).then(e=>console.log(e))
      
    }
    else{
      alert('Passwords not match!')
    }
    
  }


  return (
    <div className='register'> <br />
      <div className="head">
        <center>Register Page</center>
      </div><br />
      <div className="form" >
        <center>
          <div className="con">
            <table>
              <tr>
                <td>Name: </td>
                <td><input value={user.name} name='name' onChange={onChange} type="text" /></td>
              </tr>
              <tr>
                <td>E-mail: </td>
                <td><input value={user.email} name='email' onChange={onChange} type="email" /></td>
              </tr>
              <tr>
                <td>Password: </td>
                <td><input value={user.password} name='password' onChange={onChange} type="password" /></td>
              </tr>
              <tr>
                <td>Re-enter Password: </td>
                <td><input value={user.re_password} name='re_password' onChange={onChange} type="password" /></td>
              </tr>
            </table>
            <button onClick={register}>Register</button>
            {success && <Sucess />}
            
            <br />
            <p>Registered already? &nbsp;&nbsp; <Link to='/login' style={{ color: 'aqua' }}> <span className='link'>Login</span> </Link></p>
          </div>
        </center>
      </div>
    </div>
  )
}

export default Register