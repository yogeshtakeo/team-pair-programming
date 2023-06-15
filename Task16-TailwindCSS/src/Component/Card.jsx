
function Card(props) {
    return (
        <>
           <card className="border-solid border-indigo-600 border-2 rounded bg-gradient-to-r from-cyan-500 to-blue-500">{props.children}
           <cardContent className=''></cardContent>
           
           </card>
        
        
        </>
    )
}

export default Card