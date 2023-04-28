import React, {useContext} from 'react'
import {AppBar, Toolbar,Button, Typography, Box, IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { HelperContext } from './Contexts/Helper'



const Nabvar = () => {

  const {user,dark, setDark, SignOut} = useContext(HelperContext)
  
  return (
    <div>
         <Box mb='50px' sx={{ flexGrow: 1}}>
      <AppBar className='appBar' position='fixed'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <MenuIcon className='iconMenu' />
          </IconButton>
          <Typography ml='10px' className='misty'
          fontFamily='monospace' letterSpacing='1px'
          variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Misty Chats
          </Typography>

            {
                user ?  <Button className='mistyy' 
                onClick={() => SignOut()}
                fontFamily='monospace' letterSpacing='0px'
                   component="div" sx={{ flexGrow: 0 }}>
                  log out
                </Button>

                : null
            }
          
          
         
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            className='iconMenuu'
            sx={{ mr: 0, ml: 0 }}
          > {
            dark ? (
              <DarkModeIcon onClick = {() => setDark(!dark)} 
              fontSize='large'   />
            ) :   <WbSunnyIcon
            onClick = {() => setDark(!dark)}
            fontSize='large' />
          }
           
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Nabvar