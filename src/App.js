// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routers/routers';
import PortClick from './components/portal/protalClick';

export default function App() {
  return (
    <div className='App'>
          {/* <UserProvider value="karthik">
            <Maincomponent/>
          </UserProvider> */}
      <PortClick/>
      <BrowserRouter>
       <Routers/>
      </BrowserRouter>
    </div>
  );
}