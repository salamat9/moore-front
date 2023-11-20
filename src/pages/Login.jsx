import React, {useContext} from 'react';
import {AuthContext} from '../context';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";

const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  
  const login = event => {
      event.preventDefault()
      setIsAuth(true)
      localStorage.setItem('auth', 'true')
  };
  
  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={login}>
          <MyInput type="text" placeholder='enter login'/>
          <MyInput type="text" placeholder='enter password'/>
          <MyButton>Log in</MyButton>
      </form>
    </div>
  );
};

export default Login;