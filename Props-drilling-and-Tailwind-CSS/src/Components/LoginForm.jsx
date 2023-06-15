import React from 'react'
import Buttons from './Buttons'
import Card from './Card'
const LoginForm = (props) => {
    console.log(props,"login")
  return ( 
    <>
    <Buttons primary={true}>{props.btn1}</Buttons>
    <Buttons secondary={true}>Jharana ko button</Buttons>
    <Buttons>{" Yogesh ko Button"}</Buttons>
    <Card>{'card1'}</Card>
    <Card>{'card2'}</Card>
    </>
  )
}

export default LoginForm