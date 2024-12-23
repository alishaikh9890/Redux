import {Login} from './Login'
import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Private from '../components/Private';
import Pharmacy from './Pharmacy';
import Grocery from './Grocery';
import IndividualItem from './IndividualItem';

export const Pages = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Private><Home/></Private>} />
            <Route path="/grocery" element={<Private><Grocery/></Private>} />
            <Route path="/pharmacy" element={<Private><Pharmacy/></Private>} />
            <Route path="/product/:id" element={<Private><IndividualItem/></Private>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    </div>
  )
}
