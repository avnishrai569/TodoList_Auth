import React from 'react';

function Logout({ setUser }) {
  const handleLogout = () => {
    localStorage.removeItem('logindeta');
    setUser(null);
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
