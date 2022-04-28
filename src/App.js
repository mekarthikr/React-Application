// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import Classcomponent from './components/Components/Components';
// import StatesAndLifecycle from './components/StateAndLifecycle/StatesAndLifecycle';
// import Handlingevents from './components/HandlingEvents/HandlingEvents'
// import ConditionalRendering from './components/ConditionalRendering/ConditionalRendering';
// import ListAndKeys from './components/ListAndKeys/ListAndKeys';
// import Forms from './components/Forms/Forms';
import Samplecomponents from './components/SampleComponent/SampleComponent';
import Liftingstates from './components/LiftingStateUp/LiftingStateUp'
import { Route } from 'react-router'
import { BrowserRouter, Routes } from 'react-router-dom';

export default function App() {
  const name = "karthik";
  const message = "hola"
  return (
    <div>
      {/* <Classcomponent UserName={name} />
      <StatesAndLifecycle UserName={name} Message={message} />
      <Handlingevents />
      <ConditionalRendering />
      <ListAndKeys />
      <Forms /> */}
      {/* <Samplecomponents /> */}

      <BrowserRouter>
        <Routes>
        <Route path="" element={<Liftingstates/>} />
          <Route path="home/path" element={<Samplecomponents/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}