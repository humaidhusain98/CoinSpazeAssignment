import React from 'react'
import styled from '@emotion/styled';

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;

  .heading-lg{
    font-size: 40px;
   
    margin-top: 30px;

    @media (max-width: 700px) {
      width: 350px;
    }
  }

  .pay-btn{
    margin-top: 100px;
  }

`;

export default function Login() {
  return (
    <MainContainer className="login-page fccfs">
      <div className="heading-lg">
        Login Page
      </div>
    </MainContainer>
  )
}
