// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routers/routers';
import fragments from './components/fragments/fragments';
import Refs from './components/refs/refs'
import ParentRefs from './components/refs/ParentRefs';
export default function App() {
  const name = "karthik";
  const message = "hola"
  return (
    <div>
      <BrowserRouter>
      {/* <Refs/> */}
      {/* <ParentRefs/> */}
      {/* <fragments/> */}
       <Routers/>
      </BrowserRouter>
    </div>
  );
}