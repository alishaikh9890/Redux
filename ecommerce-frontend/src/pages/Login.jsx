
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {loginError, loginLoading, loginSuccess, logoutSuccess} from "../store/auth/action"
import { Navigate } from 'react-router-dom';

export const Login = () => {
  const token = useSelector(state => state.auth.token);

    const [loginData, setLoginData] = React.useState({
        email: "",
        password: ""
    })

    const dispatch = useDispatch();


    const handleChange = (e) =>{
        const {name, value} = e.target;
        setLoginData(prev => ({
            ...prev,
            [name]:value
        }))

    }

    const handleLogin = () => {
      dispatch(loginLoading())
      axios({
        method:"POST",
        url : "https://reqres.in/api/login",
        data : loginData
      })
      .then(res => {
        dispatch(loginSuccess(res.data.token))
      })
      .catch(err => {
        dispatch(loginError() )
      })

    }


    if(token){
      return <Navigate to="/" />
    }

  return (
    <Box
    component="form"
    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
    noValidate
    autoComplete="off"
  >
    {Object.keys(loginData).map(el => <TextField key={el.id} id={el} value={loginData[el]} name={el} onChange={handleChange} label={el.toLocaleLowerCase()} variant="outlined" /> )}
    <Button onClick={handleLogin} variant="outlined">Log IN</Button>
    
  </Box>
  )
}








