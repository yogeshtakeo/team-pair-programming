

function Form(props) {
    return (
        <>
         <div className="flex items-center justify-center">
          <form className="inline-flex flex-col p-2 ">  
            {props.children}  <input type={props.type} placeholder={props.name} className="rounded"></input>
            
          </form>
        
         </div>
        
        </>
    )
}

export default Form