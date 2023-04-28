import React, {useContext} from 'react'
import { HelperContext } from './Contexts/Helper'
import {Button} from '@mui/material'


const Test = () => {

    const  {testt, setTestt} = useContext(HelperContext)

  return (
    <div>
        <Button variant='outlined'>
            {testt}
        </Button>
        <Button  onClick={()=> setTestt('changedMe')} variant='outlined'>
            Click me
        </Button>
        
    
    </div>
  )
}

export default Test