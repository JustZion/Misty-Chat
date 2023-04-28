import React , {useState, useContext} from 'react'
import {Box , Stack ,InputAdornment, TextField, Button, Typography} from '@mui/material'
import google from '../assets/google.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { HelperContext } from './Contexts/Helper'

const Login = () => {

  const {user, SignOut, db, username,
    password,error,setUsername,setPassword, SignInWithEmaill,
     createserWithEmailAndPassword, signInWithGoogle} = useContext(HelperContext)

  return (
    <Stack className='mainlogin'>
      <Stack  className='form-home' boxShadow={0} p='70px 10px 0px 10px'  alignItems='center'
    justifyContent='center' spacing={2} direction='column' >
      <Typography mb='10px' fontSize='30px' className='loginn' fontWeight='600'
            fontFamily='monospace' letterSpacing='1.4px' >Login </Typography>
      <Box >
        <TextField  id="outlined-basic" label="Random Username"
        placeholder='Username'
         variant="outlined" InputProps={{
          startAdornment: (
            <InputAdornment className='iconlogin' position="start">
              <AccountCircleIcon />
            </InputAdornment>
          ),
        }} onChange={(e) => setUsername(e.target.value)} />
      </Box>
      <Box>
         <TextField id="outlined-basic" type='password'
          label="Password"
         variant="outlined" placeholder='Password'
         InputProps={{
          startAdornment: (
            <InputAdornment className='iconlogin' position="start">
              <VpnKeyIcon />
            </InputAdornment>
          ),
        }} onChange={(e) => setPassword(e.target.value)} />
          
      </Box>
      {
        error && <Typography fontSize='13px' color='orangered'>
        {error} !!</Typography>
      }
      
      {
        username !== '' ? password !== '' ? 
        <Box  textAlign='center' >
        <Button variant='contained' className='w-button'
           onClick={createserWithEmailAndPassword}
            sx={{boxShadow:2}} 
            >Login
        </Button>
        </Box>
        : '' :''
        
      }
      
        
   

      <Typography className='obvious' >or</Typography>
      <Box  textAlign='center' >
        <Button  className='g-button'
            onClick={signInWithGoogle}
            sx={{boxShadow:4}} 
            >Sign in with Google
            <img className='google' src={google} />
        </Button>
        
    </Box>
    
    </Stack>
    
    </Stack>
    
  )
}

export default Login