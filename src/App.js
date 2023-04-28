import React , {useState, useEffect} from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import {Box , Stack ,TextField, Divider , Button, Typography} from '@mui/material'
import Channel from './Components/Channel'
import { HelperContext } from './Components/Contexts/Helper'
import Nabvar from './Components/Nabvar'
import Login from './Components/Login'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import Loader from './Components/Loader'
import axios from 'axios'
import {fetchFromAPI} from './Fetchfrom'





firebase.initializeApp({
    apiKey: "AIzaSyBiABvQc7AnlIi5V6Vru2Qz3GrrcYYnnDw",
    authDomain: "chatapp-9f0aa.firebaseapp.com",
    projectId: "chatapp-9f0aa",
    storageBucket: "chatapp-9f0aa.appspot.com",
    messagingSenderId: "568459083202",
    appId: "1:568459083202:web:84d99e0a5f048ab2ca6a5b",
    measurementId: "G-Z0C60SLS4J"
})



const auth = firebase.auth() 
const db = firebase.firestore()

const App = () => {



    
 


    const [user, setUser] = useState(()=> auth.currentUser)
    const [error, setError] = useState(null)
    const [errorr, setErrorr] = useState([])
    const [initializing, setInitializing] = useState(false)
    const [testt , setTestt]  = useState('revolve')
    const [dark, setDark] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
   
    const tryi = async () => {
        const data = await fetchFromAPI('batman')
        const tryme= data
        
        console.log(tryme,errorr, 'eeaae')
       }
    
       //tryi()
    
       
    
      


    const signInWithGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()

        auth.useDeviceLanguage()

        try {
            await auth.signInWithPopup(provider)
        } catch (error) {
            console.log(error)
        }

    }

    const  SignOut = async () => {
        try {
            await firebase.auth().signOut()
        } catch (error) {
            console.log(error)
        }
        
    }

    
    const createserWithEmailAndPassword = () => {
        createUserWithEmailAndPassword(auth, `${username}@gmail.com`, password)
        .then((res) => {
            const user = firebase.auth().currentUser;
           return user.updateProfile({
                displayName: user.email.slice(0,2),
                colors: 'red'
              })
          })
        .catch(err => (
            err.code === 'auth/email-already-in-use' ?
            signInWithEmailAndPassword(auth,`${username}@gmail.com`, password)
            .then((res) => {
                const user = firebase.auth().currentUser;
               return user.updateProfile({
                    displayName: user.email.slice(0,2),
                    colors: 'red'
                  })
              })
              .catch(err => (
                err.code === 'auth/wrong-password'  ?
                    setError('You entered a wrong password')
                : console.log(err)
              )
              )
              : console.log(err)
        ))
    }

   // const star = fetchFromAPI('batman')

   // console.log(star,'5555')

    

/*
<ChatEngine 



/>

*/
console.log(errorr, 'eeaae')
useEffect(() => {
    const logStatus = auth.onAuthStateChanged(user => {
        if (user) {
            setUser(user)
        }
        else {
            setUser(null)
        }

        if (initializing) {
            setInitializing(false)
        }
    }) 
//  <HelperContext.Provider value={{ }}>
   //  </HelperContext.Provider>

//    const tryi =  () => {
//      fetchFromAPI('batman')
//      .then((data) => setErrorr(data))
   
    
//    }

//    tryi()

    return logStatus

   
},[])

if (initializing) {
    return 'Loading....'
}

  return (
    <>
    <HelperContext.Provider value={{user,dark, setDark, SignOut, db,
    password,error,setUsername,setPassword, username,
     createserWithEmailAndPassword, signInWithGoogle }}>
        <div className={ dark ? 'dark' : 'light'}>
        <Nabvar />
        {
            user ? 
        <>
            <Channel  />
        </> :
            <Login />
                
                }
        </div>
    
    
        
    </HelperContext.Provider>
       
        
    </>
  )
}

export default App