import React from 'react'
import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import logo from '../assets/logo.svg';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='jobhunt' className='logo' />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            
          </p>
        </div>
      </div>
    </Wrapper>
  )
};


export default Landing
