// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routers/routers';
// import { UserProvider } from './components/context/userContext';
// import Maincomponent from './components/context/maincomponent';
export default function App() {
  // const name = "karthik";
  // const message = "hola"
  return (
    <div className='App'>
          {/* <UserProvider value="karthik">
            <Maincomponent/>
          </UserProvider> */}
      <BrowserRouter>
       <Routers/>
      </BrowserRouter>
    </div>
  );
}