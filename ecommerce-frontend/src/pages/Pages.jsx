import { Login } from '@mui/icons-material';
import React from 'react'
import {Routes, Routes} from 'react-router-dom';

const Pages = () => {
  return (
    <div>
        <Routes>
            <Route path="/login" element={<Login/>} />
        </Routes>
    </div>
  )
}

export default Pages