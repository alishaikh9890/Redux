import {Login} from './Login'
import React from 'react'
import {Routes, Route} from 'react-router-dom';

export const Pages = () => {
  return (
    <div>
        <Routes>
            <Route path="/login" element={<Login/>} />
        </Routes>
    </div>
  )
}

