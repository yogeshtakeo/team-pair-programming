import React from 'react'

function CourseCard() {

  return (
    <div>
        <p className='text-3xl p-6 font-serif font-semibold'>OUR COURSES</p>

        <div className='grid grid-cols-3 gap-6'> 
        <div className=' h-52 w-64  m-2 border-2 border-orange-400 p-4 gap-2 bg-black text-white '>
            <div>
                <h1 className='text-lg '>Intro to ChatGPT</h1>
                <p className='flex mt-2 text-sm'>Learn about ChatGPT, one of the most advanced AI systems available today, and dive into the world of Generative AI
                </p>
                <button className='w-7 ml-auto mt-6 p-1 underline decoration-white hover:scale-110 text-base'>
                    Select
                </button>
            </div>
            
        </div>
        <div className=' h-52 w-64  m-2 border-2 border-orange-400 p-4 gap-2 bg-black text-white'>
            <div>
                <h1 className='text-lg'>Learn HTML</h1>
                <p className='flex mt-2 text-sm'>Start at the beginning by learning HTML basics — an important foundation for building and editing web pages.
                </p>
                <button className='w-7 ml-auto mt-6 p-1 underline decoration-white hover:scale-110 text-base'>
                    Select
                </button>
            </div>
            
        </div>
        <div className=' h-52 w-64  m-2 border-2 border-orange-400 p-4 gap-2 bg-black text-white'>
            <div>
                <h1 className='text-lg'>Learn JavaScript</h1>
                <p className='flex mt-2 text-sm'>Learn how to use JavaScript — a powerful and flexible programming language for adding website interactivity.
                </p>
                <button className='w-7 ml-auto mt-6 p-1 underline decoration-white hover:scale-110 text-base'>
                    Select
                </button>
            </div>
            
        </div>
        <div className=' h-56 w-64  m-2 border-2 border-orange-400 p-4 gap-2 bg-black text-white'>
            <div>
                <h1 className='text-lg'>Learn Java</h1>
                <p className='flex mt-2 text-sm'>Learn to code in Java — a robust programming language used to create software, web and mobile apps, and more.
                </p>
                <button className='w-7 ml-auto mt-12 p-1 underline decoration-white hover:scale-110 text-base'>
                    Select
                </button>
            </div>
            
        </div>
        <div className=' h-56 w-64  m-2 border-2 border-orange-400 p-4 gap-2 bg-black text-white'>
            <div>
                <h1 className='text-lg'>Learn Python</h1>
                <p className='flex mt-2 text-sm'>Learn the basics of the world’s fastest growing and most popular programming language used by software engineers, analysts, and machine learning engineers alike.
                </p>
                <button className='w-7 ml-auto mt-6 p-1 underline decoration-white hover:scale-110 text-base'>
                    Select
                </button>
            </div>
            
        </div>
        <div className=' h-56 w-64  m-2 border-2 border-orange-400 p-4 gap-2 bg-black text-white'>
            <div>
                <h1 className='text-lg'>Learn CSS</h1>
                <p className='flex mt-2 text-sm'>In this CSS tutorial, you’ll learn how to add CSS to visually transform HTML into eye-catching sites.
                </p>
                <button className='w-7 ml-auto mt-12 p-1 underline decoration-white hover:scale-110 text-base'>
                    Select
                </button>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default CourseCard
