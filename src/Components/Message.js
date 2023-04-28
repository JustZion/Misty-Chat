import React, {useState, useEffect} from 'react'
import {Box , Stack ,TextField, Button, Typography} from '@mui/material'
import {formatRelative} from 'date-fns'
import { textAlign } from '@mui/system'

const Message = ({text,user,uid, createdAt, photoURL, displayName}) => {

const colors = ['#0F4337','#138085','purple',
'brown','#4C2F84','#0086B2','#544667'
]
const alpha1 = ['A','B','C','D']
const alpha11 = ['E','F','G','H']
const alpha2 = ['I','J','K','L']
const alpha22 = ['M','N','O','P']
const alpha3 = ['Q','R','S','T']
const alpha33 = ['U','V','W']
const others = ['X','Y','Z']


const colorCheck = (item) => {
  if (alpha1.includes(item)) {
    // console.log(999)
    return colors[0]
  }
  else if (alpha11.includes(item)) {
    return colors[1]
    console.log(99)
  }
  else if (alpha2.includes(item)) {
    return colors[2]
    console.log(99)
  }
  else if (alpha22.includes(item)) {
    return colors[3]
    console.log(99)
  }

  else if (others.includes(item)) {
    return colors[4]
    console.log(99)
  }

  else if (alpha33.includes(item)) {
    return colors[5]
    console.log(99)
  }

  else {
    return colors[6]
    console.log(99)
  }
}



  // console.log(photoURL,'userrr')
  // console.log(Math.floor(Math.random()*10))
  const rr = true
  const r = 'right'

   // console.log(displayName,'nn')
    //const timee = (new Date(createdAt.seconds * 1000));
    const [timee, settimee] = useState('')

    useEffect(() => {

       if (createdAt) {
        settimee((new Date(createdAt.seconds * 1000)));
       }

    }, [createdAt])

   
  return (
// 
//{timee.toLocaleString().slice(0,9)}
    
    <Stack my='3px'  pt='27px' pr='4px' 
   
    pl='17px' className={user.uid === uid ? 'messageb currentuser' : 
    'messageb'} direction='row'>
        <Stack display={`${user.uid === uid ? 'none' : ''}`} >
        { photoURL ? <img  className='imgChat'
        src={photoURL} alt='Avatar'
        />: <Stack mr={`${user.uid === uid ? '0px': '10px'}`}
        backgroundColor={`${colorCheck(displayName.slice(0,1).toUpperCase())}`}
        className='altt' justifyContent='center' letterSpacing='3px'
         fontSize='18px'color='white'>
          {displayName !== null && displayName.slice(0,2).toUpperCase()}</Stack>}
        </Stack>
        
        <Stack mt='4px'  direction='column'
          // sx={{alignItems: `${user.uid === uid ? 'center': 'left'}` }}
        >
            <Typography fontWeight='bold' fontSize='18px' className={
              user.uid === uid ? 'usee': photoURL !== null ? 'userr' : '' }
            mr={`${user.uid === uid ? '60px': ''}`}
            textAlign={`${user.uid === uid ? 'right': 'left'}`}
             color={` ${ photoURL === null  && colorCheck(displayName.slice(0,1).toUpperCase())}`}
             >{user.uid === uid ? 'Me': 
              <span>
                {displayName.charAt(0).toUpperCase() + displayName.slice(1)}
              </span> }
            <span className='time'>{timee.toLocaleString().slice(0,9)}</span>
 
            </Typography>
            <div  >
              <div>
              <p className='messageT'>{text}</p>
              </div>
            

            </div>
                  </Stack>

                  <Stack  display={`${user.uid === uid ? '' : 'none'}`}>
        { photoURL ? <img  className='imgChatt'
        src={photoURL} alt='Avatar'
        />: <Stack 
        backgroundColor={`${colorCheck(displayName.slice(0,1).toUpperCase())}`}
      className={`${user.uid === uid ? 'resp altt': 'altt'}`} justifyContent='center' letterSpacing='3px'
         fontSize='18px'color='white'>
          { displayName !== null && displayName.slice(0,2).toUpperCase()}</Stack>}
        </Stack>
        <Stack  direction='row'>
            
        </Stack>
                    

    </Stack>
  )
}

export default Message