import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { Logo, FormRow } from '../components'

const Login = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Login Account</h4>
        <FormRow type='email' name='email' labelText='Email' defaultValue='' />
        <FormRow type='password' name='email' labelText='Password' defaultValue='' />
        <button type="submit" className='btn btn-block'>Login</button>
        <button type="button" className='btn btn-block'>Demo App</button>
        <p>
          Not a member yet?
          <Link to='/register' className='member-btn'>
            Register Account
          </Link> 
        </p>
      </form>
    </Wrapper>
  )
}

export default Login
