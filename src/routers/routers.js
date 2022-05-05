import React, { Component } from "react";
import Maincomponent from '../components/context/maincomponent';
import Classcomponent from '../components/components/Components';
import StatesAndLifecycle from '../components/state and lifecycle/StatesAndLifecycle';
import Handlingevents from '../components/handling events/HandlingEvents'
import ConditionalRendering from '../components/conditional rendering/ConditionalRendering';
import ListAndKeys from '../components/list and keys/ListAndKeys';
import Forms from '../components/forms/Forms';
import Samplecomponents from '../components/sample component/SampleComponent';
import Liftingstates from '../components/lifting state up/LiftingStateUp'
import { Route } from 'react-router'
import { BrowserRouter, Routes } from 'react-router-dom';
// import Maincomponent from "../components/context/maincomponent";
import { UserProvider } from '../components/context/userContext';
import Error from '../components/error boundries/Error';
import Errorboundries from '../components/error boundries/Errorboundries'
export default class Routers extends Component
{
    render()
    {
        return(    
        <Routes>
            {/* <Route path="home" element={<Classcomponent UserName={name} />} />
            <Route path="state" element={<StatesAndLifecycle UserName={name} Message={message} />} /> */}
            {/* <UserProvider value="karthik">
            <Route path="context" element={Maincomponent}/>
            </UserProvider> */}
            <Route path="events" element={<Handlingevents />} />
            <Route path="condition" element={<ConditionalRendering />} />
            <Route path="list" element={<ListAndKeys />} />
            <Route path="forms" element={<Forms />} />
            <Route path="todo" element={<Samplecomponents />} />
            <Route path="lifting" element={<Liftingstates />} />
          </Routes>)
    }

}