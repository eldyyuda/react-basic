// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { RouterProvider} from 'react-router-dom';
import {router} from './routers/Index.jsx';
import './App.css';
import  {GlobalContext} from './context/Index.js';


function App() {
  const user ={
    username : 'Eldy'
  }
  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
      <RouterProvider router={router}/>
      </GlobalContext.Provider>
    </div>
  )
}

export default App
