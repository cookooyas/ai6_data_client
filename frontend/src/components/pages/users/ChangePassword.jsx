import React, { useState } from 'react';
import axios from 'axios'

function ChangePassword() {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validatePassword = () => {
    if (newPassword !== confirmPassword) {
      console.log('password is not confirmed');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePassword()) {
        axios
            .get('/users')
            .then((res) => {
                const userID = res.data._id
                axios  
                    .patch('/users', {
                        password: password,
                        newPassword: newPassword
                    })
                    .then((res) => {
                        console.log(res.data)
                        alert('update success')
                    })
            })
            .catch((err) => {
                alert('error')
            })
    }
  };

  return (
    <div>
        <input
            id='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <input
            id='newPassword'
            type='password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
        />

        <input 
            id='confirmPassword'
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
        />

      <button id='submit' onSubmit={handleSubmit}>수정하기</button>
    </div>
  )
}

export default ChangePassword