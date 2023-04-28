import React, {useState, useEffect, useRef, useContext} from 'react'
import firebase from 'firebase/compat/app'
import {Box , Stack ,TextField, Divider , Button, Typography} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import Loader from './Loader';
import { HelperContext } from './Contexts/Helper'
import Message from './Message'

const Channel = () => {

    const {user, db, dark} = useContext(HelperContext)

    const bottomRef = useRef(null)
    const [messages, setMessages] = useState([])
    const [newmessages, setnewMessages] = useState('')
    const {uid, displayName, photoURL} = user


    const gett = async () => {
        const message = await db.collection('messagess').
        orderBy('createdAt').limit(1000).get()
       
        // message.docs.forEach(item=>{
        //     console.log(item.data())
        //    })
    }

    const messa = () => {
        return  (
             <Stack className='messager' mt='20px'>
       
             {messages.map(dataa => (
                 <Stack><Message user={user} {...dataa}/></Stack> 
             ))}

              
              
        </Stack>)
    }
   

    const changeValue = (e) => {
        setnewMessages(e.target.value)
    }

    const SubmitForm = (e) => {
        e.preventDefault()

        try {
        if (db) {
            db.collection('message').add({
                text: newmessages,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                uid,
                displayName,
                photoURL
            })
            setnewMessages('')
            bottomRef.current?.scrollIntoView({behavior: 'smooth'});
        }
    }
    catch (error) {
        console.log(error, 'an error occured')
    }
    }

    console.log(user,'userrr')


    useEffect(() => {

        if (messages.length) {
           console.log(77)
           
        }
        

        try {
            if (db) {
                const unsubscribe =  db.
                collection('message').
                orderBy('createdAt').
                limit(100).
                onSnapshot( querySnapshot => {
                  const data = querySnapshot.docs.map(doc => ({
                      ...doc.data(),
                      id: doc.id
                  }));
      
                  setMessages(data);
                  console.log(data, 'messagesss')
                })
      
                
      
      
                return unsubscribe
              }
      
      
        }
        catch (error) {
            console.log(error)
        }
      
        
        
        
    }, [db])

    if (messages.length > 20) {
       
   }   
  return (
    <Stack pt='80px' className='roott' alignItems='center'>
        
        <Stack  pb='0px' 
        sx = {{width: {lg: '70%', md:'80%', sm:'90%', xs: '100%'} }}
        className='chatScreen'  >
        <Stack mb='30px' alignItems='center'>
        <Typography mb='6px' fontWeight='700' className='mist' variant='h4'>Welcome to Misty
            </Typography>
            <Typography className='mist' fontWeight='700' variant='h5'> 
             Fun Chat App</Typography>
             <Typography mt='20px' sx={{
                color: 'gray'
             }} > 
             A React ChatApp built for fun</Typography>
        </Stack>
        <Divider className='divi'
       color={`${dark ? 'gray': 'white'}`}
        sx={{borderBottomWidth: 1}} />
        { messages.length ?
             (
             <Stack className='messager' mt='20px'>
       
             {messages.map(dataa => (
                 <Stack><Message user={user} {...dataa}/></Stack> 
             ))}

              
              
        </Stack>)
        
        : 
                 
          <Loader />
        }
      
       <Box mt='88px'
             ref={bottomRef} ></Box>
       
       <Stack backgroundColor={`${dark ? '#282A2E': 'white'}`}
       pb='30px' pt='2px'
       alignItems='center' className='formMessage'>
       <Stack sx = {{width: {lg: '70%', md:'80%', 
       sm:'90%', xs: '99%'}}}>
        
       <form className='form'
      
      onSubmit={SubmitForm} >
           <TextField 
            fullWidth
            InputProps={{ disableUnderline: true }}
           className="message"
           placeholder='Enter your message'
           onChange={changeValue}
           value={newmessages}
            variant="filled" />
            <Stack display={`${newmessages !== '' ? 'flex'
        : 'none'    
        }`} direction='row' justifyContent='end'  width='100%'>
            <Button className='messageButton' sx=
            {{ 
                width:'50px',
                height: '60px',
                mt:'-60px'
            }} type='submit'>
                <SendIcon color='error' />
                </Button>
            </Stack>
          
      </form>
       </Stack>
       
      
       </Stack>
       
      
       
    </Stack>
    </Stack>
    
  )
}

export default Channel