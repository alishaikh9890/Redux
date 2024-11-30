
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Password } from '@mui/icons-material';

const Login = () => {
    const [loginData, setLoginData] = React.useState({
        email: "",
        password: ""
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setLoginData(prev => ({
            ...prve,
            [name]:value
        }))

    }
  return (
    <Box
    component="form"
    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
    noValidate
    autoComplete="off"
  >
    {Object.keys(loginData).map(el => <TextField id={el} value={loginData[el]} name={el} onChange={handleChange} label={el.toLocaleLowerCase()} variant="outlined" /> )}
    
  </Box>
  )
}

export default Login






