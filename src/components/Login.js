import React, { useState } from 'react';

function Login({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    // Retrieve the stored user from localStorage
   
    // const storedUser = JSON.parse(localStorage.getItem('user'));
   
    // if (storedUser && storedUser.username === username && storedUser.password === password) {
      // Simulate successful login
      const loginobj = {username,password};
      const logindetail = JSON.stringify(loginobj);
      localStorage.setItem('logindeta',logindetail);

      setUser(loginobj);


    // } else {
    //   alert('Invalid username or password');
    // }
  };

  return (
    <div className='header-row'>
    <div className='header-col'>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
    </div>
  );
}

export default Login;
