import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import TodoList from './components/ToDoList'
import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Logout from './components/Logout';


function App() {
  const [user, setUser] = useState(null);

  // Check if the user is already authenticated when the app loads
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('logindeta'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div className='header '  >
      <div className='main-header'>
      <h1 >Todo App</h1>
      {user && <Logout setUser={setUser} />}
      </div>
      {user ? (
        <div>
        <div className='header-row'>
          <p >Welcome, {user.username}!</p>
          {/* Render your todo list component or any other content for authenticated users */}
          {/* Example: <TodoList /> */}
          
          </div>
          <TodoList/>
          
        </div>
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  );
}

export default App;
