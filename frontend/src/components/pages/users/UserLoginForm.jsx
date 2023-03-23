import React, { useState } from 'react';
import * as API from '../../../utils/api'

function UserLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };
    try {
      const res = await API.post('/login', userData)
      localStorage.setItem('token', res.data.accessToken)
      localStorage.setItem('role', res.data.role)
      localStorage.setItem('email', res.data.email)
      console.log(res.data)
    } catch(err) {
      alert('error')
    }
  };

  return (
    <div>
      <input
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    
      <input
        id='password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button id='submit' onClick={handleSubmit}>로그인</button>
    </div>
  )
}

export default UserLoginForm;
