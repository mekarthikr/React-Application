// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Classcomponent from './components/class_components/classComponents';
import StatesAndLifecycle from './components/StateAndLifecycle/StatesAndLifecycle'

export default function App()
{
  const name="karthik";
  const message="hola"
  return (
    <div><Classcomponent UserName={name} />
    <StatesAndLifecycle UserName={name} Message={message}/></div>
    );
}