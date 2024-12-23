import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { FormRow, Logo } from '../components'

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register Account</h4>
        <FormRow type='text' name='firstname' labelText='First Name' defaultValue='' />
        <FormRow type='text' name='lastname' labelText='Last Name' defaultValue='' />
        <FormRow type='text' name='location' labelText='Location' defaultValue='Caloocan City' />
        <FormRow type='email' name='email' labelText='Email' defaultValue='' />
        <FormRow type='password' name='password' labelText='Password' defaultValue='test123' />
        <FormRow type='password' name='confirmpassword' labelText='Confirm Password' defaultValue='test123' />
        <button type="submit" className='btn btn-block'>Create</button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>Login Account</Link>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register
