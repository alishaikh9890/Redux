import {Login} from './Login'
import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Private from '../components/Private';

export const Pages = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Private><Home/></Private>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    </div>
  )
}

