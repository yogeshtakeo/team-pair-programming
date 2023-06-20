





function Card(props) {
    return (
        <>
           <card className="border-solid rounded-xl shadow bg-gradient-to-r from-cyan-500 to-blue-500">{props.children}
           <cardContent className=''></cardContent>
           
           </card>
        
        
        </>
    )
}

export default Card