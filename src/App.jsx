import { useState } from 'react';
import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import moonIcon from './components/assets/moon.png'
import sun from './components/assets/sun.png'



function App() {
  const [darkMode,setDarkMode] = useState(false);

  function toggle () {
    setDarkMode(!darkMode)
  }
  return (
    <>
    <div className="App">
     <TodoList  />
    </div>
    <div className={darkMode ? document.body.classList.add('dark_mode') : 
  document.body.classList.remove('dark_mode')}>
  <button onClick={toggle} className='toggleButton'>
  <img src={darkMode ? moonIcon : sun} alt="Icon" />
</button>
    </div>
    </>
    
  );
}

export default App;
