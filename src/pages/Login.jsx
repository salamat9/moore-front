import React, { useContext, useState } from 'react';
import { AuthContext } from '../context';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import { signIn } from '../http/api/auth';

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleLogin = async (e) => {
    e.preventDefault()
    await signIn({ email, password });
    setIsAuth(true)
  };
  
  return (
    <div>
      <h1>Login page</h1>
      <form>
          <MyInput type="email" placeholder='Type email...' value={email} onChange={(e) => setEmail(e.target.value)} />
          <MyInput type="password" placeholder='Type password...' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <MyButton onClick={handleLogin}>Log in</MyButton>
      </form>
    </div>
  );
};

export default Login;