import {Login} from './Login'
import React, { useEffect } from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Private from '../components/Private';
import Pharmacy from './Pharmacy';
import Grocery from './Grocery';
import IndividualItem from './IndividualItem';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { errorInCart, getUserCart, getUser, loadingCart } from '../store/cart/action';
import Cart from './Cart';

export const Pages = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserCart());
   
  }, [])


  return (
    <div>
        <Routes>
            <Route path="/" element={<Private><Home/></Private>} />
            <Route path="/grocery" element={<Private><Grocery/></Private>} />
            <Route path="/pharmacy" element={<Private><Pharmacy/></Private>} />
            <Route path="/product/:productId" element={<Private><IndividualItem/></Private>} />
            <Route path="/cart" element={<Private><Cart/></Private>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    </div>
  )
}
