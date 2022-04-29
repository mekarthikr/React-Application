// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Classcomponent from './components/components/Components';
import StatesAndLifecycle from './components/state and lifecycle/StatesAndLifecycle';
import Handlingevents from './components/handling events/HandlingEvents'
import ConditionalRendering from './components/conditional rendering/ConditionalRendering';
import ListAndKeys from './components/list and keys/ListAndKeys';
import Forms from './components/forms/Forms';
import Samplecomponents from './components/sample component/SampleComponent';
import Liftingstates from './components/lifting state up/LiftingStateUp'
import { Route } from 'react-router'
import { BrowserRouter, Routes } from 'react-router-dom';

export default function App() {
  const name = "karthik";
  const message = "hola"
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="" element={<Classcomponent UserName={name} />} />
        <Route path="state" element={<StatesAndLifecycle UserName={name} Message={message} />} />
        <Route path="events" element={<Handlingevents/>} />
        <Route path="condition" element={<ConditionalRendering/>} />
        <Route path="list" element={<ListAndKeys/>} />
        <Route path="forms" element={<Forms/>} />
        <Route path="todo" element={<Samplecomponents/>} />
        <Route path="lifting" element={<Liftingstates/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}