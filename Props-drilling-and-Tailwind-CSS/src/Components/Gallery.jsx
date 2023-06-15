import React from 'react'
import Button from './Button'
import Card from './Card'
import ak from './ak.jpg'
import kayak from './kayak.avif'
import Form from './Form'
//Parent Component
const Gallery = (props) => {
    console.log(props,"login")
    const handleSubmit=(event)=>{
      event.preventDefault();
    }
  return ( 
    <> 
   <div className='w-full h-screen flex justify-center items-center bg-slate-300'>
    
   
   
    <Card img1={true}  image src={ak} name='image'>
      <p>  Vibrant scene of a Hot balloon. 
        </p>
        <Button secondary={true}>Read More</Button>
    </Card>
    <Card image src={kayak} name='image'>
      <p>A Kayak Gliding Through Nature's Playground</p>
      <Button secondary={true}>Read More</Button>
    </Card>
 </div>
    <Form input={true} type='text' placeholder='Email Address'> <Button primary={true}>Submit</Button> </Form>
    <Form input type="text" placeholder='Password'>  <Button primary={true}>Submit</Button> </Form>
    <Form input type='checkbox'><p>I agree to the terms and conditions.</p></Form>
    
    
    </>
  )
}

export default Gallery