import React, { useContext } from 'react'
import { BioContext } from './Context'

const Content = () => {

    const  {myName, myAge} = useContext(BioContext);

  return (
    <div>Hello, Context API, my name is {myName} and i am {myAge} years MAN.</div>
  )
}

export default Content