
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

export const Login = () => {
    const [loginData, setLoginData] = React.useState({
        email: "",
        password: ""
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setLoginData(prev => ({
            ...prev,
            [name]:value
        }))

    }

    const handleLogin = () => {
      axios({
        method:"POST",
        url : "https://reqres.in/api/login",
        data : loginData
      })

    }


  return (
    <Box
    component="form"
    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
    noValidate
    autoComplete="off"
  >
    {Object.keys(loginData).map(el => <TextField id={el} value={loginData[el]} name={el} onChange={handleChange} label={el.toLocaleLowerCase()} variant="outlined" /> )}
    <Button onClick={handleLogin} variant="outlined">Log IN</Button>
    
  </Box>
  )
}








