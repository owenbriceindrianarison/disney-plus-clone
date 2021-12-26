import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Register() {
  return (
    <Container>
      <Content>
        <Logo>
          <img src='/images/disney-logo.svg' />
        </Logo>
        <Form>
          <Title>Sign up with your email</Title>
          <FormInput placeholder='Email address' />
          <FormInput placeholder='Password' />
          <SubmitButton>Register</SubmitButton>
        </Form>
        <Redirect>
          <span>
            Already have an account? <Link to='/login'>Log in</Link>
          </span>
        </Redirect>
      </Content>
    </Container>
  );
}

export default Register;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  background-color: rgb(26, 29, 41);
  display: flex;
  align-items: center;
  justify-content: center;
  //   padding: 0 calc(3.5vw + 5px);
  //   position: relative;

  //   &:before {
  //     position: absolute;
  //     content: '';
  //     top: 0;
  //     left: 0;
  //     bottom: 0;
  //     right: 0;
  //     background-position: top;
  //     background-size: cover;
  //     background-repeat: no-repeat;
  //     background-image: url('/images/movie_8.webp');
  //   }
`;

const Content = styled.div`
  width: 30%;
  @media screen and (max-width: 768px) {
    width: 60%;
  }

  @media screen and (max-width: 570px) {
    width: 100%;
  }
`;

const Logo = styled.div`
  // max-width: 172px;
  height: 104px;
  display: flex;
  justify-content: center;
  img {
    width: 172px;
    height: 100%;
    object-fit: cover;
  }
`;

const Form = styled.form``;

const Title = styled.h3`
  color: #f9f9f9;
  padding-bottom: 1rem;
  font-family: Avenir-Heavy, Arial, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: 900;
  line-height: 1.2;
`;

const FormInput = styled.input`
  backdrop-filter: blur(50px);
  background-color: rgb(49, 52, 62);
  border: 1px solid transparent;
  border-radius: 4px;
  caret-color: rgb(2, 231, 245);
  height: 48px;
  margin: 5px 0;
  outline: none;
  padding: 7px 12px;
  transition: all 0.1s ease 0s;
  width: 100%;

  &:focus {
    border: 1px solid rgba(249, 249, 249, 0.3);
    color: rgb(249, 249, 249);
  }
`;

const SubmitButton = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 48px;
  background-color: #0063e5;
  font-size: 18px;
  font-weight: 800;
  margin-top: 8px;
  margin-bottom: 12px;
  padding: 0 24px;
  align-items: center;
  color: #f9f9f9;
  border-radius: 4px;
  transition: all 250ms;

  cursor: pointer;
  outline: none;
  text-align: center;
  text-decoration: none;
  font-family: Avenir-Roman, sans-serif;
  font-size: 15px;
  letter-spacing: 1.5px;
  line-height: 1.06;
  text-transform: uppercase;
  font-weight: 900;

  &:hover {
    background-color: #0483ee;
  }
`;

const Redirect = styled.div`
  span {
    font-size: 14px;
    color: #cacaca;
    letter-spacing: 1.2px;

    a {
      color: rgb(249, 249, 249);
      cursor: pointer;
      text-decoration: none;
    }
  }
`;
