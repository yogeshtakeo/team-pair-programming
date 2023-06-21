import React, { useState } from 'react'


function CourseCard() {
    const[isOpen, setIsOpen]=useState(false)
    const handleOpen=()=>{
        setIsOpen(!isOpen)
    }

  return (
    <div>
        <button className='uppercase' onClick={handleOpen}>Programmes</button>
        {isOpen ?(
        <div className='absolute right-44  w-3/4 m-9 pb-6 border-2 rounded-2xl  border-zinc-600 backdrop-blur-2xl flex flex-col justify-center items-center '>
        <p className='text-3xl p-4 font-serif text-center'>OUR COURSES</p>

        <div className='grid grid-cols-3 gap-5'> 
        <div className=' h-auto w-80  border-2 border-orange-400 rounded-md p-4  bg-black text-white '>
            <div>
                <h1 className='text-xl '>Intro to ChatGPT</h1>
                <p className='mt-2 text-md'>Learn about ChatGPT, one of the most advanced AI systems available today, and dive into the world of Generative AI
                </p>
                <button className='ml-auto mt-6 underline decoration-white hover:scale-110 text-lg'>
                    Select
                </button>
            </div>
            
        </div>
        <div className=' h-auto w-80 border-2 border-orange-400 rounded-md p-4 bg-black text-white'>
            <div>
                <h1 className='text-xl'>Learn HTML</h1>
                <p className='mt-2 text-md'>Start at the beginning by learning HTML basics — an important foundation for building and editing web pages.
                </p>
                <button className='ml-auto mt-6 p-1 underline decoration-white hover:scale-110 text-lg'>
                    Select
                </button>
            </div>
            
        </div>
        <div className=' h-auto w-80 border-2 border-orange-400 rounded-md p-4 bg-black text-white'>
            <div>
                <h1 className='text-xl'>Learn JavaScript</h1>
                <p className='mt-2 text-md'>Learn how to use JavaScript — a powerful and flexible programming language for adding website interactivity.
                </p>
                <button className=' ml-auto mt-6 p-1 underline decoration-white hover:scale-110 text-lg'>
                    Select
                </button>
            </div>
            
        </div>
        <div className=' h-64 w-80 border-2 border-orange-400  rounded-md p-4  bg-black text-white'>
            <div>
                <h1 className='text-xl'>Learn Java</h1>
                <p className='mt-2 text-md'>Learn to code in Java — a robust programming language used to create software, web and mobile apps, and more.
                </p>
                <button className='w-7 ml-auto mt-12 p-1 underline decoration-white hover:scale-110 text-lg'>
                    Select
                </button>
            </div>
            
        </div>
        <div className='h-64 w-80 border-2 border-orange-400 rounded-md p-4 gap-2 bg-black text-white'>
            <div>
                <h1 className='text-xl'>Learn Python</h1>
                <p className=' mt-2 text-md'>Learn the basics of the world’s fastest growing and most popular programming language used by software engineers, analysts, and machine learning engineers alike.
                </p>
                <button className=' ml-auto mt-6 p-1 underline decoration-white hover:scale-110 text-lg'>
                    Select
                </button>
            </div>
            
        </div>
        <div className=' h-64 w-80 border-2 border-orange-400 rounded-md p-4 gap-2 bg-black text-white'>
            <div>
                <h1 className='text-xl'>Learn CSS</h1>
                <p className='mt-2 text-md'>In this CSS tutorial, you’ll learn how to add CSS to visually transform HTML into eye-catching sites.
                </p>
                <button className='w-7 ml-auto mt-20 p-1 underline decoration-white hover:scale-110 text-lg'>
                    Select
                </button>
            </div>
            
        </div>
        </div>
        </div>
        ):('')}
    </div>
  )
}

export default CourseCard
