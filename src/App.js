// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routers/routers';
import fragments from './components/fragments/fragments';
import Refs from './components/refs/refs'
import ParentRefs from './components/refs/ParentRefs';
import { UserProvider } from './components/context/userContext';
import Maincomponent from './components/context/maincomponent';
import Fragments from './components/fragments/fragments';
import Table from './components/fragments/Table';
export default function App() {
  const name = "karthik";
  const message = "hola"
  return (
    <div className='App'>
          {/* <UserProvider value="karthik">
            <Maincomponent/>
          </UserProvider> */}
          <Table/>
      <BrowserRouter>
      <Fragments/>
      {/* <Refs/> */}
      {/* <ParentRefs/> */}
      {/* <fragments/> */}
       <Routers/>
      </BrowserRouter>
    </div>
  );
}