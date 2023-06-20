import { useState } from "react"


function Form(props) {

  const [username, setUsername]=useState("")
  const [emailId, setEmailId]=useState("")

  const [password, setPassword]=useState("")

  const handleSubmit = (e) => {
    alert(`${username} has logged`)
  }
  
  
    return (
        <>
         <div className="flex items-center justify-center" onSubmit={handleSubmit}>
          <form className="inline-flex flex-col p-2 ">  
            {props.children}  <input type={props.type} placeholder={props.name} className="rounded" ></input>
  
          </form>
        
         </div>
        
        </>
    )
}

export default Form