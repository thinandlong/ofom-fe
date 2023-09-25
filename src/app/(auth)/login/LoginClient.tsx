'use client';

import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Wrapper from './components/Wrapper';

const LoginClient = () => {
  return (
    <Wrapper>
      <Header />
      <LoginForm />
    </Wrapper>
  );
};

export default LoginClient;
