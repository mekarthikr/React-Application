// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Classcomponent from './components/Components/Components';
import StatesAndLifecycle from './components/StateAndLifecycle/StatesAndLifecycle';
import Handlingevents from './components/HandlingEvents/HandlingEvents'
import ConditionalRendering from './components/ConditionalRendering/ConditionalRendering';
import ListAndKeys from './components/ListAndKeys/ListAndKeys';
import Forms from './components/Forms/Forms';

export default function App()
{
  const name="karthik";
  const message="hola"
  return (
    <div><Classcomponent UserName={name} />
    <StatesAndLifecycle UserName={name} Message={message}/>
    <Handlingevents/>
    <ConditionalRendering/>
    <ListAndKeys/>
    <Forms/></div>
    );
}