import { useState } from "react"


 function Slider ({children,src}){
    const img=[
                "https://www.bondora.com/blog/wp-content/uploads/High-paying-job.png",
                "https://tse1.mm.bing.net/th?id=OIP.slVGmJjSg9-Yygdp3lVUqwAAAA&pid=Api&P=0&h=180",
                "https://blog.hubspot.com/hubfs/best-college-websites.jpeg"
    ]
       
    const [currentImageIndex, setCurrentImageIndex]=useState(0)

    function changeSlide(index){
        setCurrentImageIndex(index)
    }

    function previousSlide(){
      setCurrentImageIndex((prevIndex) => prevIndex === 0? img.length -1 : prevIndex -1)
    }
       
    function nextSlide(){
        setCurrentImageIndex((prevIndex) => prevIndex === img.length -1 ? 0 : prevIndex + 1)
    }
    
    return(
        <>
            <div class="relative w-600 mx-40 my-10 pt-6">
                <div className="slide relative">
                    <img className="w-full h-[400px] object-cover rounded-xl"
                        src={img[currentImageIndex]}/>
                </div>

                <button className="absolute left-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer"
                onClick={previousSlide}>❮</button>

                <button className="absolute right-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer"
                onClick={nextSlide}>❯</button>

                <div className="flex justify-center items-center space-x-5 mt-2">
                    {img.map((_, index) => (
                        <div
                            key={index}
                            className={`dot border-solid border-2 border-slate-200 w-4 h-4 rounded-full cursor-pointer bg-slate-200 hover:bg-slate-400 ${
                                index === currentImageIndex ? "active" : ""
                            }`}
                            onClick={() => changeSlide(index)}>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Slider