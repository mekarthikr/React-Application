import React, { Component } from "react";
import Handlingevents from '../components/handling events/HandlingEvents'
import ConditionalRendering from '../components/conditional rendering/ConditionalRendering';
import ListAndKeys from '../components/list and keys/ListAndKeys';
import Forms from '../components/forms/Forms';
import Samplecomponents from '../components/sample component/SampleComponent';
import Liftingstates from '../components/lifting state up/LiftingStateUp'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom';
import ParentRefs from "../components/refs/ParentRefs";
import Refs from "../components/refs/refs";
import Fragments from "../components/fragments/fragments";
import Table from "../components/fragments/Table";
import Hoc from "../components/higher order components/hoc";
export default class Routers extends Component
{
    render()
    {
        return(    
        <Routes>
            <Route path="events" element={<Handlingevents />} />
            <Route path="condition" element={<ConditionalRendering />} />
            <Route path="list" element={<ListAndKeys />} />
            <Route path="forms" element={<Forms />} />
            <Route path="todo" element={<Samplecomponents />} />
            <Route path="lifting" element={<Liftingstates />} />
            <Route path="pare" element={<ParentRefs />} />
            <Route path="refs" element={<Refs />} />
            <Route path="fragments" element={<Fragments />} />
            <Route path="table" element={<Table />} />
            <Route path="hoc" element={<Hoc value="karthik" />} />
          </Routes>)
    }

}