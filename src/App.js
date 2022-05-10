// import logo from './logo.svg';
import React, { Profiler } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routers/routers';
import PortClick from './components/portal/protalClick';
import onRendercallback from './components/onRendercallback';
import User from './components/renderprops/User';

export default function App() {
  return (
    <div className='App'>
          {/* <UserProvider value="karthik">
            <Maincomponent/>
          </UserProvider> */}
          <Profiler id="panel" onRender={onRendercallback}>
      <PortClick/>
      <User name={()=>"Karthik"} prop={45}/>
      </Profiler>
      <BrowserRouter>
       <Routers/>
      </BrowserRouter>
    </div>
  );
}