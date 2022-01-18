import React from 'react'
import { useEffect, useState } from "react";
const Login = () => {//need to do AJAX call in handleSubmit. Also handleSignUp from redux
  
  const useInput = init => {
    const [ value, setValue ] = useState(init);
    const onChange = e => {
      setValue(e.target.value);
    };
    return [ value, onChange ];
  };
  
  const [userName, userNameOnChange] = useInput('');
  const [password, passwordOnChange] = useInput('');
  
  

  const handleSubmit = () => {
    //insert AJAX call for user login
  }
  const handleSignUp = () => {
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>
          Username:
          <input className= "userNameInput" type="text" value= {userName} onChange= {userNameOnChange} />
        </h2>
        <h2>
          Password:
          <input className= "passwordInput" type="password" value= {password} onChange= {passwordOnChange} />
        </h2>
    </form>
    <h2>
    Don't have a login?
    <button className= 'button' type='button' onClick={handleSignUp}>
    Sign Up
    </button>
    </h2>
  </div>
  )

};
export default Login;